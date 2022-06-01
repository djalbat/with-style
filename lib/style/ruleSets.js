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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0IGZyb20gXCIuL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgcnVsZVNldHMuZm9yRWFjaCgocnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdSdWxlU2V0ID0gcnVsZVNldC5maW5kTWF0Y2hpbmdSdWxlU2V0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgICAgKG1hdGNoaW5nUnVsZVNldCA9PT0gbnVsbCkgP1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZVNldCkgOlxuICAgICAgICAgIG1hdGNoaW5nUnVsZVNldC51bnNoaWZ0KHJ1bGVTZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKChydWxlU2V0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwidW5zaGlmdCIsInJ1bGVTZXRzIiwiZm9yRWFjaCIsInJ1bGVTZXQiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXRDU1MiLCJFTVBUWV9TVFJJTkciLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9kZXMiLCJleGVjdXRlIiwibWFwIiwicnVsZVNldE5vZGUiLCJSdWxlU2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxTQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWIsSUFBQSxRQUFXLGtDQUFYLFdBQVcsRUFBQTtBQUVGLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxZQUFZLEdBQUdDLFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLEFBQUM7QUFFekMsSUFBQSxBQUFNQyxRQUFRLGlCQUFkO2FBQU1BLFFBQVEsQ0FDZkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0MsUUFBUSxFQUFFOztnQkFDaEJBLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLE9BQU8sRUFBSztvQkFDNUIsSUFBTUMsZUFBZSxHQUFHRCxPQUFPLENBQUNFLG1CQUFtQixDQUFDLE1BQUtOLEtBQUssQ0FBQyxBQUFDLEVBQUMsR0FBRztvQkFFbkVLLGVBQWUsS0FBSyxJQUFJLEdBQ3ZCLE1BQUtMLEtBQUssQ0FBQ0MsT0FBTyxDQUFDRyxPQUFPLENBQUMsR0FDekJDLGVBQWUsQ0FBQ0osT0FBTyxDQUFDRyxPQUFPLENBQUMsQ0FBQztpQkFDdEMsQ0FBQyxDQUFDO2FBQ0o7OztZQUVERCxHQUFPLEVBQVBBLFNBQU87bUJBQVBBLFNBQUFBLE9BQU8sQ0FBQ0ksUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUNQLEtBQUssQ0FBQ0csT0FBTyxDQUFDSSxRQUFRLENBQUMsQ0FBQzthQUM5Qjs7O1lBRURDLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtnQkFDdkIsSUFBTUMsSUFBRyxHQUFHLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsU0FBQ0QsR0FBRyxFQUFFUCxPQUFPLEVBQUs7b0JBQzlDLElBQU1TLFVBQVUsR0FBR1QsT0FBTyxDQUFDSSxLQUFLLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxDQUFDLEFBQUM7b0JBRXBEQyxHQUFHLElBQUlFLFVBQVUsQ0FBQztvQkFFbEIsT0FBT0YsR0FBRyxDQUFDO2lCQUNaLEVBQUVHLFVBQVksYUFBQSxDQUFDLEFBQUM7Z0JBRWpCLE9BQU9ILElBQUcsQ0FBQzthQUNaOzs7O1lBRU1JLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQXhCLFNBQU9BLGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtnQkFDckMsSUFBTUMsWUFBWSxHQUFHdEIsWUFBWSxDQUFDdUIsT0FBTyxDQUFDSCxJQUFJLENBQUMsRUFDekNoQixLQUFLLEdBQUdrQixZQUFZLENBQUNFLEdBQUcsQ0FBQyxTQUFDQyxXQUFXLEVBQUs7b0JBQ3hDLElBQU1MLE1BQUksR0FBR0ssV0FBVyxFQUNsQmpCLE9BQU8sR0FBR2tCLFFBQU8sUUFBQSxDQUFDUCxpQkFBaUIsQ0FBQ0MsTUFBSSxFQUFFQyxNQUFNLENBQUMsQUFBQztvQkFFeEQsT0FBT2IsT0FBTyxDQUFDO2lCQUNoQixDQUFDLEVBQ0ZGLFFBQVEsR0FBRyxJQUFJSCxRQUFRLENBQUNDLEtBQUssQ0FBQyxBQUFDO2dCQUVyQyxPQUFPRSxRQUFRLENBQUM7YUFDakI7Ozs7Q0FDRixFQUFBO2tCQTNDb0JILFFBQVEifQ==