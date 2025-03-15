"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleSet;
    }
});
var _occamquery = require("occam-query");
var _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
var _constants = require("../constants");
var _content = require("../utilities/content");
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
var selectorsQuery = _occamquery.Query.fromExpressionString("//selectors");
var RuleSet = /*#__PURE__*/ function() {
    function RuleSet(selectors, declarations) {
        _class_call_check(this, RuleSet);
        this.selectors = selectors;
        this.declarations = declarations;
    }
    _create_class(RuleSet, [
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
                var declarationsCSS = this.declarations.asCSS(null, indent);
                if (declarationsCSS !== _constants.EMPTY_STRING) {
                    css = "".concat(indent, ".").concat(className).concat(this.selectors, " {\n").concat(declarationsCSS).concat(indent, "}\n\n");
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var selectors = selectorsFromNodeAndTokens(node, tokens), declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSet = new RuleSet(selectors, declarations);
                return ruleSet;
            }
        }
    ]);
    return RuleSet;
}();
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNodeContent = (0, _content.contentFromQueryNodeAndTokens)(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiLy9zZWxlY3RvcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBydWxlU2V0LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgZmluZE1hdGNoaW5nUnVsZVNldChydWxlU2V0cykge1xuICAgIGNvbnN0IG1hdGNoaW5nUnVsZVNldCA9IHJ1bGVTZXRzLmZpbmQoKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGVTZXQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgICBzZWxlY3RvcnNNYXRjaCA9IChzZWxlY3RvcnMgPT09IHRoaXMuc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIHJ1bGVTZXRzTWF0Y2ggPSBzZWxlY3RvcnNNYXRjaDsgLy8vXG5cbiAgICAgIGlmIChydWxlU2V0c01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoaW5nUnVsZVNldDtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKG51bGwsIGluZGVudCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zQ1NTICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7aW5kZW50fX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcnVsZVNldCA9IG5ldyBSdWxlU2V0KHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBydWxlU2V0O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBzZWxlY3RvcnNOb2RlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHNlbGVjdG9yc1F1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICBzZWxlY3RvcnMgPSBgJHtzZWxlY3RvcnNOb2RlQ29udGVudH1gO1xuXG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsiUnVsZVNldCIsInNlbGVjdG9yc1F1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsInNlbGVjdG9ycyIsImRlY2xhcmF0aW9ucyIsImdldFNlbGVjdG9ycyIsImdldERlY2xhcmF0aW9ucyIsInVuc2hpZnQiLCJydWxlU2V0IiwiZmluZE1hdGNoaW5nUnVsZVNldCIsInJ1bGVTZXRzIiwibWF0Y2hpbmdSdWxlU2V0IiwiZmluZCIsInNlbGVjdG9yc01hdGNoIiwicnVsZVNldHNNYXRjaCIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwic2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMiLCJEZWNsYXJhdGlvbnMiLCJzZWxlY3RvcnNOb2RlQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzswQkFUQzttRUFFRzt5QkFFSTt1QkFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsaUJBQWlCQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVuQyxJQUFBLEFBQU1ILHdCQUFOO2FBQU1BLFFBQ1BJLFNBQVMsRUFBRUMsWUFBWTtnQ0FEaEJMO1FBRWpCLElBQUksQ0FBQ0ksU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFlBQVksR0FBR0E7O2tCQUhITDs7WUFNbkJNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsWUFBWTtZQUMxQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1KLGVBQWVJLFFBQVFGLGVBQWU7Z0JBRTVDLElBQUksQ0FBQ0YsWUFBWSxDQUFDRyxPQUFPLENBQUNIO1lBQzVCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsUUFBUTs7Z0JBQzFCLElBQU1DLGtCQUFrQkQsU0FBU0UsSUFBSSxDQUFDLFNBQUNKO29CQUNyQyxJQUFNTCxZQUFZSyxRQUFRSCxZQUFZLElBQ2hDUSxpQkFBa0JWLGNBQWMsTUFBS0EsU0FBUyxFQUM5Q1csZ0JBQWdCRCxnQkFBZ0IsR0FBRztvQkFFekMsSUFBSUMsZUFBZTt3QkFDakIsT0FBTztvQkFDVDtnQkFDRixNQUFNLE1BQU0sR0FBRztnQkFFZixPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVMsRUFBRUMsTUFBTTtnQkFDckIsSUFBSUMsTUFBTUMsdUJBQVk7Z0JBRXRCLElBQU1DLGtCQUFrQixJQUFJLENBQUNoQixZQUFZLENBQUNXLEtBQUssQ0FBQyxNQUFNRTtnQkFFdEQsSUFBSUcsb0JBQW9CRCx1QkFBWSxFQUFFO29CQUNuQ0QsTUFBTSxBQUFDLEdBQVlGLE9BQVZDLFFBQU8sS0FBZSxPQUFaRCxXQUN4QkksT0FEb0MsSUFBSSxDQUFDakIsU0FBUyxFQUFDLFFBQ2pDYyxPQUFsQkcsaUJBQXlCLE9BQVBILFFBQU87Z0JBR3ZCO2dCQUVBLE9BQU9DO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1wQixZQUFZcUIsMkJBQTJCRixNQUFNQyxTQUM3Q25CLGVBQWVxQixxQkFBWSxDQUFDSixpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDcERmLFVBQVUsSUFwRENULFFBb0RXSSxXQUFXQztnQkFFdkMsT0FBT0k7WUFDVDs7O1dBdkRtQlQ7O0FBMERyQixTQUFTeUIsMkJBQTJCRixJQUFJLEVBQUVDLE1BQU07SUFDOUMsSUFBTUcsdUJBQXVCQyxJQUFBQSxzQ0FBNkIsRUFBQzNCLGdCQUFnQnNCLE1BQU1DLFNBQzNFcEIsWUFBWSxBQUFDLEdBQXVCLE9BQXJCdUI7SUFFckIsT0FBT3ZCO0FBQ1QifQ==