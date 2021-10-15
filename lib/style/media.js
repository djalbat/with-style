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
exports.default = Media;
function mediaQueriesFromNodeAndTokens(node, tokens) {
    var mediaQueriesNodeContent = (0, _content).contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens), mediaQueries = "".concat(mediaQueriesNodeContent);
    return mediaQueries;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsIlJ1bGVTZXRzIiwiRGVjbGFyYXRpb25zIiwiVFdPX1NQQUNFUyIsIkZPVVJfU1BBQ0VTIiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiLCJtZWRpYVF1ZXJpZXNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiTWVkaWEiLCJjb25zdHJ1Y3RvciIsIm1lZGlhUXVlcmllcyIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwiZ2V0TWVkaWFRdWVyaWVzIiwiZ2V0RGVjbGFyYXRpb25zIiwiZ2V0UnVsZVNldHMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImNzcyIsInJ1bGVTZXRzQ1NTIiwiZGVjbGFyYXRpb25zQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMiLCJtZWRpYSIsIm1lZGlhUXVlcmllc05vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRVosR0FBWSxDQUFaLFNBQVk7QUFDUixHQUFnQixDQUFoQixhQUFnQjtBQUVELEdBQWMsQ0FBZCxVQUFjO0FBQ1IsR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsR0FBSyxDQUFDLGlCQUFpQixHQVJELFNBQVcsT0FRRCxjQUFjLENBQUMsQ0FBcUI7SUFFL0MsS0FBSyxpQkFBWCxRQUFRO2FBQUYsS0FBSyxDQUNaLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUTs4QkFEN0IsS0FBSztRQUV0QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTs7aUJBSlAsS0FBSzs7WUFPeEIsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFLLEVBQUwsQ0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNoQixHQUFHLENBQUMsR0FBRyxHQUFHLENBQUU7Z0JBRVosR0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBM0JiLFVBQWMsY0E0QjVDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBNUJyQixVQUFjO2dCQThCbEQsRUFBRSxFQUFHLFdBQVcsS0FBSyxJQUFJLElBQU0sZUFBZSxLQUFLLElBQUksRUFBRyxDQUFDO29CQUN6RCxHQUFHLEdBQUksQ0FBTyxTQUNsQixNQUFlLENBREssSUFBSSxDQUFDLFlBQVksRUFBQyxDQUN4QyxPQUFvQixNQUFXLENBQTdCLGVBQWUsRUFBZSxNQUdoQyxDQUhvQixXQUFXLEVBQUMsQ0FHaEM7Z0JBQ0ksQ0FBQztnQkFFRCxNQUFNLENBQUMsR0FBRztZQUNaLENBQUM7Ozs7WUFFTSxHQUFpQixFQUFqQixDQUFpQjttQkFBeEIsUUFBUSxDQUFELGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLFlBQVksR0FBRyw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUN6RCxZQUFZLEdBN0NHLGFBQWdCLFNBNkNILGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQzFELFFBQVEsR0EvQ0csU0FBWSxTQStDSCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUNsRCxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVE7Z0JBRTVELE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQzs7O1dBM0NrQixLQUFLOztrQkFBTCxLQUFLO1NBOENqQiw2QkFBNkIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDcEQsR0FBSyxDQUFDLHVCQUF1QixPQW5EZSxRQUFzQixnQ0FtREosaUJBQWlCLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FDdkYsWUFBWSxHQUFJLENBQUEsRUFBMEIsTUFBQSxDQUF4Qix1QkFBdUI7SUFFL0MsTUFBTSxDQUFDLFlBQVk7QUFDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBUV09fU1BBQ0VTLCBGT1VSX1NQQUNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IG1lZGlhUXVlcmllc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvbWVkaWEvbWVkaWFRdWVyaWVzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG4gIGNvbnN0cnVjdG9yKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cykge1xuICAgIHRoaXMubWVkaWFRdWVyaWVzID0gbWVkaWFRdWVyaWVzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgfVxuXG4gIGdldE1lZGlhUXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5tZWRpYVF1ZXJpZXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBsZXQgY3NzID0gXCJcIjtcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIFRXT19TUEFDRVMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgRk9VUl9TUEFDRVMpO1xuXG4gICAgaWYgKChydWxlU2V0c0NTUyAhPT0gbnVsbCkgfHwgKGRlY2xhcmF0aW9uc0NTUyAhPT0gbnVsbCkpIHtcbiAgICAgIGNzcyA9IGBAbWVkaWEgJHt0aGlzLm1lZGlhUXVlcmllc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtydWxlU2V0c0NTU31cbn1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhUXVlcmllcyA9IG1lZGlhUXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IE1lZGlhKG1lZGlhUXVlcmllcywgZGVjbGFyYXRpb25zLCBydWxlU2V0cyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVkaWFRdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG1lZGlhUXVlcmllc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMobWVkaWFRdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIG1lZGlhUXVlcmllcyA9IGAke21lZGlhUXVlcmllc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIG1lZGlhUXVlcmllcztcbn1cbiJdfQ==