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
                }, _constants.EMPTY_STRING);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBSdWxlU2V0IGZyb20gXCIuL3J1bGVTZXRcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgcnVsZVNldHMuZm9yRWFjaCgocnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hpbmdSdWxlU2V0ID0gcnVsZVNldC5maW5kTWF0Y2hpbmdSdWxlU2V0KHRoaXMuYXJyYXkpOyAvLy9cblxuICAgICAgKG1hdGNoaW5nUnVsZVNldCA9PT0gbnVsbCkgP1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQocnVsZVNldCkgOlxuICAgICAgICAgIG1hdGNoaW5nUnVsZVNldC51bnNoaWZ0KHJ1bGVTZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKChydWxlU2V0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFYixHQUFXLENBQVgsUUFBVztBQUVGLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQyxZQUFZLEdBTkksU0FBVyxPQU1OLGNBQWMsRUFBQyxVQUFZO0lBRWpDLFFBQVE7YUFBUixRQUFRLENBQ2YsS0FBSzs4QkFERSxRQUFRO2FBRXBCLEtBQUssR0FBRyxLQUFLOztpQkFGRCxRQUFROztZQUszQixHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxPQUFPLFdBQUUsT0FBTyxFQUFLLENBQUM7b0JBQzdCLEdBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixNQUFNLEtBQUssRUFBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRW5FLGVBQWUsS0FBSyxJQUFJLFFBQ2xCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3JDLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFPLEdBQVAsT0FBTzs0QkFBUCxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ1osS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRO1lBQzdCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLOzRCQUFMLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLEdBQUssQ0FBQyxHQUFHLFFBQVEsS0FBSyxDQUFDLE1BQU0sVUFBRSxJQUFHLEVBQUUsT0FBTyxFQUFLLENBQUM7b0JBQy9DLEdBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTTtvQkFFbEQsSUFBRyxJQUFJLFVBQVU7MkJBRVYsSUFBRztnQkFDWixDQUFDLEVBOUJ3QixVQUFjO3VCQWdDaEMsR0FBRztZQUNaLENBQUM7Ozs7WUFFTSxHQUFpQixHQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksR0FDeEMsS0FBSyxHQUFHLFlBQVksQ0FBQyxHQUFHLFVBQUUsV0FBVyxFQUFLLENBQUM7b0JBQ3pDLEdBQUssQ0FBQyxLQUFJLEdBQUcsV0FBVyxFQUNsQixPQUFPLEdBekNMLFFBQVcsU0F5Q0ssaUJBQWlCLENBQUMsS0FBSSxFQUFFLE1BQU07MkJBRS9DLE9BQU87Z0JBQ2hCLENBQUMsR0FDRCxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLO3VCQUU1QixRQUFRO1lBQ2pCLENBQUM7OztXQTFDa0IsUUFBUTs7a0JBQVIsUUFBUSJ9