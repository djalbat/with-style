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
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNodeContent = (0, _content).contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}
exports.default = RuleSet;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IERlY2xhcmF0aW9ucyBmcm9tIFwiLi9kZWNsYXJhdGlvbnNcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3Qgc2VsZWN0b3JzUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8vc2VsZWN0b3JzXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlU2V0IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpIHtcbiAgICB0aGlzLnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbiAgICB0aGlzLmRlY2xhcmF0aW9ucyA9IGRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFNlbGVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RvcnM7XG4gIH1cblxuICBnZXREZWNsYXJhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0KSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25zID0gcnVsZVNldC5nZXREZWNsYXJhdGlvbnMoKTtcblxuICAgIHRoaXMuZGVjbGFyYXRpb25zLnVuc2hpZnQoZGVjbGFyYXRpb25zKTtcbiAgfVxuXG4gIGZpbmRNYXRjaGluZ1J1bGVTZXQocnVsZVNldHMpIHtcbiAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0cy5maW5kKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBzZWxlY3RvcnMgPSBydWxlU2V0LmdldFNlbGVjdG9ycygpLFxuICAgICAgICAgICAgc2VsZWN0b3JzTWF0Y2ggPSAoc2VsZWN0b3JzID09PSB0aGlzLnNlbGVjdG9ycyksXG4gICAgICAgICAgICBydWxlU2V0c01hdGNoID0gc2VsZWN0b3JzTWF0Y2g7IC8vL1xuXG4gICAgICBpZiAocnVsZVNldHNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgIHJldHVybiBtYXRjaGluZ1J1bGVTZXQ7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmRlY2xhcmF0aW9ucy5hc0NTUyhgICAke2luZGVudH1gKTtcblxuICAgIGlmIChkZWNsYXJhdGlvbnNDU1MgIT09IEVNUFRZX1NUUklORykge1xuICAgICAgIGNzcyA9IGAke2luZGVudH0uJHtjbGFzc05hbWV9JHt0aGlzLnNlbGVjdG9yc30ge1xuJHtkZWNsYXJhdGlvbnNDU1N9XG4ke2luZGVudH19XG5cbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG1lZGlhID0gbmV3IFJ1bGVTZXQoc2VsZWN0b3JzLCBkZWNsYXJhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG1lZGlhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsic2VsZWN0b3JzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsInVuc2hpZnQiLCJydWxlU2V0IiwiZmluZE1hdGNoaW5nUnVsZVNldCIsInJ1bGVTZXRzIiwibWF0Y2hpbmdSdWxlU2V0IiwiZmluZCIsInNlbGVjdG9yc01hdGNoIiwicnVsZVNldHNNYXRjaCIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJtZWRpYSIsInNlbGVjdG9yc05vZGVDb250ZW50IiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFNBQVcsV0FBWCxXQUFXLENBQUE7QUFFUixJQUFBLGFBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUVaLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNHLElBQUEsUUFBc0IsV0FBdEIsc0JBQXNCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsY0FBYyxHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxBQUFDO0FBRTVDLElBQUEsQUFBTUMsT0FBTyxpQkEyRHpCLEFBM0RZO2FBQU1BLE9BQU8sQ0FDZEMsU0FBUyxFQUFFQyxZQUFZOztR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