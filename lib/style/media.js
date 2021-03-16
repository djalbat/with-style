"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _ruleSets = _interopRequireDefault(require("./ruleSets"));
var _declarations = _interopRequireDefault(require("./declarations"));
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
var mediaQueriesQuery = _occamDom.Query.fromExpression("/media/mediaQueries");
var Media = function() {
    function Media(mediaQueries, declarations, ruleSets) {
        _classCallCheck(this, Media);
        this.mediaQueries = mediaQueries;
        this.declarations = declarations;
        this.ruleSets = ruleSets;
    }
    _createClass(Media, [
        {
            key: "getMediaQueries",
            value: function getMediaQueries() {
                return this.mediaQueries;
            }
        },
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
            key: "asCSS",
            value: function asCSS(className) {
                var css = "";
                var ruleSetsCSS = this.ruleSets.asCSS(className, "  "), declarationsCSS = this.declarations.asCSS(className, "    ");
                if (ruleSetsCSS !== null || declarationsCSS !== null) {
                    css = "@media ".concat(this.mediaQueries, " {\n").concat(declarationsCSS).concat(ruleSetsCSS, "\n}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), media = new Media(mediaQueries, declarations, ruleSets);
                return media;
            }
        }
    ]);
    return Media;
}();
exports.default = Media;
function mediaQueriesFromNodeAndTokens(node, tokens) {
    var mediaQueriesNodeContent = _content.contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
    return mediaQueries;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgbWVkaWFRdWVyaWVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9tZWRpYS9tZWRpYVF1ZXJpZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKSB7XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFRdWVyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhUXVlcmllcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhjbGFzc05hbWUsIFwiICAgIFwiKTtcblxuICAgIGlmICgocnVsZVNldHNDU1MgIT09IG51bGwpIHx8IChkZWNsYXJhdGlvbnNDU1MgIT09IG51bGwpKSB7XG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9XG59XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKG1lZGlhUXVlcmllc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxTQUFBO0lBRUEsU0FBQTtJQUNBLGFBQUE7SUFFQSxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsaUJBQUEsR0FQQSxTQUFBLE9BT0EsY0FBQSxFQUFBLG1CQUFBO0lBRUEsS0FBQTthQUFBLEtBQUEsQ0FDQSxZQUFBLEVBQUEsWUFBQSxFQUFBLFFBQUE7OEJBREEsS0FBQTthQUVBLFlBQUEsR0FBQSxZQUFBO2FBQ0EsWUFBQSxHQUFBLFlBQUE7YUFDQSxRQUFBLEdBQUEsUUFBQTs7aUJBSkEsS0FBQTs7QUFPQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBOzRCQUNBLFlBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZUFBQTs0QkFBQSxlQUFBOzRCQUNBLFlBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsV0FBQTs0QkFBQSxXQUFBOzRCQUNBLFFBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsS0FBQTs0QkFBQSxLQUFBLENBQUEsU0FBQTtvQkFDQSxHQUFBO29CQUVBLFdBQUEsUUFBQSxRQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFQUFBLElBQ0EsZUFBQSxRQUFBLFlBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxHQUFBLElBQUE7b0JBRUEsV0FBQSxLQUFBLElBQUEsSUFBQSxlQUFBLEtBQUEsSUFBQTtBQUNBLHVCQUFBLElBQUEsT0FBQSxFQUNBLE1BQUEsTUFEQSxZQUFBLEdBQUEsSUFDQSxHQUFBLE1BQUEsQ0FBQSxlQUFBLEVBQUEsTUFHQSxDQUhBLFdBQUEsR0FBQSxPQUdBOzt1QkFHQSxHQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBO29CQUNBLFlBQUEsR0FBQSw2QkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBLEdBQ0EsWUFBQSxHQTVDQSxhQUFBLFNBNENBLGlCQUFBLENBQUEsSUFBQSxFQUFBLE1BQUEsR0FDQSxRQUFBLEdBOUNBLFNBQUEsU0E4Q0EsaUJBQUEsQ0FBQSxJQUFBLEVBQUEsTUFBQSxHQUNBLEtBQUEsT0FBQSxLQUFBLENBQUEsWUFBQSxFQUFBLFlBQUEsRUFBQSxRQUFBO3VCQUVBLEtBQUE7Ozs7V0ExQ0EsS0FBQTs7a0JBQUEsS0FBQTtTQThDQSw2QkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBO1FBQ0EsdUJBQUEsR0FuREEsUUFBQSwrQkFtREEsaUJBQUEsRUFBQSxJQUFBLEVBQUEsTUFBQSxHQUNBLFlBQUEsTUFBQSxNQUFBLENBQUEsdUJBQUE7V0FFQSxZQUFBIn0=