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
            value: function asCSS(className) {
                var css = "";
                var ruleSetsCSS = this.ruleSets.asCSS(className, _constants.TWO_SPACES), declarationsCSS = this.declarations.asCSS(className, _constants.FOUR_SPACES);
                if (ruleSetsCSS !== null || declarationsCSS !== null) {
                    css = "@media ".concat(this.queries, " {\n").concat(declarationsCSS).concat(ruleSetsCSS, "\n}\n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBUV09fU1BBQ0VTLCBGT1VSX1NQQUNFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0UXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lKSB7XG4gICAgbGV0IGNzcyA9IFwiXCI7XG5cbiAgICBjb25zdCBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBUV09fU1BBQ0VTKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhjbGFzc05hbWUsIEZPVVJfU1BBQ0VTKTtcblxuICAgIGlmICgocnVsZVNldHNDU1MgIT09IG51bGwpIHx8IChkZWNsYXJhdGlvbnNDU1MgIT09IG51bGwpKSB7XG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5xdWVyaWVzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfVxufVxuXG5gO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldHMgPSBSdWxlU2V0cy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHF1ZXJpZXMgPSBxdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBNZWRpYShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBxdWVyaWVzKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyaWVzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHF1ZXJpZXNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHF1ZXJpZXNRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgcXVlcmllcyA9IGAke3F1ZXJpZXNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBxdWVyaWVzO1xufVxuIl0sIm5hbWVzIjpbInF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYSIsImRlY2xhcmF0aW9ucyIsInJ1bGVTZXRzIiwicXVlcmllcyIsImdldERlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiZ2V0UXVlcmllcyIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiY3NzIiwicnVsZVNldHNDU1MiLCJUV09fU1BBQ0VTIiwiZGVjbGFyYXRpb25zQ1NTIiwiRk9VUl9TUEFDRVMiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJSdWxlU2V0cyIsInF1ZXJpZXNGcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwicXVlcmllc05vZGVDb250ZW50IiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFZCxJQUFBLFNBQVksa0NBQVosWUFBWSxFQUFBO0FBQ1IsSUFBQSxhQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFFRCxJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDUixJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU1BLFlBQVksR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxBQUFDLEVBQUMsR0FBRztBQUV0RCxJQUFBLEFBQU1DLEtBQUssaUJBOEN2QixBQTlDWTthQUFNQSxLQUFLLENBQ1pDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxPQUFPOztRQUN6QyxJQUFJLENBQUNGLFlBQVksR0FBR0EsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU8sQ0FBQzs7OztZQUd6QkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxHQUFHO2dCQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWSxDQUFDO2FBQzFCOzs7WUFFREksR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURJLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPLENBQUM7YUFDckI7OztZQUVESSxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2dCQUNmLElBQUlDLEdBQUcsR0FBRyxFQUFFLEFBQUM7Z0JBRWIsSUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQ1IsUUFBUSxDQUFDSyxLQUFLLENBQUNDLFNBQVMsRUFBRUcsVUFBVSxXQUFBLENBQUMsRUFDeERDLGVBQWUsR0FBRyxJQUFJLENBQUNYLFlBQVksQ0FBQ00sS0FBSyxDQUFDQyxTQUFTLEVBQUVLLFVBQVcsWUFBQSxDQUFDLEFBQUM7Z0JBRXhFLElBQUksQUFBQ0gsV0FBVyxLQUFLLElBQUksSUFBTUUsZUFBZSxLQUFLLElBQUksQUFBQyxFQUFFO29CQUN4REgsR0FBRyxHQUFHLEFBQUMsU0FBTyxDQUNsQkcsTUFBZSxDQURLLElBQUksQ0FBQ1QsT0FBTyxFQUFDLE1BQ25DLENBQWtCLENBQUVPLE1BQVcsQ0FBN0JFLGVBQWUsQ0FBZSxDQUFBLE1BR2hDLENBSG9CRixXQUFXLEVBQUMsU0FHaEMsQ0FBQyxDQUFDO2lCQUNHO2dCQUVELE9BQU9ELEdBQUcsQ0FBQzthQUNaOzs7O1lBRU1LLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTWYsWUFBWSxHQUFHZ0IsYUFBWSxRQUFBLENBQUNILGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUMzRGQsUUFBUSxHQUFHZ0IsU0FBUSxRQUFBLENBQUNKLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUNuRGIsT0FBTyxHQUFHZ0Isd0JBQXdCLENBQUNKLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQ2hESSxLQUFLLEdBQUcsSUFBSXBCLEtBQUssQ0FBQ0MsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQyxBQUFDO2dCQUV6RCxPQUFPaUIsS0FBSyxDQUFDO2FBQ2Q7Ozs7Q0FDRixFQUFBO0FBRUQsU0FBU0Qsd0JBQXdCLENBQUNKLElBQUksRUFBRUMsTUFBTSxFQUFFO0lBQzlDLElBQU1LLGtCQUFrQixHQUFHQyxDQUFBQSxHQUFBQSxRQUE2QixBQUE0QixDQUFBLDhCQUE1QixDQUFDekIsWUFBWSxFQUFFa0IsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDOUViLE9BQU8sR0FBRyxBQUFDLEVBQUEsQ0FBcUIsTUFBQSxDQUFuQmtCLGtCQUFrQixDQUFFLEFBQUM7SUFFeEMsT0FBT2xCLE9BQU8sQ0FBQztDQUNoQjtrQkFuRG9CSCxLQUFLIn0=