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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBmaXJzdEluZGV4OyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gZmlyc3RJbmRleDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLmNoZWNrTWF0Y2hlcyh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50LCBsYXN0KTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRlY2xhcmF0aW9uUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJmb3J3YXJkc0ZvckVhY2giLCJjYWxsYmFjayIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJpbmRleCIsImRlY2xhcmF0aW9uIiwiYmFja3dhcmRzRm9yRWFjaCIsInVuc2hpZnQiLCJkZWNsYXJhdGlvbnMiLCJtYXRjaGVzIiwiY2hlY2tNYXRjaGVzIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJ1bmRlZmluZWQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJsYXN0IiwiZGVjbGFyYXRpb25DU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRVQsR0FBZSxDQUFmLFlBQWU7QUFFVixHQUFjLENBQWQsVUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxHQUFLLENBQUNBLGdCQUFnQixHQUFHQyxTQUFLLE9BQUNDLGNBQWMsQ0FBQyxDQUFnQjtJQUV6Q0MsWUFBWSxpQkFBbEIsUUFBUTthQUFGQSxZQUFZLENBQ25CQyxLQUFLOztRQUNmLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLOzs7O1lBR3BCQyxHQUFlLEVBQWZBLENBQWU7bUJBQWZBLFFBQVEsQ0FBUkEsZUFBZSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztnQkFDekIsR0FBSyxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDSCxLQUFLLENBQUNHLE1BQU0sRUFDMUJDLFVBQVUsR0FBRyxDQUFDLEVBQ2RDLFNBQVMsR0FBR0YsTUFBTSxHQUFHLENBQUM7Z0JBRTVCLEdBQUcsQ0FBRSxHQUFHLENBQUNHLEtBQUssR0FBR0YsVUFBVSxFQUFFRSxLQUFLLElBQUlELFNBQVMsRUFBRUMsS0FBSyxHQUFJLENBQUM7b0JBQ3pELEdBQUssQ0FBQ0MsV0FBVyxHQUFHLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxLQUFLO29CQUVwQ0osUUFBUSxDQUFDSyxXQUFXLEVBQUVELEtBQUs7Z0JBQzdCLENBQUM7WUFDSCxDQUFDOzs7WUFFREUsR0FBZ0IsRUFBaEJBLENBQWdCO21CQUFoQkEsUUFBUSxDQUFSQSxnQkFBZ0IsQ0FBQ04sUUFBUSxFQUFF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