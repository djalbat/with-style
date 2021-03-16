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
var Style = function() {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1lZGlhcyBmcm9tIFwiLi9zdHlsZS9tZWRpYXNcIjtcbmltcG9ydCBSdWxlU2V0cyBmcm9tIFwiLi9zdHlsZS9ydWxlU2V0c1wiO1xuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9zdHlsZS9kZWNsYXJhdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3R5bGUge1xuICBjb25zdHJ1Y3RvcihkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpIHtcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgICB0aGlzLnJ1bGVTZXRzID0gcnVsZVNldHM7XG4gICAgdGhpcy5tZWRpYXMgPSBtZWRpYXM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0UnVsZVNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZVNldHM7XG4gIH1cblxuICBnZXRNZWRpYXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWVkaWFzO1xuICB9XG5cbiAgZXh0ZW5kcyhzdXBlclN0eWxlKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gc3VwZXJTdHlsZS5nZXREZWNsYXJhdGlvbnMoKSxcbiAgICAgICAgICBydWxlU2V0cyA9IHN1cGVyU3R5bGUuZ2V0UnVsZVNldHMoKSxcbiAgICAgICAgICBtZWRpYXMgPSBzdXBlclN0eWxlLmdldE1lZGlhcygpO1xuXG4gICAgdGhpcy51bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcyk7XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucywgcnVsZVNldHMsIG1lZGlhcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgICB0aGlzLnJ1bGVTZXRzLnVuc2hpZnQocnVsZVNldHMpO1xuICAgIHRoaXMubWVkaWFzLnVuc2hpZnQobWVkaWFzKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGNsYXNzTmFtZSwgXCIgIFwiKSxcbiAgICAgICAgICBydWxlU2V0c0NTUyA9IHRoaXMucnVsZVNldHMuYXNDU1MoY2xhc3NOYW1lLCBcIlwiKSxcbiAgICAgICAgICBtZWRpYXNDU1MgPSB0aGlzLm1lZGlhcy5hc0NTUyhjbGFzc05hbWUpLFxuICAgICAgICAgIGNzcyA9IGAke2RlY2xhcmF0aW9uc0NTU30ke3J1bGVTZXRzQ1NTfSR7bWVkaWFzQ1NTfWA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYXMgPSBNZWRpYXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBzdHlsZSA9IG5ldyBTdHlsZShkZWNsYXJhdGlvbnMsIHJ1bGVTZXRzLCBtZWRpYXMpO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxLQUFBO2FBQUEsS0FBQSxDQUNBLFlBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQTs4QkFEQSxLQUFBO2FBRUEsWUFBQSxHQUFBLFlBQUE7YUFDQSxRQUFBLEdBQUEsUUFBQTthQUNBLE1BQUEsR0FBQSxNQUFBOztpQkFKQSxLQUFBOztBQU9BLGVBQUEsR0FBQSxlQUFBOzRCQUFBLGVBQUE7NEJBQ0EsWUFBQTs7OztBQUdBLGVBQUEsR0FBQSxXQUFBOzRCQUFBLFdBQUE7NEJBQ0EsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxTQUFBOzRCQUFBLFNBQUE7NEJBQ0EsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLFFBQUEsQ0FBQSxVQUFBO29CQUNBLFlBQUEsR0FBQSxVQUFBLENBQUEsZUFBQSxJQUNBLFFBQUEsR0FBQSxVQUFBLENBQUEsV0FBQSxJQUNBLE1BQUEsR0FBQSxVQUFBLENBQUEsU0FBQTtxQkFFQSxPQUFBLENBQUEsWUFBQSxFQUFBLFFBQUEsRUFBQSxNQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE9BQUE7NEJBQUEsT0FBQSxDQUFBLFlBQUEsRUFBQSxRQUFBLEVBQUEsTUFBQTtxQkFDQSxZQUFBLENBQUEsT0FBQSxDQUFBLFlBQUE7cUJBQ0EsUUFBQSxDQUFBLE9BQUEsQ0FBQSxRQUFBO3FCQUNBLE1BQUEsQ0FBQSxPQUFBLENBQUEsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxLQUFBOzRCQUFBLEtBQUEsQ0FBQSxTQUFBO29CQUNBLGVBQUEsUUFBQSxZQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FBQSxFQUFBLElBQ0EsV0FBQSxRQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxPQUNBLFNBQUEsUUFBQSxNQUFBLENBQUEsS0FBQSxDQUFBLFNBQUEsR0FDQSxHQUFBLE1BQUEsTUFBQSxDQUFBLGVBQUEsRUFBQSxNQUFBLENBQUEsV0FBQSxFQUFBLE1BQUEsQ0FBQSxTQUFBO3VCQUVBLEdBQUE7Ozs7O0FBR0EsZUFBQSxHQUFBLGlCQUFBOzRCQUFBLGlCQUFBLENBQUEsSUFBQSxFQUFBLE1BQUE7b0JBQ0EsWUFBQSxHQTdDQSxhQUFBLFNBNkNBLGlCQUFBLENBQUEsSUFBQSxFQUFBLE1BQUEsR0FDQSxRQUFBLEdBL0NBLFNBQUEsU0ErQ0EsaUJBQUEsQ0FBQSxJQUFBLEVBQUEsTUFBQSxHQUNBLE1BQUEsR0FqREEsT0FBQSxTQWlEQSxpQkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBLEdBQ0EsS0FBQSxPQUFBLEtBQUEsQ0FBQSxZQUFBLEVBQUEsUUFBQSxFQUFBLE1BQUE7dUJBRUEsS0FBQTs7OztXQWhEQSxLQUFBOztrQkFBQSxLQUFBIn0=