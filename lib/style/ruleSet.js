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
exports.default = RuleSet;
function selectorsFromNodeAndTokens(node, tokens) {
    var selectorsNodeContent = (0, _content).contentFromQueryNodeAndTokens(selectorsQuery, node, tokens), selectors = "".concat(selectorsNodeContent);
    return selectors;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiRGVjbGFyYXRpb25zIiwiRU1QVFlfU1RSSU5HIiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwidW5zaGlmdCIsInJ1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwicnVsZVNldHMiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kIiwic2VsZWN0b3JzTWF0Y2giLCJydWxlU2V0c01hdGNoIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJkZWNsYXJhdGlvbnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFUixHQUFnQixDQUFoQixhQUFnQjtBQUVaLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsR0FBSyxDQUFDLGNBQWMsR0FQRSxTQUFXLE9BT0osY0FBYyxDQUFDLENBQWE7SUFFcEMsT0FBTyxpQkFBYixRQUFRO2FBQUYsT0FBTyxDQUNkLFNBQVMsRUFBRSxZQUFZOzhCQURoQixPQUFPO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7O2lCQUhmLE9BQU87O1lBTTFCLEdBQVksRUFBWixDQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLEdBQUcsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRUQsR0FBZSxFQUFmLENBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBTyxFQUFQLENBQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZTtnQkFFNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUN4QyxDQUFDOzs7WUFFRCxHQUFtQixFQUFuQixDQUFtQjttQkFBbkIsUUFBUSxDQUFSLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDOztnQkFDN0IsR0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBUCxPQUFPLEVBQUssQ0FBQztvQkFDbEQsR0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUNoQyxjQUFjLEdBQUksU0FBUyxXQUFVLFNBQVMsRUFDOUMsYUFBYSxHQUFHLGNBQWMsQ0FBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7b0JBRXpDLEVBQUUsRUFBRSxhQUFhLEVBQUUsQ0FBQzt3QkFDbEIsTUFBTSxDQUFDLElBQUk7b0JBQ2IsQ0FBQztnQkFDSCxDQUFDLEtBQUssSUFBSSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFZixNQUFNLENBQUMsZUFBZTtZQUN4QixDQUFDOzs7WUFFRCxHQUFLLEVBQUwsQ0FBSzttQkFBTCxRQUFRLENBQVIsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDeEIsR0FBRyxDQUFDLEdBQUcsR0F4Q2tCLFVBQWM7Z0JBMEN2QyxHQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFFLENBQUUsSUFBUyxNQUFBLENBQVAsTUFBTTtnQkFFM0QsRUFBRSxFQUFFLGVBQWUsS0E1Q00sVUFBYyxlQTRDRCxDQUFDO29CQUNwQyxHQUFHLEdBQUksQ0FBQSxFQUFZLE1BQVMsQ0FBbkIsTUFBTSxFQUFDLENBQUMsSUFBYyxNQUFjLENBQTFCLFNBQVMsRUFDakMsTUFBZSxDQURxQixJQUFJLENBQUMsU0FBUyxFQUFDLENBQ3JELE9BQ0UsTUFBTSxDQUROLGVBQWUsRUFBQyxDQUNsQixLQUFTLE1BRVQsQ0FGRSxNQUFNLEVBQUMsQ0FFVDtnQkFDSSxDQUFDO2dCQUVELE1BQU0sQ0FBQyxHQUFHO1lBQ1osQ0FBQzs7OztZQUVNLEdBQWlCLEVBQWpCLENBQWlCO21CQUF4QixRQUFRLENBQUQsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQ25ELFlBQVksR0EzREcsYUFBZ0IsU0EyREgsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FDMUQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVk7Z0JBRWpELE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQzs7O1dBeERrQixPQUFPOztrQkFBUCxPQUFPO1NBMkRuQiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDakQsR0FBSyxDQUFDLG9CQUFvQixPQWhFa0IsUUFBc0IsZ0NBZ0VQLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUNqRixTQUFTLEdBQUksQ0FBQSxFQUF1QixNQUFBLENBQXJCLG9CQUFvQjtJQUV6QyxNQUFNLENBQUMsU0FBUztBQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9zZWxlY3RvcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBydWxlU2V0LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgZmluZE1hdGNoaW5nUnVsZVNldChydWxlU2V0cykge1xuICAgIGNvbnN0IG1hdGNoaW5nUnVsZVNldCA9IHJ1bGVTZXRzLmZpbmQoKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGVTZXQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgICBzZWxlY3RvcnNNYXRjaCA9IChzZWxlY3RvcnMgPT09IHRoaXMuc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIHJ1bGVTZXRzTWF0Y2ggPSBzZWxlY3RvcnNNYXRjaDsgLy8vXG5cbiAgICAgIGlmIChydWxlU2V0c01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoaW5nUnVsZVNldDtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKGAgICR7aW5kZW50fWApO1xuXG4gICAgaWYgKGRlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgY3NzID0gYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ke3RoaXMuc2VsZWN0b3JzfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbiR7aW5kZW50fX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoc2VsZWN0b3JzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdfQ==