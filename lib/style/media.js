"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
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
var mediaQueriesQuery = _occamQuery.Query.fromExpression("/media/mediaQueries");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBUV09fU1BBQ0VTLCBGT1VSX1NQQUNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvbWVkaWEvbWVkaWFRdWVyaWVzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cykge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgfVxuXG4gIGdldE1lZGlhUXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVF1ZXJpZXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIFRXT19TUEFDRVMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgRk9VUl9TUEFDRVMpO1xuXG4gICAgaWYgKChydWxlU2V0c0NTUyAhPT0gbnVsbCkgfHwgKGRlY2xhcmF0aW9uc0NTUyAhPT0gbnVsbCkpIHtcbiAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtydWxlU2V0c0NTU31cbn1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IE1lZGlhKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMobWVkaWFRdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdLCJuYW1lcyI6WyJtZWRpYVF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYSIsIm1lZGlhUXVlcmllcyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwiZ2V0TWVkaWFRdWVyaWVzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0UnVsZVNldHMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJ1bGVTZXRzQ1NTIiwiVFdPX1NQQUNFUyIsImRlY2xhcmF0aW9uc0NTUyIsIkZPVVJfU1BBQ0VTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJSdWxlU2V0cyIsIm1lZGlhIiwibWVkaWFRdWVyaWVzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVkLElBQUEsU0FBWSxrQ0FBWixZQUFZLEVBQUE7QUFDUixJQUFBLGFBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUVELElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNSLElBQUEsUUFBc0IsV0FBdEIsc0JBQXNCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsaUJBQWlCLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQUFBQztBQUV2RCxJQUFBLEFBQU1DLEtBQUssaUJBOEN2QixBQTlDWTthQUFNQSxLQUFLLENBQ1pDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxRQUFROztRQUM5QyxJQUFJLENBQUNGLFlBQVksR0FBR0EsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQzs7OztZQUczQkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDO2FBQzFCOzs7WUFFREksR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDO2FBQzFCOzs7WUFFREksR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURJLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxTQUFTLEVBQUU7Z0JBQ2YsSUFBSUMsR0FBRyxHQUFHLEVBQUUsQUFBQztnQkFFYixJQUFNQyxXQUFXLEdBQUcsSUFBSSxDQUFDUCxRQUFRLENBQUNJLEtBQUssQ0FBQ0MsU0FBUyxFQUFFRyxVQUFVLFdBQUEsQ0FBQyxFQUN4REMsZUFBZSxHQUFHLElBQUksQ0FBQ1YsWUFBWSxDQUFDSyxLQUFLLENBQUNDLFNBQVMsRUFBRUssVUFBVyxZQUFBLENBQUMsQUFBQztnQkFFeEUsSUFBSSxBQUFDSCxXQUFXLEtBQUssSUFBSSxJQUFNRSxlQUFlLEtBQUssSUFBSSxBQUFDLEVBQUU7b0JBQ3hESCxHQUFHLEdBQUcsQUFBQyxTQUFPLENBQ2xCRyxNQUFlLENBREssSUFBSSxDQUFDWCxZQUFZLEVBQUMsTUFDeEMsQ0FBa0IsQ0FBRVMsTUFBVyxDQUE3QkUsZUFBZSxDQUFlLENBQUEsTUFHaEMsQ0FIb0JGLFdBQVcsRUFBQyxTQUdoQyxDQUFDLENBQUM7aUJBQ0c7Z0JBRUQsT0FBT0QsR0FBRyxDQUFDO2FBQ1o7Ozs7WUFFTUssR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBeEIsU0FBT0EsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFNZixZQUFZLEdBQUdnQiw2QkFBNkIsQ0FBQ0YsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDMURkLFlBQVksR0FBR2dCLGFBQVksUUFBQSxDQUFDSixpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDM0RiLFFBQVEsR0FBR2dCLFNBQVEsUUFBQSxDQUFDTCxpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDbkRJLEtBQUssR0FBRyxJQUFJcEIsS0FBSyxDQUFDQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsUUFBUSxDQUFDLEFBQUM7Z0JBRTlELE9BQU9pQixLQUFLLENBQUM7YUFDZDs7OztDQUNGLEVBQUE7QUFFRCxTQUFTSCw2QkFBNkIsQ0FBQ0YsSUFBSSxFQUFFQyxNQUFNLEVBQUU7SUFDbkQsSUFBTUssdUJBQXVCLEdBQUdDLENBQUFBLEdBQUFBLFFBQTZCLEFBQWlDLENBQUEsOEJBQWpDLENBQUN6QixpQkFBaUIsRUFBRWtCLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQ3hGZixZQUFZLEdBQUcsQUFBQyxFQUFBLENBQTBCLE1BQUEsQ0FBeEJvQix1QkFBdUIsQ0FBRSxBQUFDO0lBRWxELE9BQU9wQixZQUFZLENBQUM7Q0FDckI7a0JBbkRvQkQsS0FBSyJ9