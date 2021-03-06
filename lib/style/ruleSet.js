"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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
var selectorsQuery = _occamDom.Query.fromExpression("//selectors");
var RuleSet = function() {
    function RuleSet(selectors, declarations) {
        _classCallCheck(this, RuleSet);
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _createClass(RuleSet, [
        {
            key: "getSelectors",
            value: function getSelectors() {
                return this.selectors;
            }
        },
        {
            key: "getDeclarations",
            value: function getDeclarations() {
                return this.declarations;
            }
        },
        {
            key: "unshift",
            value: function unshift(ruleSet) {
                var declarations = ruleSet.getDeclarations();
                this.declarations.unshift(declarations);
            }
        },
        {
            key: "findMatchingRuleSet",
            value: function findMatchingRuleSet(ruleSets) {
                var matchingRuleSet = ruleSets.find((function(ruleSet) {
                    var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === this.selectors, ruleSetsMatch = selectorsMatch; ///
                    if (ruleSetsMatch) {
                        return true;
                    }
                }).bind(this)) || null; ///
                return matchingRuleSet;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                var css = "";
                var declarationsCSS = this.declarations.asCSS("  ".concat(indent));
                if (declarationsCSS !== "") {
                    css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS, "\n").concat(indent, "}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), media = new RuleSet(selectors, declarations);
                return media;
            }
        }
    ]);
    return RuleSet;
}();
exports.default = RuleSet;
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNodeContent = _content.contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gcnVsZVNldC5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIGZpbmRNYXRjaGluZ1J1bGVTZXQocnVsZVNldHMpIHtcbiAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0cy5maW5kKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvcnMgPSBydWxlU2V0LmdldFNlbGVjdG9ycygpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTWF0Y2ggPSAoc2VsZWN0b3JzID09PSB0aGlzLnNlbGVjdG9ycyksXG4gICAgICAgICAgICBydWxlU2V0c01hdGNoID0gc2VsZWN0b3JzTWF0Y2g7IC8vL1xuXG4gICAgICBpZiAocnVsZVNldHNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXRjaGluZ1J1bGVTZXQ7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGxldCBjc3MgPSBcIlwiO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoYCAgJHtpbmRlbnR9YCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zQ1NTICE9PSBcIlwiKSB7XG4gICAgICAgY3NzID0gYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ke3RoaXMuc2VsZWN0b3JzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbiR7aW5kZW50fX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoc2VsZWN0b3JzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFNBQUE7SUFFQSxhQUFBO0lBRUEsUUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLGNBQUEsR0FOQSxTQUFBLE9BTUEsY0FBQSxFQUFBLFdBQUE7SUFFQSxPQUFBO2FBQUEsT0FBQSxDQUNBLFNBQUEsRUFBQSxZQUFBOzhCQURBLE9BQUE7YUFFQSxTQUFBLEdBQUEsU0FBQTthQUNBLFlBQUEsR0FBQSxZQUFBOztpQkFIQSxPQUFBOztBQU1BLGVBQUEsR0FBQSxZQUFBOzRCQUFBLFlBQUE7NEJBQ0EsU0FBQTs7OztBQUdBLGVBQUEsR0FBQSxlQUFBOzRCQUFBLGVBQUE7NEJBQ0EsWUFBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxPQUFBO29CQUNBLFlBQUEsR0FBQSxPQUFBLENBQUEsZUFBQTtxQkFFQSxZQUFBLENBQUEsT0FBQSxDQUFBLFlBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsbUJBQUE7NEJBQUEsbUJBQUEsQ0FBQSxRQUFBO29CQUNBLGVBQUEsR0FBQSxRQUFBLENBQUEsSUFBQSxXQUFBLE9BQUE7d0JBQ0EsU0FBQSxHQUFBLE9BQUEsQ0FBQSxZQUFBLElBQ0EsY0FBQSxHQUFBLFNBQUEsVUFBQSxTQUFBLEVBQ0EsYUFBQSxHQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt3QkFFQSxhQUFBOytCQUNBLElBQUE7O2tDQUVBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxlQUFBOzs7O0FBR0EsZUFBQSxHQUFBLEtBQUE7NEJBQUEsS0FBQSxDQUFBLFNBQUEsRUFBQSxNQUFBO29CQUNBLEdBQUE7b0JBRUEsZUFBQSxRQUFBLFlBQUEsQ0FBQSxLQUFBLEVBQUEsRUFBQSxFQUFBLE1BQUEsQ0FBQSxNQUFBO29CQUVBLGVBQUE7QUFDQSx1QkFBQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxTQUFBLEVBQ0EsTUFBQSxNQURBLFNBQUEsR0FBQSxJQUNBLEdBQ0EsTUFBQSxDQURBLGVBQUEsR0FBQSxFQUNBLEdBQUEsTUFFQSxDQUZBLE1BQUEsR0FBQSxLQUVBOzt1QkFHQSxHQUFBOzs7OztBQUdBLGVBQUEsR0FBQSxpQkFBQTs0QkFBQSxpQkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBO29CQUNBLFNBQUEsR0FBQSwwQkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBLEdBQ0EsWUFBQSxHQTFEQSxhQUFBLFNBMERBLGlCQUFBLENBQUEsSUFBQSxFQUFBLE1BQUEsR0FDQSxLQUFBLE9BQUEsT0FBQSxDQUFBLFNBQUEsRUFBQSxZQUFBO3VCQUVBLEtBQUE7Ozs7V0F2REEsT0FBQTs7a0JBQUEsT0FBQTtTQTJEQSwwQkFBQSxDQUFBLElBQUEsRUFBQSxNQUFBO1FBQ0Esb0JBQUEsR0FoRUEsUUFBQSwrQkFnRUEsY0FBQSxFQUFBLElBQUEsRUFBQSxNQUFBLEdBQ0EsU0FBQSxNQUFBLE1BQUEsQ0FBQSxvQkFBQTtXQUVBLFNBQUEifQ==