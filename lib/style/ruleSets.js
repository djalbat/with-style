"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0IGZyb20gXCIuL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgcnVsZVNldHMuZm9yRWFjaCgocnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdSdWxlU2V0ID0gcnVsZVNldC5maW5kTWF0Y2hpbmdSdWxlU2V0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgICAgKG1hdGNoaW5nUnVsZVNldCA9PT0gbnVsbCkgP1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZVNldCkgOlxuICAgICAgICAgIG1hdGNoaW5nUnVsZVNldC51bnNoaWZ0KHJ1bGVTZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKChydWxlU2V0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJydWxlU2V0UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldHMiLCJhcnJheSIsInVuc2hpZnQiLCJydWxlU2V0cyIsImZvckVhY2giLCJydWxlU2V0IiwibWF0Y2hpbmdSdWxlU2V0IiwiZmluZE1hdGNoaW5nUnVsZVNldCIsImNhbGxiYWNrIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJyZWR1Y2UiLCJydWxlU2V0Q1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiUnVsZVNldCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsU0FBVyxXQUFYLFdBQVcsQ0FBQTtBQUViLElBQUEsUUFBVyxrQ0FBWCxXQUFXLEVBQUE7QUFFRixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTUEsWUFBWSxHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxBQUFDO0FBRXpDLElBQUEsQUFBTUMsUUFBUSxpQkFBZDthQUFNQSxRQUFRLENBQ2ZDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNDLFFBQVEsRUFBRTs7Z0JBQ2hCQSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxTQUFDQyxPQUFPLEVBQUs7b0JBQzVCLElBQU1DLGVBQWUsR0FBR0QsT0FBTyxDQUFDRSxtQkFBbUIsQ0FBQyxNQUFLTixLQUFLLENBQUMsQUFBQyxFQUFDLEdBQUc7b0JBRW5FSyxlQUFlLEtBQUssSUFBSSxHQUN2QixNQUFLTCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLEdBQ3pCQyxlQUFlLENBQUNKLE9BQU8sQ0FBQ0csT0FBTyxDQUFDLENBQUM7aUJBQ3RDLENBQUMsQ0FBQzthQUNKOzs7WUFFREQsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLENBQUNJLFFBQVEsRUFBRTtnQkFDaEIsSUFBSSxDQUFDUCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLENBQUM7YUFDOUI7OztZQUVEQyxHQUFLLEVBQUxBLE9BQUs7bUJBQUxBLFNBQUFBLEtBQUssQ0FBQ0MsU0FBUyxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3ZCLElBQU1DLElBQUcsR0FBRyxJQUFJLENBQUNYLEtBQUssQ0FBQ1ksTUFBTSxDQUFDLFNBQUNELEdBQUcsRUFBRVAsT0FBTyxFQUFLO29CQUM5QyxJQUFNUyxVQUFVLEdBQUdULE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sQ0FBQyxBQUFDO29CQUVwREMsR0FBRyxJQUFJRSxVQUFVLENBQUM7b0JBRWxCLE9BQU9GLEdBQUcsQ0FBQztpQkFDWixFQUFFRyxVQUFZLGFBQUEsQ0FBQyxBQUFDO2dCQUVqQixPQUFPSCxJQUFHLENBQUM7YUFDWjs7OztZQUVNSSxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUF4QixTQUFPQSxpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQU1DLFlBQVksR0FBR3RCLFlBQVksQ0FBQ3VCLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDLEVBQ3pDaEIsS0FBSyxHQUFHa0IsWUFBWSxDQUFDRSxHQUFHLENBQUMsU0FBQ0MsV0FBVyxFQUFLO29CQUN4QyxJQUFNTCxNQUFJLEdBQUdLLFdBQVcsRUFDbEJqQixPQUFPLEdBQUdrQixRQUFPLFFBQUEsQ0FBQ1AsaUJBQWlCLENBQUNDLE1BQUksRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRXhELE9BQU9iLE9BQU8sQ0FBQztpQkFDaEIsQ0FBQyxFQUNGRixRQUFRLEdBQUcsSUFBSUgsUUFBUSxDQUFDQyxLQUFLLENBQUMsQUFBQztnQkFFckMsT0FBT0UsUUFBUSxDQUFDO2FBQ2pCOzs7O0NBQ0YsRUFBQTtrQkEzQ29CSCxRQUFRIn0=