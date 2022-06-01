"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _ruleSets = _interopRequireDefault(require("./ruleSets"));
var _declarations = _interopRequireDefault(require("./declarations"));
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
                var ruleSetsCSS = this.ruleSets.asCSS(className, _constants.TWO_SPACES), declarationsCSS = this.declarations.asCSS(className, _constants.FOUR_SPACES);
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
function mediaQueriesFromNodeAndTokens(node, tokens) {
    var mediaQueriesNodeContent = (0, _content).contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
    return mediaQueries;
}
exports.default = Media;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgVFdPX1NQQUNFUywgRk9VUl9TUEFDRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBtZWRpYVF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3RvcihtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpIHtcbiAgICB0aGlzLm1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllcztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYVF1ZXJpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFRdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgICBjb25zdCBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBUV09fU1BBQ0VTKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhjbGFzc05hbWUsIEZPVVJfU1BBQ0VTKTtcblxuICAgIGlmICgocnVsZVNldHNDU1MgIT09IG51bGwpIHx8IChkZWNsYXJhdGlvbnNDU1MgIT09IG51bGwpKSB7XG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5tZWRpYVF1ZXJpZXN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9XG59XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYVF1ZXJpZXMgPSBtZWRpYVF1ZXJpZXNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShtZWRpYVF1ZXJpZXMsIGRlY2xhcmF0aW9ucywgcnVsZVNldHMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBtZWRpYVF1ZXJpZXNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKG1lZGlhUXVlcmllc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBtZWRpYVF1ZXJpZXMgPSBgJHttZWRpYVF1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBtZWRpYVF1ZXJpZXM7XG59XG4iXSwibmFtZXMiOlsibWVkaWFRdWVyaWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJtZWRpYVF1ZXJpZXMiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsImdldE1lZGlhUXVlcmllcyIsImdldERlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJjc3MiLCJydWxlU2V0c0NTUyIsIlRXT19TUEFDRVMiLCJkZWNsYXJhdGlvbnNDU1MiLCJGT1VSX1NQQUNFUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIm1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwiRGVjbGFyYXRpb25zIiwiUnVsZVNldHMiLCJtZWRpYSIsIm1lZGlhUXVlcmllc05vZGVDb250ZW50IiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFNBQVcsV0FBWCxXQUFXLENBQUE7QUFFWixJQUFBLFNBQVksa0NBQVosWUFBWSxFQUFBO0FBQ1IsSUFBQSxhQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFFRCxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDUixJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU1BLGlCQUFpQixHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEFBQUM7QUFFdkQsSUFBQSxBQUFNQyxLQUFLLGlCQThDdkIsQUE5Q1k7YUFBTUEsS0FBSyxDQUNaQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsUUFBUTs7UUFDOUMsSUFBSSxDQUFDRixZQUFZLEdBQUdBLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRLENBQUM7Ozs7WUFHM0JDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQWZBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUNILFlBQVksQ0FBQzthQUMxQjs7O1lBRURJLEdBQWUsRUFBZkEsaUJBQWU7bUJBQWZBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUNILFlBQVksQ0FBQzthQUMxQjs7O1lBRURJLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRLENBQUM7YUFDdEI7OztZQUVESSxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2dCQUNmLElBQUlDLEdBQUcsR0FBRyxFQUFFLEFBQUM7Z0JBRWIsSUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQ1AsUUFBUSxDQUFDSSxLQUFLLENBQUNDLFNBQVMsRUFBRUcsVUFBVSxXQUFBLENBQUMsRUFDeERDLGVBQWUsR0FBRyxJQUFJLENBQUNWLFlBQVksQ0FBQ0ssS0FBSyxDQUFDQyxTQUFTLEVBQUVLLFVBQVcsWUFBQSxDQUFDLEFBQUM7Z0JBRXhFLElBQUksQUFBQ0gsV0FBVyxLQUFLLElBQUksSUFBTUUsZUFBZSxLQUFLLElBQUksQUFBQyxFQUFFO29CQUN4REgsR0FBRyxHQUFHLEFBQUMsU0FBTyxDQUNsQkcsTUFBZSxDQURLLElBQUksQ0FBQ1gsWUFBWSxFQUFDLE1BQ3hDLENBQWtCLENBQUVTLE1BQVcsQ0FBN0JFLGVBQWUsQ0FBZSxDQUFBLE1BR2hDLENBSG9CRixXQUFXLEVBQUMsU0FHaEMsQ0FBQyxDQUFDO2lCQUNHO2dCQUVELE9BQU9ELEdBQUcsQ0FBQzthQUNaOzs7O1lBRU1LLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTWYsWUFBWSxHQUFHZ0IsNkJBQTZCLENBQUNGLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQzFEZCxZQUFZLEdBQUdnQixhQUFZLFFBQUEsQ0FBQ0osaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQzNEYixRQUFRLEdBQUdnQixTQUFRLFFBQUEsQ0FBQ0wsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQ25ESSxLQUFLLEdBQUcsSUFBSXBCLEtBQUssQ0FBQ0MsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsQ0FBQyxBQUFDO2dCQUU5RCxPQUFPaUIsS0FBSyxDQUFDO2FBQ2Q7Ozs7Q0FDRixFQUFBO0FBRUQsU0FBU0gsNkJBQTZCLENBQUNGLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQ25ELElBQU1LLHVCQUF1QixHQUFHQyxDQUFBQSxHQUFBQSxRQUE2QixBQUFpQyxDQUFBLDhCQUFqQyxDQUFDekIsaUJBQWlCLEVBQUVrQixJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUN4RmYsWUFBWSxHQUFHLEFBQUMsRUFBQSxDQUEwQixNQUFBLENBQXhCb0IsdUJBQXVCLENBQUUsQUFBQztJQUVsRCxPQUFPcEIsWUFBWSxDQUFDO0NBQ3JCO2tCQW5Eb0JELEtBQUsifQ==