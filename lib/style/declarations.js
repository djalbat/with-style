"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
var _declaration = _interopRequireDefault(require("./declaration"));
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
var declarationQuery = _occamDom.Query.fromExpression("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _classCallCheck(this, Declarations);
        this.array = array;
    }
    _createClass(Declarations, [
        {
            key: "forwardsForEach",
            value: function forwardsForEach(callback) {
                var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
                for(var index = firstIndex; index <= lastIndex; index++){
                    var declaration = this.array[index];
                    callback(declaration, index);
                }
            }
        },
        {
            key: "backwardsForEach",
            value: function backwardsForEach(callback) {
                var length = this.array.length, firstIndex = 0, lastIndex = length - 1;
                for(var index = lastIndex; index >= firstIndex; index--){
                    var declaration = this.array[index];
                    callback(declaration, index);
                }
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations) {
                var _this = this;
                declarations.backwardsForEach(function(declaration) {
                    var matches = declaration.checkMatches(_this.array); ///
                    if (!matches) {
                        _this.array.unshift(declaration);
                    }
                });
            }
        },
        {
            key: "asCSS",
            value: function asCSS(className, indent) {
                if (indent === undefined) {
                    indent = className; ///
                    className = null; ///
                }
                var css = _constants.EMPTY_STRING;
                var length = this.array.length;
                if (length > 0) {
                    var lastIndex = length - 1, declarationsCSS1 = this.array.reduce(function(declarationsCSS, declaration, index) {
                        var last = index === lastIndex, declarationCSS = declaration.asCSS(indent, last);
                        declarationsCSS += declarationCSS;
                        return declarationsCSS;
                    }, _constants.EMPTY_STRING);
                    if (className === null) {
                        css = declarationsCSS1; ///
                    } else {
                        css = ".".concat(className, " {\n").concat(declarationsCSS1, "\n}\n\n");
                    }
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node1, tokens) {
                var declarationNodes = declarationQuery.execute(node1), array = declarationNodes.map(function(declarationNode) {
                    var node = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();
exports.default = Declarations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBmaXJzdEluZGV4OyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gZmlyc3RJbmRleDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLmNoZWNrTWF0Y2hlcyh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50LCBsYXN0KTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlY2xhcmF0aW9uUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZm9yd2FyZHNGb3JFYWNoIiwiY2FsbGJhY2siLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaW5kZXgiLCJkZWNsYXJhdGlvbiIsImJhY2t3YXJkc0ZvckVhY2giLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25zIiwibWF0Y2hlcyIsImNoZWNrTWF0Y2hlcyIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwidW5kZWZpbmVkIiwiY3NzIiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFVCxHQUFlLENBQWYsWUFBZTtBQUVWLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQ0EsZ0JBQWdCLEdBTkEsU0FBVyxPQU1GQyxjQUFjLENBQUMsQ0FBZ0I7SUFFekNDLFlBQVksaUJBQWxCLFFBQVE7YUFBRkEsWUFBWSxDQUNuQkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSzs7OztZQUdwQkMsR0FBZSxFQUFmQSxDQUFlO21CQUFmQSxRQUFRLENBQVJBLGVBQWUsQ0FBQ0MsUUFBUSxFQUFFLENBQUM7Z0JBQ3pCLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNLEVBQzFCQyxVQUFVLEdBQUcsQ0FBQyxFQUNkQyxTQUFTLEdBQUdGLE1BQU0sR0FBRyxDQUFDO2dCQUU1QixHQUFHLENBQUUsR0FBRyxDQUFDRyxLQUFLLEdBQUdGLFVBQVUsRUFBRUUsS0FBSyxJQUFJRCxTQUFTLEVBQUVDLEtBQUssR0FBSSxDQUFDO29CQUN6RCxHQUFLLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ00sS0FBSztvQkFFcENKLFFBQVEsQ0FBQ0ssV0FBVyxFQUFFRCxLQUFLO2dCQUM3QixDQUFDO1lBQ0gsQ0FBQzs7O1lBRURFLEdBQWdCLEVBQWhCQSxDQUFnQjttQkFBaEJBLFFBQVEsQ0FBUkEsZ0JBQWdCLENBQUNOLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixHQUFLLENBQUNDLE1BQU0sR0FBRyxJQUFJ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