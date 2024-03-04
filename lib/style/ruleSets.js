"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _ruleSet = _interopRequireDefault(require("./ruleSet"));
var _constants = require("../constants");
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
var ruleSetQuery = _occamQuery.Query.fromExpression("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _classCallCheck(this, RuleSets);
        this.array = array;
    }
    _createClass(RuleSets, [
        {
            key: "unshift",
            value: function unshift(ruleSets) {
                var _this = this;
                ruleSets.forEach(function(ruleSet) {
                    var matchingRuleSet = ruleSet.findMatchingRuleSet(_this.array); ///
                    matchingRuleSet === null ? _this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
                });
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
                var css1 = this.array.reduce(function(css, ruleSet) {
                    var ruleSetCSS = ruleSet.asCSS(className, indent);
                    css += ruleSetCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css1;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var ruleSetNodes = ruleSetQuery.execute(node), array = ruleSetNodes.map(function(ruleSetNode) {
                    var _$node = ruleSetNode, ruleSet = _ruleSet.default.fromNodeAndTokens(_$node, tokens);
                    return ruleSet;
                }), ruleSets = new RuleSets(array);
                return ruleSets;
            }
        }
    ]);
    return RuleSets;
}();
exports.default = RuleSets;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcnVsZVNldFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBydWxlU2V0cy5mb3JFYWNoKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0LmZpbmRNYXRjaGluZ1J1bGVTZXQodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICAobWF0Y2hpbmdSdWxlU2V0ID09PSBudWxsKSA/XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlU2V0KSA6XG4gICAgICAgICAgbWF0Y2hpbmdSdWxlU2V0LnVuc2hpZnQocnVsZVNldCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoKHJ1bGVTZXROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwidW5zaGlmdCIsInJ1bGVTZXRzIiwiZm9yRWFjaCIsInJ1bGVTZXQiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXRDU1MiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9kZXMiLCJleGVjdXRlIiwibWFwIiwicnVsZVNldE5vZGUiLCJSdWxlU2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBRWYsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUVGLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxZQUFZLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEFBQUM7QUFFekMsSUFBQSxBQUFNQyxRQUFRLGlCQUFkO2FBQU1BLFFBQVEsQ0FDZkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFOztnQkFDaEJBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSztvQkFDNUIsSUFBTUMsZUFBZSxHQUFHRCxPQUFPLENBQUNFLG1CQUFtQixDQUFDLE1BQUtOLEtBQUssQ0FBQyxBQUFDLEVBQUMsR0FBRztvQkFFbkVLLGVBQWUsS0FBSyxJQUFJLEdBQ3ZCLE1BQUtMLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRyxPQUFPLENBQUMsR0FDekJDLGVBQWUsQ0FBQ0osT0FBTyxDQUFDRyxPQUFPLENBQUMsQ0FBQztpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7OztZQUVERCxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0ksUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUNQLEtBQUssQ0FBQ0csT0FBTyxDQUFDSSxRQUFRLENBQUMsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtnQkFDdkIsSUFBTUMsSUFBRyxHQUFHLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsU0FBQ0QsR0FBRyxFQUFFUCxPQUFPLEVBQUs7b0JBQzlDLElBQU1TLFVBQVUsR0FBR1QsT0FBTyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRXBEQyxHQUFHLElBQUlFLFVBQVUsQ0FBQztvQkFFbEIsT0FBT0YsR0FBRyxDQUFDO2lCQUNaLEVBQUVHLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRWpCLE9BQU9ILElBQUcsQ0FBQzthQUNaOzs7O1lBRU1JLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsWUFBWSxHQUFHdEIsWUFBWSxDQUFDdUIsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFDekNoQixLQUFLLEdBQUdrQixZQUFZLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxXQUFXLEVBQUs7b0JBQ3hDLElBQU1MLE1BQUksR0FBR0ssV0FBVyxFQUNsQmpCLE9BQU8sR0FBR2tCLFFBQU8sUUFBQSxDQUFDUCxpQkFBaUIsQ0FBQ0MsTUFBSSxFQUFFQyxNQUFNLENBQUMsQUFBQztvQkFFeEQsT0FBT2IsT0FBTyxDQUFDO2lCQUNoQixDQUFDLEVBQ0ZGLFFBQVEsR0FBRyxJQUFJSCxRQUFRLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUVyQyxPQUFPRSxRQUFRLENBQUM7YUFDakI7Ozs7Q0FDRixFQUFBO2tCQTNDb0JILFFBQVEifQ==