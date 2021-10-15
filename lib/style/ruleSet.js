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
                var matchingRuleSet = ruleSets.find((function(ruleSet) {
                    var selectors = ruleSet.getSelectors(), selectorsMatch = selectors === this.selectors, ruleSetsMatch = selectorsMatch; ///
                    if (ruleSetsMatch) {
                        return true;
                    }
                }).bind(this)) || null; ///
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwiRGVjbGFyYXRpb25zIiwiRU1QVFlfU1RSSU5HIiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiLCJzZWxlY3RvcnNRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiUnVsZVNldCIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwidW5zaGlmdCIsInJ1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwicnVsZVNldHMiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kIiwic2VsZWN0b3JzTWF0Y2giLCJydWxlU2V0c01hdGNoIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJkZWNsYXJhdGlvbnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFUixHQUFnQixDQUFoQixhQUFnQjtBQUVaLEdBQWMsQ0FBZCxVQUFjO0FBQ0csR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsR0FBSyxDQUFDLGNBQWMsR0FQRSxTQUFXLE9BT0osY0FBYyxFQUFDLFdBQWE7SUFFcEMsT0FBTyxpQkFBYixRQUFRO2FBQUYsT0FBTyxDQUNkLFNBQVMsRUFBRSxZQUFZOzhCQURoQixPQUFPO1FBRXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7O2lCQUhmLE9BQU87O1lBTTFCLEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLEdBQUcsQ0FBQztnQkFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7WUFDdkIsQ0FBQzs7O1lBRUQsR0FBZSxHQUFmLGVBQWU7bUJBQWYsUUFBUSxDQUFSLGVBQWUsR0FBRyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVk7WUFDMUIsQ0FBQzs7O1lBRUQsR0FBTyxHQUFQLE9BQU87bUJBQVAsUUFBUSxDQUFSLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEIsR0FBSyxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZTtnQkFFNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWTtZQUN4QyxDQUFDOzs7WUFFRCxHQUFtQixHQUFuQixtQkFBbUI7bUJBQW5CLFFBQVEsQ0FBUixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDN0IsR0FBSyxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFDLFFBQVEsQ0FBUCxPQUFPLEVBQUssQ0FBQztvQkFDbEQsR0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUNoQyxjQUFjLEdBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQzlDLGFBQWEsR0FBRyxjQUFjLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO29CQUV6QyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUM7d0JBQ2xCLE1BQU0sQ0FBQyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQyxpQkFBSyxJQUFJLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVmLE1BQU0sQ0FBQyxlQUFlO1lBQ3hCLENBQUM7OztZQUVELEdBQUssR0FBTCxLQUFLO21CQUFMLFFBQVEsQ0FBUixLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN4QixHQUFHLENBQUMsR0FBRyxHQXhDa0IsVUFBYztnQkEwQ3ZDLEdBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFTLE1BQUEsQ0FBUCxNQUFNO2dCQUUzRCxFQUFFLEVBQUUsZUFBZSxLQTVDTSxVQUFjLGVBNENELENBQUM7b0JBQ3BDLEdBQUcsTUFBZ0IsTUFBUyxDQUFuQixNQUFNLEdBQUMsQ0FBQyxHQUFjLE1BQWMsQ0FBMUIsU0FBUyxFQUNqQyxNQUFlLENBRHFCLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFDckQsR0FDRSxNQUFNLENBRE4sZUFBZSxHQUFDLEVBQ2xCLEdBQVMsTUFFVCxDQUZFLE1BQU0sR0FBQyxLQUVUO2dCQUNJLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEdBQUc7WUFDWixDQUFDOzs7O1lBRU0sR0FBaUIsR0FBakIsaUJBQWlCO21CQUF4QixRQUFRLENBQUQsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDLElBQUksRUFBRSxNQUFNLEdBQ25ELFlBQVksR0EzREcsYUFBZ0IsU0EyREgsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FDMUQsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFlBQVk7Z0JBRWpELE1BQU0sQ0FBQyxLQUFLO1lBQ2QsQ0FBQzs7O1dBeERrQixPQUFPOztrQkFBUCxPQUFPO1NBMkRuQiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDakQsR0FBSyxDQUFDLG9CQUFvQixPQWhFa0IsUUFBc0IsZ0NBZ0VQLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUNqRixTQUFTLE1BQTJCLE1BQUEsQ0FBckIsb0JBQW9CO0lBRXpDLE1BQU0sQ0FBQyxTQUFTO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbnMgZnJvbSBcIi4vZGVjbGFyYXRpb25zXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHNlbGVjdG9yc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvL3NlbGVjdG9yc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKSB7XG4gICAgdGhpcy5zZWxlY3RvcnMgPSBzZWxlY3RvcnM7XG4gICAgdGhpcy5kZWNsYXJhdGlvbnMgPSBkZWNsYXJhdGlvbnM7XG4gIH1cblxuICBnZXRTZWxlY3RvcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IHJ1bGVTZXQuZ2V0RGVjbGFyYXRpb25zKCk7XG5cbiAgICB0aGlzLmRlY2xhcmF0aW9ucy51bnNoaWZ0KGRlY2xhcmF0aW9ucyk7XG4gIH1cblxuICBmaW5kTWF0Y2hpbmdSdWxlU2V0KHJ1bGVTZXRzKSB7XG4gICAgY29uc3QgbWF0Y2hpbmdSdWxlU2V0ID0gcnVsZVNldHMuZmluZCgocnVsZVNldCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0b3JzID0gcnVsZVNldC5nZXRTZWxlY3RvcnMoKSxcbiAgICAgICAgICAgIHNlbGVjdG9yc01hdGNoID0gKHNlbGVjdG9ycyA9PT0gdGhpcy5zZWxlY3RvcnMpLFxuICAgICAgICAgICAgcnVsZVNldHNNYXRjaCA9IHNlbGVjdG9yc01hdGNoOyAvLy9cblxuICAgICAgaWYgKHJ1bGVTZXRzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDsgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hpbmdSdWxlU2V0O1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBsZXQgY3NzID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgY29uc3QgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoYCAgJHtpbmRlbnR9YCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zQ1NTICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxuJHtpbmRlbnR9fVxuXG5gO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBEZWNsYXJhdGlvbnMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBtZWRpYSA9IG5ldyBSdWxlU2V0KHNlbGVjdG9ycywgZGVjbGFyYXRpb25zKTtcblxuICAgIHJldHVybiBtZWRpYTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgc2VsZWN0b3JzTm9kZUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhzZWxlY3RvcnNRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc2VsZWN0b3JzID0gYCR7c2VsZWN0b3JzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuIl19