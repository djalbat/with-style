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
var Media = /*#__PURE__*/ function() {
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
    var mediaQueriesNodeContent = (0, _content).contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
    return mediaQueries;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgbWVkaWFRdWVyaWVzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9tZWRpYS9tZWRpYVF1ZXJpZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IobWVkaWFRdWVyaWVzLCBkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzKSB7XG4gICAgdGhpcy5tZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFRdWVyaWVzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhUXVlcmllcztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRSdWxlU2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlU2V0cztcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgcnVsZVNldHNDU1MgPSB0aGlzLnJ1bGVTZXRzLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhjbGFzc05hbWUsIFwiICAgIFwiKTtcblxuICAgIGlmICgocnVsZVNldHNDU1MgIT09IG51bGwpIHx8IChkZWNsYXJhdGlvbnNDU1MgIT09IG51bGwpKSB7XG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9XG59XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKG1lZGlhUXVlcmllc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVaLEdBQVksQ0FBWixTQUFZO0FBQ1IsR0FBZ0IsQ0FBaEIsYUFBZ0I7QUFFSyxHQUFzQixDQUF0QixRQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxHQUFLLENBQUMsaUJBQWlCLEdBUEQsU0FBVyxPQU9ELGNBQWMsRUFBQyxtQkFBcUI7SUFFL0MsS0FBSzthQUFMLEtBQUssQ0FDWixZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVE7OEJBRDdCLEtBQUs7YUFFakIsWUFBWSxHQUFHLFlBQVk7YUFDM0IsWUFBWSxHQUFHLFlBQVk7YUFDM0IsUUFBUSxHQUFHLFFBQVE7O2lCQUpQLEtBQUs7O1lBT3hCLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsR0FBRyxDQUFDOzRCQUNMLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBZSxHQUFmLGVBQWU7NEJBQWYsZUFBZSxHQUFHLENBQUM7NEJBQ0wsWUFBWTtZQUMxQixDQUFDOzs7WUFFRCxHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzs0QkFDRCxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBRyxDQUFDLEdBQUc7Z0JBRVAsR0FBSyxDQUFDLFdBQVcsUUFBUSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSxFQUFJLElBQ2pELGVBQWUsUUFBUSxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSxJQUFNO2dCQUVqRSxFQUFFLEVBQUcsV0FBVyxLQUFLLElBQUksSUFBTSxlQUFlLEtBQUssSUFBSSxFQUFHLENBQUM7b0JBQ3pELEdBQUcsSUFBSSxPQUFPLEVBQ2xCLE1BQWUsTUFEVSxZQUFZLEdBQUMsSUFDeEMsR0FBb0IsTUFBVyxDQUE3QixlQUFlLEVBQWUsTUFHaEMsQ0FIb0IsV0FBVyxHQUFDLE9BR2hDO2dCQUNJLENBQUM7dUJBRU0sR0FBRztZQUNaLENBQUM7Ozs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLFlBQVksR0FBRyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUN6RCxZQUFZLEdBNUNHLGFBQWdCLFNBNENILGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQzFELFFBQVEsR0E5Q0csU0FBWSxTQThDSCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUNsRCxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVE7dUJBRXJELEtBQUs7WUFDZCxDQUFDOzs7V0EzQ2tCLEtBQUs7O2tCQUFMLEtBQUs7U0E4Q2pCLDZCQUE2QixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNwRCxHQUFLLENBQUMsdUJBQXVCLE9BbkRlLFFBQXNCLGdDQW1ESixpQkFBaUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUN2RixZQUFZLE1BQThCLE1BQUEsQ0FBeEIsdUJBQXVCO1dBRXhDLFlBQVk7QUFDckIsQ0FBQyJ9