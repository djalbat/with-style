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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gcnVsZVNldC5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIGZpbmRNYXRjaGluZ1J1bGVTZXQocnVsZVNldHMpIHtcbiAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0cy5maW5kKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvcnMgPSBydWxlU2V0LmdldFNlbGVjdG9ycygpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTWF0Y2ggPSAoc2VsZWN0b3JzID09PSB0aGlzLnNlbGVjdG9ycyksXG4gICAgICAgICAgICBydWxlU2V0c01hdGNoID0gc2VsZWN0b3JzTWF0Y2g7IC8vL1xuXG4gICAgICBpZiAocnVsZVNldHNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXRjaGluZ1J1bGVTZXQ7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNDU1MgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVSLEdBQWdCLENBQWhCLGFBQWdCO0FBRVosR0FBYyxDQUFkLFVBQWM7QUFDRyxHQUFzQixDQUF0QixRQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxHQUFLLENBQUMsY0FBYyxHQVBFLFNBQVcsT0FPSixjQUFjLEVBQUMsV0FBYTtJQUVwQyxPQUFPO2FBQVAsT0FBTyxDQUNkLFNBQVMsRUFBRSxZQUFZOzhCQURoQixPQUFPO2FBRW5CLFNBQVMsR0FBRyxTQUFTO2FBQ3JCLFlBQVksR0FBRyxZQUFZOztpQkFIZixPQUFPOztZQU0xQixHQUFZLEdBQVosWUFBWTs0QkFBWixZQUFZLEdBQUcsQ0FBQzs0QkFDRixTQUFTO1lBQ3ZCLENBQUM7OztZQUVELEdBQWUsR0FBZixlQUFlOzRCQUFmLGVBQWUsR0FBRyxDQUFDOzRCQUNMLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87NEJBQVAsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQixHQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlO3FCQUV2QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVk7WUFDeEMsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1COzRCQUFuQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxXQUFFLE9BQU8sRUFBSyxDQUFDO29CQUNsRCxHQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQ2hDLGNBQWMsR0FBSSxTQUFTLFVBQVUsU0FBUyxFQUM5QyxhQUFhLEdBQUcsY0FBYyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztvQkFFekMsRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDOytCQUNYLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLGlCQUFLLElBQUksQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7dUJBRVIsZUFBZTtZQUN4QixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN4QixHQUFHLENBQUMsR0FBRyxHQXhDa0IsVUFBYztnQkEwQ3ZDLEdBQUssQ0FBQyxlQUFlLFFBQVEsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQVMsTUFBQSxDQUFQLE1BQU07Z0JBRTNELEVBQUUsRUFBRSxlQUFlLEtBNUNNLFVBQWMsZUE0Q0QsQ0FBQztvQkFDcEMsR0FBRyxNQUFnQixNQUFTLENBQW5CLE1BQU0sR0FBQyxDQUFDLEdBQWMsTUFBYyxDQUExQixTQUFTLEVBQ2pDLE1BQWUsTUFEMEIsU0FBUyxHQUFDLElBQ3JELEdBQ0UsTUFBTSxDQUROLGVBQWUsR0FBQyxFQUNsQixHQUFTLE1BRVQsQ0FGRSxNQUFNLEdBQUMsS0FFVDtnQkFDSSxDQUFDO3VCQUVNLEdBQUc7WUFDWixDQUFDOzs7O1lBRU0sR0FBaUIsR0FBakIsaUJBQWlCOzRCQUFqQixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEdBQUssQ0FBQyxTQUFTLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FDbkQsWUFBWSxHQTNERyxhQUFnQixTQTJESCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUMxRCxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWTt1QkFFMUMsS0FBSztZQUNkLENBQUM7OztXQXhEa0IsT0FBTzs7a0JBQVAsT0FBTztTQTJEbkIsMEJBQTBCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBQ2pELEdBQUssQ0FBQyxvQkFBb0IsT0FoRWtCLFFBQXNCLGdDQWdFUCxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FDakYsU0FBUyxNQUEyQixNQUFBLENBQXJCLG9CQUFvQjtXQUVsQyxTQUFTO0FBQ2xCLENBQUMifQ==