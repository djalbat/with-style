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
            value: function fromNodeAndTokens(node, tokens) {
                var declarationNodes = declarationQuery.execute(node), array = declarationNodes.map(function(declarationNode) {
                    var _$node = declarationNode, declaration = _declaration.default.fromNodeAndTokens(_$node, tokens);
                    return declaration;
                }), declarations = new Declarations(array);
                return declarations;
            }
        }
    ]);
    return Declarations;
}();
exports.default = Declarations;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aCxcbiAgICAgICAgICBmaXJzdEluZGV4ID0gMCxcbiAgICAgICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBmaXJzdEluZGV4OyBpbmRleCA8PSBsYXN0SW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gdGhpcy5hcnJheVtpbmRleF07XG5cbiAgICAgIGNhbGxiYWNrKGRlY2xhcmF0aW9uLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGxhc3RJbmRleDsgaW5kZXggPj0gZmlyc3RJbmRleDsgaW5kZXgtLSkge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLmNoZWNrTWF0Y2hlcyh0aGlzLmFycmF5KTsgLy8vXG5cbiAgICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgICB0aGlzLmFycmF5LnVuc2hpZnQoZGVjbGFyYXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpZiAoaW5kZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGVudCA9IGNsYXNzTmFtZTsgLy8vXG5cbiAgICAgIGNsYXNzTmFtZSA9IG51bGw7IC8vL1xuICAgIH1cblxuICAgIGxldCBjc3MgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFycmF5Lmxlbmd0aDtcblxuICAgIGlmIChsZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5hcnJheS5yZWR1Y2UoKGRlY2xhcmF0aW9uc0NTUywgZGVjbGFyYXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSAoaW5kZXggPT09IGxhc3RJbmRleCksXG4gICAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uQ1NTID0gZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50LCBsYXN0KTtcblxuICAgICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgKz0gZGVjbGFyYXRpb25DU1M7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICAgIGlmIChjbGFzc05hbWUgPT09IG51bGwpIHtcbiAgICAgICAgY3NzID0gZGVjbGFyYXRpb25zQ1NTOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MgPSBgLiR7Y2xhc3NOYW1lfSB7XG4ke2RlY2xhcmF0aW9uc0NTU31cbn1cblxuYDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBkZWNsYXJhdGlvbk5vZGVzLm1hcCgoZGVjbGFyYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gZGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGRlY2xhcmF0aW9ucyA9IG5ldyBEZWNsYXJhdGlvbnMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9ucztcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIkRlY2xhcmF0aW9ucyIsImFycmF5IiwiZm9yd2FyZHNGb3JFYWNoIiwiY2FsbGJhY2siLCJsZW5ndGgiLCJmaXJzdEluZGV4IiwibGFzdEluZGV4IiwiaW5kZXgiLCJkZWNsYXJhdGlvbiIsImJhY2t3YXJkc0ZvckVhY2giLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25zIiwibWF0Y2hlcyIsImNoZWNrTWF0Y2hlcyIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwidW5kZWZpbmVkIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwibGFzdCIsImRlY2xhcmF0aW9uQ1NTIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsU0FBVyxXQUFYLFdBQVcsQ0FBQTtBQUVULElBQUEsWUFBZSxrQ0FBZixlQUFlLEVBQUE7QUFFVixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTUEsZ0JBQWdCLEdBQUdDLFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQUFBQztBQUVqRCxJQUFBLEFBQU1DLFlBQVksaUJBQWxCO2FBQU1BLFlBQVksQ0FDbkJDLEtBQUs7O1FBQ2YsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUssQ0FBQzs7OztZQUdyQkMsR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEsZUFBZSxDQUFDQyxRQUFRLEVBQUU7Z0JBQ3hCLElBQU1DLE1BQU0sR0FBRyxJQUFJLENBQUNILEtBQUssQ0FBQ0csTUFBTSxFQUMxQkMsVUFBVSxHQUFHLENBQUMsRUFDZEMsU0FBUyxHQUFHRixNQUFNLEdBQUcsQ0FBQyxBQUFDO2dCQUU3QixJQUFLLElBQUlHLEtBQUssR0FBR0YsVUFBVSxFQUFFRSxLQUFLLElBQUlELFNBQVMsRUFBRUMsS0FBSyxFQUFFLENBQUU7b0JBQ3hELElBQU1DLFdBQVcsR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ00sS0FBSyxDQUFDLEFBQUM7b0JBRXRDSixRQUFRLENBQUNLLFdBQVcsRUFBRUQsS0FB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