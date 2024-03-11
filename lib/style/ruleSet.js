"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
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
var selectorsQuery = _occamQuery.Query.fromExpression("//selectors");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9ydWxlU2V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBzZWxlY3RvcnNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLy9zZWxlY3RvcnNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucykge1xuICAgIHRoaXMuc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICB9XG5cbiAgZ2V0U2VsZWN0b3JzKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdG9ycztcbiAgfVxuXG4gIGdldERlY2xhcmF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJhdGlvbnM7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbnMgPSBydWxlU2V0LmdldERlY2xhcmF0aW9ucygpO1xuXG4gICAgdGhpcy5kZWNsYXJhdGlvbnMudW5zaGlmdChkZWNsYXJhdGlvbnMpO1xuICB9XG5cbiAgZmluZE1hdGNoaW5nUnVsZVNldChydWxlU2V0cykge1xuICAgIGNvbnN0IG1hdGNoaW5nUnVsZVNldCA9IHJ1bGVTZXRzLmZpbmQoKHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHNlbGVjdG9ycyA9IHJ1bGVTZXQuZ2V0U2VsZWN0b3JzKCksXG4gICAgICAgICAgICBzZWxlY3RvcnNNYXRjaCA9IChzZWxlY3RvcnMgPT09IHRoaXMuc2VsZWN0b3JzKSxcbiAgICAgICAgICAgIHJ1bGVTZXRzTWF0Y2ggPSBzZWxlY3RvcnNNYXRjaDsgLy8vXG5cbiAgICAgIGlmIChydWxlU2V0c01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoaW5nUnVsZVNldDtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuZGVjbGFyYXRpb25zLmFzQ1NTKG51bGwsIGluZGVudCk7XG5cbiAgICBpZiAoZGVjbGFyYXRpb25zQ1NTICE9PSBFTVBUWV9TVFJJTkcpIHtcbiAgICAgICBjc3MgPSBgJHtpbmRlbnR9LiR7Y2xhc3NOYW1lfSR7dGhpcy5zZWxlY3RvcnN9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfSR7aW5kZW50fX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IHNlbGVjdG9yc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gRGVjbGFyYXRpb25zLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgUnVsZVNldChzZWxlY3RvcnMsIGRlY2xhcmF0aW9ucyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0b3JzRnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IHNlbGVjdG9yc05vZGVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoc2VsZWN0b3JzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHNlbGVjdG9ycyA9IGAke3NlbGVjdG9yc05vZGVDb250ZW50fWA7XG5cbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJzZWxlY3RvcnNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0Iiwic2VsZWN0b3JzIiwiZGVjbGFyYXRpb25zIiwiZ2V0U2VsZWN0b3JzIiwiZ2V0RGVjbGFyYXRpb25zIiwidW5zaGlmdCIsInJ1bGVTZXQiLCJmaW5kTWF0Y2hpbmdSdWxlU2V0IiwicnVsZVNldHMiLCJtYXRjaGluZ1J1bGVTZXQiLCJmaW5kIiwic2VsZWN0b3JzTWF0Y2giLCJydWxlU2V0c01hdGNoIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJzZWxlY3RvcnNGcm9tTm9kZUFuZFRva2VucyIsIkRlY2xhcmF0aW9ucyIsIm1lZGlhIiwic2VsZWN0b3JzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVWLElBQUEsYUFBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBRVosSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0csSUFBQSxRQUFzQixXQUF0QixzQkFBc0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxjQUFjLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLEFBQUM7QUFFNUMsSUFBQSxBQUFNQyxPQUFPLGlCQTBEekIsQUExRFk7YUFBTUEsT0FBTyxDQUNkQyxTQUFTLEVBQUVDLFlBQVk7O1FB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