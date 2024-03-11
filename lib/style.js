"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _medias = _interopRequireDefault(require("./style/medias"));
var _ruleSets = _interopRequireDefault(require("./style/ruleSets"));
var _declarations = _interopRequireDefault(require("./style/declarations"));
var _constants = require("./constants");
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
var Style = /*#__PURE__*/ function() {
    function Style(declarations, ruleSets, medias) {
        _classCallCheck(this, Style);
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.medias = medias;
    }
    _createClass(Style, [
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
            key: "getMedias",
            value: function getMedias() {
                return this.medias;
            }
        },
        {
            key: "extends",
            value: function _extends(superStyle) {
                var declarations = superStyle.getDeclarations(), ruleSets = superStyle.getRuleSets(), medias = superStyle.getMedias();
                this.unshift(declarations, ruleSets, medias);
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations, ruleSets, medias) {
                this.declarations.unshift(declarations);
                this.ruleSets.unshift(ruleSets);
                this.medias.unshift(medias);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className) {
                var indent = _constants.EMPTY_STRING, declarationsCSS = this.declarations.asCSS(className, indent), ruleSetsCSS = this.ruleSets.asCSS(className, indent), mediasCSS = this.medias.asCSS(className, indent), css = "".concat(declarationsCSS).concat(ruleSetsCSS).concat(mediasCSS);
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), medias = _medias.default.fromNodeAndTokens(node, tokens), style = new Style(declarations, ruleSets, medias);
                return style;
            }
        }
    ]);
    return Style;
}();
exports.default = Style;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0eWxlIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgbWVkaWFzKSB7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gICAgdGhpcy5ydWxlU2V0cyA9IHJ1bGVTZXRzO1xuICAgIHRoaXMubWVkaWFzID0gbWVkaWFzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0TWVkaWFzKCkge1xuICAgIHJldHVybiB0aGlzLm1lZGlhcztcbiAgfVxuXG4gIGV4dGVuZHMoc3VwZXJTdHlsZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHN1cGVyU3R5bGUuZ2V0RGVjbGFyYXRpb25zKCksXG4gICAgICAgICAgcnVsZVNldHMgPSBzdXBlclN0eWxlLmdldFJ1bGVTZXRzKCksXG4gICAgICAgICAgbWVkaWFzID0gc3VwZXJTdHlsZS5nZXRNZWRpYXMoKTtcblxuICAgIHRoaXMudW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuICB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gICAgdGhpcy5ydWxlU2V0cy51bnNoaWZ0KHJ1bGVTZXRzKTtcbiAgICB0aGlzLm1lZGlhcy51bnNoaWZ0KG1lZGlhcyk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgbWVkaWFzQ1NTID0gdGhpcy5tZWRpYXMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfSR7bWVkaWFzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlN0eWxlIiwiZGVjbGFyYXRpb25zIiwicnVsZVNldHMiLCJtZWRpYXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldE1lZGlhcyIsImV4dGVuZHMiLCJzdXBlclN0eWxlIiwidW5zaGlmdCIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwicnVsZVNldHNDU1MiLCJtZWRpYXNDU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJSdWxlU2V0cyIsIk1lZGlhcyIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRU0sSUFBQSxPQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDZCxJQUFBLFNBQWtCLGtDQUFsQixrQkFBa0IsRUFBQTtBQUNkLElBQUEsYUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBRWxCLElBQUEsVUFBYSxXQUFiLGFBQWEsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFBLEFBQU1BLEtBQUssaUJBQVg7YUFBTUEsS0FBSyxDQUNaQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsTUFBTTs7UUFDeEMsSUFBSSxDQUFDRixZQUFZLEdBQUdBLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUNDLFFBQVEsR0FBR0EsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNLENBQUM7Ozs7WUFHdkJDLEdBQWUsRUFBZkEsaUJBQWU7bUJBQWZBLFNBQUFBLGVBQWUsR0FBRztnQkFDaEIsT0FBTyxJQUFJLENBQUNILFlBQVksQ0FBQzthQUMxQjs7O1lBRURJLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRLENBQUM7YUFDdEI7OztZQUVESSxHQUFTLEVBQVRBLFdBQVM7bUJBQVRBLFNBQUFBLFNBQVMsR0FBRztnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTSxDQUFDO2FBQ3BCOzs7WUFFREksR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxRQUFPLENBQUNDLFVBQVUsRUFBRTtnQkFDbEIsSUFBTVAsWUFBWSxHQUFHTyxVQUFVLENBQUNKLGVBQWUsRUFBRSxFQUMzQ0YsUUFBUSxHQUFHTSxVQUFVLENBQUNILFdBQVcsRUFBRSxFQUNuQ0YsTUFBTSxHQUFHSyxVQUFVLENBQUNGLFNBQVMsRUFBRSxBQUFDO2dCQUV0QyxJQUFJLENBQUNHLE9BQU8sQ0FBQ1IsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDOzs7WUFFRE0sR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNSLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQ0YsWUFBWSxDQUFDUSxPQUFPLENBQUNSLFlBQVksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUNDLFFBQVEsQ0FBQ08sT0FBTyxDQUFDUCxRQUFRLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDQyxNQUFNLENBQUNNLE9BQU8sQ0FBQ04sTUFBTSxDQUFDLENBQUM7YUFDN0I7OztZQUVETyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsU0FBUyxFQUFFO2dCQUNmLElBQU1DLE1BQU0sR0FBR0MsVUFBWSxhQUFBLEVBQ3JCQyxlQUFlLEdBQUcsSUFBSSxDQUFDYixZQUFZLENBQUNTLEtBQUssQ0FBQ0MsU0FBUyxFQUFFQyxNQUFNLENBQUMsRUFDNURHLFdBQVcsR0FBRyxJQUFJLENBQUNiLFFBQVEsQ0FBQ1EsS0FBSyxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sQ0FBQyxFQUNwREksU0FBUyxHQUFHLElBQUksQ0FBQ2IsTUFBTSxDQUFDTyxLQUFLLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDLEVBQ2hESyxHQUFHLEdBQUcsQUFBQyxFQUFBLENBQW9CRixNQUFXLENBQTdCRCxlQUFlLENBQWUsQ0FBRUUsTUFBUyxDQUF2QkQsV0FBVyxDQUFhLENBQUEsTUFBQSxDQUFWQyxTQUFTLENBQUUsQUFBQztnQkFFM0QsT0FBT0MsR0FBRyxDQUFDO2FBQ1o7Ozs7WUFFTUMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBeEIsU0FBT0EsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFNbkIsWUFBWSxHQUFHb0IsYUFBWSxRQUFBLENBQUNILGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUMzRGxCLFFBQVEsR0FBR29CLFNBQVEsUUFBQSxDQUFDSixpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLENBQUMsRUFDbkRqQixNQUFNLEdBQUdvQixPQUFNLFFBQUEsQ0FBQ0wsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQy9DSSxLQUFLLEdBQUcsSUFBSXhCLEtBQUssQ0FBQ0MsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sQ0FBQyxBQUFDO2dCQUV4RCxPQUFPcUIsS0FBSyxDQUFDO2FBQ2Q7Ozs7Q0FDRixFQUFBO2tCQW5Eb0J4QixLQUFLIn0=