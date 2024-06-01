"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSets;
    }
});
var _occamquery = require("occam-query");
var _ruleSet = /*#__PURE__*/ _interop_require_default(require("./ruleSet"));
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleSetQuery = _occamquery.Query.fromExpression("/*/ruleSet");
var RuleSets = /*#__PURE__*/ function() {
    function RuleSets(array) {
        _class_call_check(this, RuleSets);
        this.array = array;
    }
    _create_class(RuleSets, [
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
                var css = this.array.reduce(function(css, ruleSet) {
                    var ruleSetCSS = ruleSet.asCSS(className, indent);
                    css += ruleSetCSS;
                    return css;
                }, _constants.EMPTY_STRING);
                return css;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcnVsZVNldFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBydWxlU2V0cy5mb3JFYWNoKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0LmZpbmRNYXRjaGluZ1J1bGVTZXQodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICAobWF0Y2hpbmdSdWxlU2V0ID09PSBudWxsKSA/XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlU2V0KSA6XG4gICAgICAgICAgbWF0Y2hpbmdSdWxlU2V0LnVuc2hpZnQocnVsZVNldCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoKHJ1bGVTZXROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldHMiLCJydWxlU2V0UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiYXJyYXkiLCJ1bnNoaWZ0IiwicnVsZVNldHMiLCJmb3JFYWNoIiwicnVsZVNldCIsIm1hdGNoaW5nUnVsZVNldCIsImZpbmRNYXRjaGluZ1J1bGVTZXQiLCJjYWxsYmFjayIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwicnVsZVNldENTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInJ1bGVTZXROb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJydWxlU2V0Tm9kZSIsIlJ1bGVTZXQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzBCQVJDOzhEQUVGO3lCQUVTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQU1DLGVBQWVDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQztBQUUzQixJQUFBLEFBQU1ILHlCQUFELEFBQUw7YUFBTUEsU0FDUEksS0FBSztnQ0FERUo7UUFFakIsSUFBSSxDQUFDSSxLQUFLLEdBQUdBOztrQkFGSUo7O1lBS25CSyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsUUFBUTs7Z0JBQ2RBLFNBQVNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDaEIsSUFBTUMsa0JBQWtCRCxRQUFRRSxtQkFBbUIsQ0FBQyxNQUFLTixLQUFLLEdBQUcsR0FBRztvQkFFbkVLLG9CQUFvQixPQUNuQixNQUFLTCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0csV0FDakJDLGdCQUFnQkosT0FBTyxDQUFDRztnQkFDOUI7WUFDRjs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSSxRQUFRO2dCQUNkLElBQUksQ0FBQ1AsS0FBSyxDQUFDRyxPQUFPLENBQUNJO1lBQ3JCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVMsRUFBRUMsTUFBTTtnQkFDckIsSUFBTUMsTUFBTSxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLFNBQUNELEtBQUtQO29CQUNsQyxJQUFNUyxhQUFhVCxRQUFRSSxLQUFLLENBQUNDLFdBQVdDO29CQUU1Q0MsT0FBT0U7b0JBRVAsT0FBT0Y7Z0JBQ1QsR0FBR0csdUJBQVk7Z0JBRWYsT0FBT0g7WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsZUFBZXJCLGFBQWFzQixPQUFPLENBQUNILE9BQ3BDaEIsUUFBUWtCLGFBQWFFLEdBQUcsQ0FBQyxTQUFDQztvQkFDeEIsSUFBTUwsU0FBT0ssYUFDUGpCLFVBQVVrQixnQkFBTyxDQUFDUCxpQkFBaUIsQ0FBQ0MsUUFBTUM7b0JBRWhELE9BQU9iO2dCQUNULElBQ0FGLFdBQVcsSUF2Q0FOLFNBdUNhSTtnQkFFOUIsT0FBT0U7WUFDVDs7O1dBMUNtQk4ifQ==