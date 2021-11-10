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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBydWxlU2V0cyA9IHN1cGVyU3R5bGUuZ2V0UnVsZVNldHMoKSxcbiAgICAgICAgICBtZWRpYXMgPSBzdXBlclN0eWxlLmdldE1lZGlhcygpO1xuXG4gICAgdGhpcy51bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgICB0aGlzLnJ1bGVTZXRzLnVuc2hpZnQocnVsZVNldHMpO1xuICAgIHRoaXMubWVkaWFzLnVuc2hpZnQobWVkaWFzKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBcIlwiKSxcbiAgICAgICAgICBtZWRpYXNDU1MgPSB0aGlzLm1lZGlhcy5hc0NTUyhjbGFzc05hbWUpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfSR7bWVkaWFzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFTyxHQUFnQixDQUFoQixPQUFnQjtBQUNkLEdBQWtCLENBQWxCLFNBQWtCO0FBQ2QsR0FBc0IsQ0FBdEIsYUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsS0FBSzthQUFMLEtBQUssQ0FDWixZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU07OEJBRHZCLEtBQUs7YUFFakIsWUFBWSxHQUFHLFlBQVk7YUFDM0IsUUFBUSxHQUFHLFFBQVE7YUFDbkIsTUFBTSxHQUFHLE1BQU07O2lCQUpILEtBQUs7O1lBT3hCLEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsR0FBRyxDQUFDOzRCQUNMLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBVyxHQUFYLFdBQVc7NEJBQVgsV0FBVyxHQUFHLENBQUM7NEJBQ0QsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFTLEdBQVQsU0FBUzs0QkFBVCxTQUFTLEdBQUcsQ0FBQzs0QkFDQyxNQUFNO1lBQ3BCLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLFFBQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkIsR0FBSyxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsZUFBZSxJQUN6QyxRQUFRLEdBQUcsVUFBVSxDQUFDLFdBQVcsSUFDakMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTO3FCQUU5QixPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNO1lBQzdDLENBQUM7OztZQUVELEdBQU8sR0FBUCxPQUFPOzRCQUFQLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDO3FCQUNsQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVk7cUJBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUTtxQkFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzVCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLGVBQWUsUUFBUSxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRSxFQUFJLElBQ3pELFdBQVcsUUFBUSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsT0FDM0MsU0FBUyxRQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUN2QyxHQUFHLE1BQXdCLE1BQVcsQ0FBN0IsZUFBZSxFQUFpQixNQUFTLENBQXZCLFdBQVcsRUFBYSxNQUFBLENBQVYsU0FBUzt1QkFFakQsR0FBRztZQUNaLENBQUM7Ozs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLFlBQVksR0E3Q0csYUFBc0IsU0E2Q1QsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FDMUQsUUFBUSxHQS9DRyxTQUFrQixTQStDVCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUNsRCxNQUFNLEdBakRHLE9BQWdCLFNBaURULGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQzlDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTTt1QkFFL0MsS0FBSztZQUNkLENBQUM7OztXQWpEa0IsS0FBSzs7a0JBQUwsS0FBSyJ9