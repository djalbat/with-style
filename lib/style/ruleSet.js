"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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
var selectorsQuery = _occamDom.Query.fromExpression("//selectors");
var RuleSet = /*#__PURE__*/ function() {
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
                var _this = this;
                var matchingRuleSet = ruleSets.find(function(ruleSet) {
                    var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === _this.selectors, ruleSetsMatch = selectorsMatch; ///
                    if (ruleSetsMatch) {
                        return true;
                    }
                }) || null; ///
                return matchingRuleSet;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                var css = _constants.EMPTY_STRING;
                var declarationsCSS = this.declarations.asCSS("  ".concat(indent));
                if (declarationsCSS !== _constants.EMPTY_STRING) {
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
    var selectorsNodeContent = (0, _content).contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gcnVsZVNldC5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIGZpbmRNYXRjaGluZ1J1bGVTZXQocnVsZVNldHMpIHtcbiAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0cy5maW5kKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvcnMgPSBydWxlU2V0LmdldFNlbGVjdG9ycygpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTWF0Y2ggPSAoc2VsZWN0b3JzID09PSB0aGlzLnNlbGVjdG9ycyksXG4gICAgICAgICAgICBydWxlU2V0c01hdGNoID0gc2VsZWN0b3JzTWF0Y2g7IC8vL1xuXG4gICAgICBpZiAocnVsZVNldHNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXRjaGluZ1J1bGVTZXQ7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNDU1MgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsic2VsZWN0b3JzUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXQiLCJzZWxlY3RvcnMiLCJkZWNsYXJhdGlvbnMiLCJnZXRTZWxlY3RvcnMiLCJnZXREZWNsYXJhdGlvbnMiLCJ1bnNoaWZ0IiwicnVsZVNldCIsImZpbmRNYXRjaGluZ1J1bGVTZXQiLCJydWxlU2V0cyIsIm1hdGNoaW5nUnVsZVNldCIsImZpbmQiLCJzZWxlY3RvcnNNYXRjaCIsInJ1bGVTZXRzTWF0Y2giLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsImRlY2xhcmF0aW9uc0NTUyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJzZWxlY3RvcnNOb2RlQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVSLEdBQWdCLENBQWhCLGFBQWdCO0FBRVosR0FBYyxDQUFkLFVBQWM7QUFDRyxHQUFzQixDQUF0QixRQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxHQUFLLENBQUNBLGNBQWMsR0FQRSxTQUFXLE9BT0pDLGNBQWMsQ0FBQyxDQUFhO0lBRXBDQyxPQUFPLGlCQUFiLFFBQVE7YUFBRkEsT0FBTyxDQUNkQyxTQUFTLEVBQUVDLFlBQVk7O1FBQ2pDLElBQUksQ0FBQ0QsU0FBUyxHQUFHQSxTQUFTO1FBQzFCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZOzs7O1lBR2xDQyxHQUFZLEVBQVpBLENBQVk7bUJBQVpBLFFBQVEsQ0FBUkEsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElB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