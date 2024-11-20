"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Media;
    }
});
var _occamquery = require("occam-query");
var _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _string = require("../utilities/string");
var _constants = require("../constants");
var _content = require("../utilities/content");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var queriesQuery = _occamquery.Query.fromExpressionString("/media/mediaQueries"); ///
var Media = /*#__PURE__*/ function() {
    function Media(declarations, ruleSets, queries) {
        _class_call_check(this, Media);
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.queries = queries;
    }
    _create_class(Media, [
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
                    ruleSetsDeclarationsCSS = (0, _string.trim)(ruleSetsDeclarationsCSS);
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
    var queriesNodeContent = (0, _content.contentFromQueryNodeAndTokens)(queriesQuery, node, tokens), queries = "".concat(queriesNodeContent);
    return queries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFRXT19TUEFDRVMsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0UXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBpbmRlbnQgKyBUV09fU1BBQ0VTO1xuXG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgbGV0IHJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTID0gYCR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9YDtcblxuICAgIGlmIChydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyA9IHRyaW0ocnVsZVNldHNEZWNsYXJhdGlvbnNDU1MpO1xuXG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5xdWVyaWVzfSB7XG4ke3J1bGVTZXRzRGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBxdWVyaWVzID0gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBxdWVyaWVzTm9kZUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhxdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHF1ZXJpZXMgPSBgJHtxdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gcXVlcmllcztcbn1cbiJdLCJuYW1lcyI6WyJNZWRpYSIsInF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsInF1ZXJpZXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFF1ZXJpZXMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsIlRXT19TUEFDRVMiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJydWxlU2V0c0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTIiwidHJpbSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIlJ1bGVTZXRzIiwicXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJxdWVyaWVzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MEJBWEM7K0RBRUQ7bUVBQ0k7c0JBRUo7eUJBQ29CO3VCQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLElBQU1DLGVBQWVDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDLHdCQUF3QixHQUFHO0FBRTVELElBQUEsQUFBTUgsc0JBQUQsQUFBTDthQUFNQSxNQUNQSSxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsT0FBTztnQ0FEeEJOO1FBRWpCLElBQUksQ0FBQ0ksWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFKRU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsU0FBUyxFQUFFQyxNQUFNO2dCQUNyQkEsU0FBU0EsU0FBU0MscUJBQVU7Z0JBRTVCLElBQUlDLE1BQU1DLHVCQUFZO2dCQUV0QixJQUFNQyxjQUFjLElBQUksQ0FBQ1gsUUFBUSxDQUFDSyxLQUFLLENBQUNDLFdBQVdDLFNBQzdDSyxrQkFBa0IsSUFBSSxDQUFDYixZQUFZLENBQUNNLEtBQUssQ0FBQ0MsV0FBV0M7Z0JBRTNELElBQUlNLDBCQUEwQixBQUFDLEdBQW9CRixPQUFsQkMsaUJBQThCLE9BQVpEO2dCQUVuRCxJQUFJRSw0QkFBNEJILHVCQUFZLEVBQUU7b0JBQzVDRywwQkFBMEJDLElBQUFBLFlBQUksRUFBQ0Q7b0JBRS9CSixNQUFNLEFBQUMsVUFDWEksT0FEb0IsSUFBSSxDQUFDWixPQUFPLEVBQUMsUUFDVCxPQUF4QlkseUJBQXdCO2dCQUd0QjtnQkFFQSxPQUFPSjtZQUNUOzs7O1lBRU9NLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNO2dCQUNuQyxJQUFNbEIsZUFBZW1CLHFCQUFZLENBQUNILGlCQUFpQixDQUFDQyxNQUFNQyxTQUNwRGpCLFdBQVdtQixpQkFBUSxDQUFDSixpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDNUNoQixVQUFVbUIseUJBQXlCSixNQUFNQyxTQUN6Q0ksUUFBUSxJQTdDRzFCLE1BNkNPSSxjQUFjQyxVQUFVQztnQkFFaEQsT0FBT29CO1lBQ1Q7OztXQWhEbUIxQjs7QUFtRHJCLFNBQVN5Qix5QkFBeUJKLElBQUksRUFBRUMsTUFBTTtJQUM1QyxJQUFNSyxxQkFBcUJDLElBQUFBLHNDQUE2QixFQUFDM0IsY0FBY29CLE1BQU1DLFNBQ3ZFaEIsVUFBVSxBQUFDLEdBQXFCLE9BQW5CcUI7SUFFbkIsT0FBT3JCO0FBQ1QifQ==