"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _medias = _interopRequireDefault(require("./style/medias"));
var _ruleSets = _interopRequireDefault(require("./style/ruleSets"));
var _declarations = _interopRequireDefault(require("./style/declarations"));
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
                var declarationsCSS = this.declarations.asCSS(className, "  "), ruleSetsCSS = this.ruleSets.asCSS(className, ""), mediasCSS = this.medias.asCSS(className), css = "".concat(declarationsCSS).concat(ruleSetsCSS).concat(mediasCSS);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBydWxlU2V0cyA9IHN1cGVyU3R5bGUuZ2V0UnVsZVNldHMoKSxcbiAgICAgICAgICBtZWRpYXMgPSBzdXBlclN0eWxlLmdldE1lZGlhcygpO1xuXG4gICAgdGhpcy51bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgICB0aGlzLnJ1bGVTZXRzLnVuc2hpZnQocnVsZVNldHMpO1xuICAgIHRoaXMubWVkaWFzLnVuc2hpZnQobWVkaWFzKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBcIlwiKSxcbiAgICAgICAgICBtZWRpYXNDU1MgPSB0aGlzLm1lZGlhcy5hc0NTUyhjbGFzc05hbWUpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfSR7bWVkaWFzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3R5bGUiLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsIm1lZGlhcyIsImdldERlY2xhcmF0aW9ucyIsImdldFJ1bGVTZXRzIiwiZ2V0TWVkaWFzIiwiZXh0ZW5kcyIsInN1cGVyU3R5bGUiLCJ1bnNoaWZ0IiwiYXNDU1MiLCJjbGFzc05hbWUiLCJkZWNsYXJhdGlvbnNDU1MiLCJydWxlU2V0c0NTUyIsIm1lZGlhc0NTUyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIlJ1bGVTZXRzIiwiTWVkaWFzIiwic3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFTSxJQUFBLE9BQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNkLElBQUEsU0FBa0Isa0NBQWxCLGtCQUFrQixFQUFBO0FBQ2QsSUFBQSxhQUFzQixrQ0FBdEIsc0JBQXNCLEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxLQUFLLGlCQUFYO2FBQU1BLEtBQUssQ0FDWkMsWUFBWSxFQUFFQyxRQUFRLEVBQUVDLE1BQU07O1FBQ3hDLElBQUksQ0FBQ0YsWUFBWSxHQUFHQSxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTSxDQUFDOzs7O1lBR3ZCQyxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUc7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDSCxZQUFZLENBQUM7YUFDMUI7OztZQUVESSxHQUFXLEVBQVhBLGFBQVc7bUJBQVhBLFNBQUFBLFdBQVcsR0FBRztnQkFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUSxDQUFDO2FBQ3RCOzs7WUFFREksR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLEdBQUc7Z0JBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU0sQ0FBQzthQUNwQjs7O1lBRURJLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsUUFBTyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ2xCLElBQU1QLFlBQVksR0FBR08sVUFBVSxDQUFDSixlQUFlLEVBQUUsRUFDM0NGLFFBQVEsR0FBR00sVUFBVSxDQUFDSCxXQUFXLEVBQUUsRUFDbkNGLE1BQU0sR0FBR0ssVUFBVSxDQUFDRixTQUFTLEVBQUUsQUFBQztnQkFFdEMsSUFBSSxDQUFDRyxPQUFPLENBQUNSLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUMsQ0FBQzthQUM5Qzs7O1lBRURNLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDUixZQUFZLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFO2dCQUN0QyxJQUFJLENBQUNGLFlBQVksQ0FBQ1EsT0FBTyxDQUFDUixZQUFZLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDQyxRQUFRLENBQUNPLE9BQU8sQ0FBQ1AsUUFBUSxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQ0MsTUFBTSxDQUFDTSxPQUFPLENBQUNOLE1BQU0sQ0FBQyxDQUFDO2FBQzdCOzs7WUFFRE8sR0FBSyxFQUFMQSxPQUFLO21CQUFMQSxTQUFBQSxLQUFLLENBQUNDLFNBQVMsRUFBRTtnQkFDZixJQUFNQyxlQUFlLEdBQUcsSUFBSSxDQUFDWCxZQUFZLENBQUNTLEtBQUssQ0FBQ0MsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUMxREUsV0FBVyxHQUFHLElBQUksQ0FBQ1gsUUFBUSxDQUFDUSxLQUFLLENBQUNDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFDaERHLFNBQVMsR0FBRyxJQUFJLENBQUNYLE1BQU0sQ0FBQ08sS0FBSyxDQUFDQyxTQUFTLENBQUMsRUFDeENJLEdBQUcsR0FBRyxBQUFDLEVBQUEsQ0FBb0JGLE1BQVcsQ0FBN0JELGVBQWUsQ0FBZSxDQUFFRSxNQUFTLENBQXZCRCxXQUFXLENBQWEsQ0FBQSxNQUFBLENBQVZDLFNBQVMsQ0FBRSxBQUFDO2dCQUUzRCxPQUFPQyxHQUFHLENBQUM7YUFDWjs7OztZQUVNQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUF4QixTQUFPQSxpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQU1qQixZQUFZLEdBQUdrQixhQUFZLFFBQUEsQ0FBQ0gsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQzNEaEIsUUFBUSxHQUFHa0IsU0FBUSxRQUFBLENBQUNKLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUNuRGYsTUFBTSxHQUFHa0IsT0FBTSxRQUFBLENBQUNMLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUMvQ0ksS0FBSyxHQUFHLElBQUl0QixLQUFLLENBQUNDLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxNQUFNLENBQUMsQUFBQztnQkFFeEQsT0FBT21CLEtBQUssQ0FBQzthQUNkOzs7O0NBQ0YsRUFBQTtrQkFsRG9CdEIsS0FBSyJ9