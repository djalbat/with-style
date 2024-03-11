"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _ruleSets = _interopRequireDefault(require("./ruleSets"));
var _declarations = _interopRequireDefault(require("./declarations"));
var _string = require("../utilities/string");
var _constants = require("../constants");
var _content = require("../utilities/content");
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var queriesQuery = _occamQuery.Query.fromExpression("/media/mediaQueries"); ///
var Media = /*#__PURE__*/ function() {
    function Media(declarations, ruleSets, queries) {
        _classCallCheck(this, Media);
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.queries = queries;
    }
    _createClass(Media, [
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "getRuleSets",
            value: function getRuleSets() {
                return this.ruleSets;
            }
        },
        {
            key: "getQueries",
            value: function getQueries() {
                return this.queries;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                indent = indent + _constants.TWO_SPACES;
                var css = _constants.EMPTY_STRING;
                var ruleSetsCSS = this.ruleSets.asCSS(className, indent), declarationsCSS = this.declarations.asCSS(className, indent);
                var ruleSetsDeclarationsCSS = "".concat(declarationsCSS).concat(ruleSetsCSS);
                if (ruleSetsDeclarationsCSS !== _constants.EMPTY_STRING) {
                    ruleSetsDeclarationsCSS = (0, _string).trim(ruleSetsDeclarationsCSS);
                    css = "@media ".concat(this.queries, " {\n").concat(ruleSetsDeclarationsCSS, "}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), queries = queriesFromNodeAndTokens(node, tokens), media = new Media(declarations, ruleSets, queries);
                return media;
            }
        }
    ]);
    return Media;
}();
function queriesFromNodeAndTokens(node, tokens) {
    var queriesNodeContent = (0, _content).contentFromQueryNodeAndTokens(queriesQuery, node, tokens), queries = "".concat(queriesNodeContent);
    return queries;
}
exports.default = Media;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFRXT19TUEFDRVMsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0UXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBpbmRlbnQgKyBUV09fU1BBQ0VTO1xuXG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgbGV0IHJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTID0gYCR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9YDtcblxuICAgIGlmIChydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyA9IHRyaW0ocnVsZVNldHNEZWNsYXJhdGlvbnNDU1MpO1xuXG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5xdWVyaWVzfSB7XG4ke3J1bGVTZXRzRGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBxdWVyaWVzID0gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBxdWVyaWVzTm9kZUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhxdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHF1ZXJpZXMgPSBgJHtxdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gcXVlcmllcztcbn1cbiJdLCJuYW1lcyI6WyJxdWVyaWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsInF1ZXJpZXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFF1ZXJpZXMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsIlRXT19TUEFDRVMiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJydWxlU2V0c0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTIiwidHJpbSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIlJ1bGVTZXRzIiwicXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJxdWVyaWVzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVkLElBQUEsU0FBWSxrQ0FBWixZQUFZLEVBQUE7QUFDUixJQUFBLGFBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUVwQixJQUFBLE9BQXFCLFdBQXJCLHFCQUFxQixDQUFBO0FBQ0QsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ1QsSUFBQSxRQUFzQixXQUF0QixzQkFBc0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxZQUFZLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQUFBQyxFQUFDLEdBQUc7QUFFdEQsSUFBQSxBQUFNQyxLQUFLLGlCQW1EdkIsQUFuRFk7YUFBTUEsS0FBSyxD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