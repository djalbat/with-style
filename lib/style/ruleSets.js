"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _ruleSet = _interopRequireDefault(require("./ruleSet"));
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
var ruleSetQuery = _occamDom.Query.fromExpression("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _classCallCheck(this, RuleSets);
        this.array = array;
    }
    _createClass(RuleSets, [
        {
            key: "unshift",
            value: function unshift(ruleSets) {
                ruleSets.forEach((function(ruleSet) {
                    var matchingRuleSet = ruleSet.findMatchingRuleSet(this.array); ///
                    matchingRuleSet === null ? this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
                }).bind(this));
            }
        },
        {
            key: "forEach",
            value: function forEach(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                var css = this.array.reduce(function(css1, ruleSet) {
                    var ruleSetCSS = ruleSet.asCSS(className, indent);
                    css1 += ruleSetCSS;
                    return css1;
                }, "");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var ruleSetNodes = ruleSetQuery.execute(node), array = ruleSetNodes.map(function(ruleSetNode) {
                    var node1 = ruleSetNode, ruleSet = _ruleSet.default.fromNodeAndTokens(node1, tokens);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();
exports.default = RuleSets;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0IGZyb20gXCIuL3J1bGVTZXRcIjtcblxuY29uc3QgcnVsZVNldFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9ydWxlU2V0XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0cyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0cykge1xuICAgIHJ1bGVTZXRzLmZvckVhY2goKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoaW5nUnVsZVNldCA9IHJ1bGVTZXQuZmluZE1hdGNoaW5nUnVsZVNldCh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIChtYXRjaGluZ1J1bGVTZXQgPT09IG51bGwpID9cbiAgICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGVTZXQpIDpcbiAgICAgICAgICBtYXRjaGluZ1J1bGVTZXQudW5zaGlmdChydWxlU2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvckVhY2goY2FsbGJhY2spIHtcbiAgICB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBydWxlU2V0Q1NTID0gcnVsZVNldC5hc0NTUyhjbGFzc05hbWUsIGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBydWxlU2V0Q1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIFwiXCIpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoKHJ1bGVTZXROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUViLEdBQVcsQ0FBWCxRQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLEdBQUssQ0FBQyxZQUFZLEdBSkksU0FBVyxPQUlOLGNBQWMsRUFBQyxVQUFZO0lBRWpDLFFBQVE7YUFBUixRQUFRLENBQ2YsS0FBSzs4QkFERSxRQUFRO2FBRXBCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxRQUFROztZQUszQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxPQUFPLFdBQUUsT0FBTyxFQUFLLENBQUM7b0JBQzdCLEdBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixNQUFNLEtBQUssRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5FLGVBQWUsS0FBSyxJQUFJLFFBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3JDLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ1osS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQyxHQUFHLFFBQVEsS0FBSyxDQUFDLE1BQU0sVUFBRSxJQUFHLEVBQUUsT0FBTyxFQUFLLENBQUM7b0JBQy9DLEdBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTTtvQkFFbEQsSUFBRyxJQUFJLFVBQVU7MkJBRVYsSUFBRztnQkFDWixDQUFDO3VCQUVNLEdBQUc7WUFDWixDQUFDOzs7O1lBRU0sR0FBaUIsR0FBakIsaUJBQWlCOzRCQUFqQixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEdBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQ3hDLEtBQUssR0FBRyxZQUFZLENBQUMsR0FBRyxVQUFFLFdBQVcsRUFBSyxDQUFDO29CQUN6QyxHQUFLLENBQUMsS0FBSSxHQUFHLFdBQVcsRUFDbEIsT0FBTyxHQXZDTCxRQUFXLFNBdUNLLGlCQUFpQixDQUFDLEtBQUksRUFBRSxNQUFNOzJCQUUvQyxPQUFPO2dCQUNoQixDQUFDLEdBQ0QsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSzt1QkFFNUIsUUFBUTtZQUNqQixDQUFDOzs7V0ExQ2tCLFFBQVE7O2tCQUFSLFFBQVEifQ==