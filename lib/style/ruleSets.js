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
const _occamquery = require("occam-query");
const _ruleSet = /*#__PURE__*/ _interop_require_default(require("./ruleSet"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ruleSetQuery = _occamquery.Query.fromExpressionString("/*/ruleSet");
class RuleSets {
    constructor(array){
        this.array = array;
    }
    unshift(ruleSets) {
        ruleSets.forEach((ruleSet)=>{
            const matchingRuleSet = ruleSet.findMatchingRuleSet(this.array); ///
            matchingRuleSet === null ? this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
        });
    }
    forEach(callback) {
        this.array.forEach(callback);
    }
    asCSS(className, indent) {
        const css = this.array.reduce((css, ruleSet)=>{
            const ruleSetCSS = ruleSet.asCSS(className, indent);
            css += ruleSetCSS;
            return css;
        }, _constants.EMPTY_STRING);
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const ruleSetNodes = ruleSetQuery.execute(node), array = ruleSetNodes.map((ruleSetNode)=>{
            const node = ruleSetNode, ruleSet = _ruleSet.default.fromNodeAndTokens(node, tokens);
            return ruleSet;
        }), ruleSets = new RuleSets(array);
        return ruleSets;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLyovcnVsZVNldFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBydWxlU2V0cy5mb3JFYWNoKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0LmZpbmRNYXRjaGluZ1J1bGVTZXQodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICAobWF0Y2hpbmdSdWxlU2V0ID09PSBudWxsKSA/XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlU2V0KSA6XG4gICAgICAgICAgbWF0Y2hpbmdSdWxlU2V0LnVuc2hpZnQocnVsZVNldCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoKHJ1bGVTZXROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gcnVsZVNldE5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgcnVsZVNldCA9IFJ1bGVTZXQuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGVTZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcnVsZVNldHMgPSBuZXcgUnVsZVNldHMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIHJ1bGVTZXRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldHMiLCJydWxlU2V0UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiYXJyYXkiLCJ1bnNoaWZ0IiwicnVsZVNldHMiLCJmb3JFYWNoIiwicnVsZVNldCIsIm1hdGNoaW5nUnVsZVNldCIsImZpbmRNYXRjaGluZ1J1bGVTZXQiLCJjYWxsYmFjayIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwicnVsZVNldENTUyIsIkVNUFRZX1NUUklORyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInJ1bGVTZXROb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJydWxlU2V0Tm9kZSIsIlJ1bGVTZXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7NEJBUkM7Z0VBRUY7MkJBRVM7Ozs7OztBQUU3QixNQUFNQyxlQUFlQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVqQyxNQUFNSDtJQUNuQixZQUFZSSxLQUFLLENBQUU7UUFDakIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO0lBQ2Y7SUFFQUMsUUFBUUMsUUFBUSxFQUFFO1FBQ2hCQSxTQUFTQyxPQUFPLENBQUMsQ0FBQ0M7WUFDaEIsTUFBTUMsa0JBQWtCRCxRQUFRRSxtQkFBbUIsQ0FBQyxJQUFJLENBQUNOLEtBQUssR0FBRyxHQUFHO1lBRW5FSyxvQkFBb0IsT0FDbkIsSUFBSSxDQUFDTCxLQUFLLENBQUNDLE9BQU8sQ0FBQ0csV0FDakJDLGdCQUFnQkosT0FBTyxDQUFDRztRQUM5QjtJQUNGO0lBRUFELFFBQVFJLFFBQVEsRUFBRTtRQUNoQixJQUFJLENBQUNQLEtBQUssQ0FBQ0csT0FBTyxDQUFDSTtJQUNyQjtJQUVBQyxNQUFNQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUN2QixNQUFNQyxNQUFNLElBQUksQ0FBQ1gsS0FBSyxDQUFDWSxNQUFNLENBQUMsQ0FBQ0QsS0FBS1A7WUFDbEMsTUFBTVMsYUFBYVQsUUFBUUksS0FBSyxDQUFDQyxXQUFXQztZQUU1Q0MsT0FBT0U7WUFFUCxPQUFPRjtRQUNULEdBQUdHLHVCQUFZO1FBRWYsT0FBT0g7SUFDVDtJQUVBLE9BQU9JLGtCQUFrQkMsSUFBSSxFQUFFQyxNQUFNLEVBQUU7UUFDckMsTUFBTUMsZUFBZXJCLGFBQWFzQixPQUFPLENBQUNILE9BQ3BDaEIsUUFBUWtCLGFBQWFFLEdBQUcsQ0FBQyxDQUFDQztZQUN4QixNQUFNTCxPQUFPSyxhQUNQakIsVUFBVWtCLGdCQUFPLENBQUNQLGlCQUFpQixDQUFDQyxNQUFNQztZQUVoRCxPQUFPYjtRQUNULElBQ0FGLFdBQVcsSUFBSU4sU0FBU0k7UUFFOUIsT0FBT0U7SUFDVDtBQUNGIn0=