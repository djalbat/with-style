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
                declarations.backwardsForEach((function(declaration) {
                    var matches = declaration.checkMatches(this.array); ///
                    if (!matches) {
                        this.array.unshift(declaration);
                    }
                }).bind(this));
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
                    var lastIndex = length - 1, declarationsCSS = this.array.reduce(function(declarationsCSS1, declaration, index) {
                        var last = index === lastIndex, declarationCSS = declaration.asCSS(indent, last);
                        declarationsCSS1 += declarationCSS;
                        return declarationsCSS1;
                    }, _constants.EMPTY_STRING);
                    if (className === null) {
                        css = declarationsCSS; ///
                    } else {
                        css = ".".concat(className, " {\n").concat(declarationsCSS, "\n}\n\n");
                    }
                }
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var declarationNodes = declarationQuery.execute(node), array = declarationNodes.map(function(declarationNode) {
                    var node1 = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node1, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();
exports.default = Declarations;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBmaXJzdEluZGV4OyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gZmlyc3RJbmRleDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLmNoZWNrTWF0Y2hlcyh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50LCBsYXN0KTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFVCxHQUFlLENBQWYsWUFBZTtBQUVWLEdBQWMsQ0FBZCxVQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLEdBQUssQ0FBQyxnQkFBZ0IsR0FOQSxTQUFXLE9BTUYsY0FBYyxFQUFDLGNBQWdCO0lBRXpDLFlBQVk7YUFBWixZQUFZLENBQ25CLEtBQUs7OEJBREUsWUFBWTthQUV4QixLQUFLLEdBQUcsS0FBSzs7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