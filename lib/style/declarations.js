"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
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
var declarationQuery = _occamQuery.Query.fromExpression("/*/declaration");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2RlY2xhcmF0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGZvcndhcmRzRm9yRWFjaChjYWxsYmFjaykge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoLFxuICAgICAgICAgIGZpcnN0SW5kZXggPSAwLFxuICAgICAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGZpcnN0SW5kZXg7IGluZGV4IDw9IGxhc3RJbmRleDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZGVjbGFyYXRpb24gPSB0aGlzLmFycmF5W2luZGV4XTtcblxuICAgICAgY2FsbGJhY2soZGVjbGFyYXRpb24sIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBiYWNrd2FyZHNGb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5hcnJheS5sZW5ndGgsXG4gICAgICAgICAgZmlyc3RJbmRleCA9IDAsXG4gICAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gbGFzdEluZGV4OyBpbmRleCA+PSBmaXJzdEluZGV4OyBpbmRleC0tKSB7XG4gICAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHRoaXMuYXJyYXlbaW5kZXhdO1xuXG4gICAgICBjYWxsYmFjayhkZWNsYXJhdGlvbiwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHVuc2hpZnQoZGVjbGFyYXRpb25zKSB7XG4gICAgZGVjbGFyYXRpb25zLmJhY2t3YXJkc0ZvckVhY2goKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb24uY2hlY2tNYXRjaGVzKHRoaXMuYXJyYXkpOyAvLy9cblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChkZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZW50ID0gY2xhc3NOYW1lOyAvLy9cblxuICAgICAgY2xhc3NOYW1lID0gbnVsbDsgLy8vXG4gICAgfVxuXG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDEsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQsIGxhc3QpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImRlY2xhcmF0aW9uUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJmb3J3YXJkc0ZvckVhY2giLCJjYWxsYmFjayIsImxlbmd0aCIsImZpcnN0SW5kZXgiLCJsYXN0SW5kZXgiLCJpbmRleCIsImRlY2xhcmF0aW9uIiwiYmFja3dhcmRzRm9yRWFjaCIsInVuc2hpZnQiLCJkZWNsYXJhdGlvbnMiLCJtYXRjaGVzIiwiY2hlY2tNYXRjaGVzIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJ1bmRlZmluZWQiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJsYXN0IiwiZGVjbGFyYXRpb25DU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBRVgsSUFBQSxZQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUVWLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFNQSxnQkFBZ0IsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxBQUFDO0FBRWpELElBQUEsQUFBTUMsWUFBWSxpQkFBbEI7YUFBTUEsWUFBWSxDQUNuQkMsS0FBSzs7UUFDZixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSyxDQUFDOzs7O1lBR3JCQyxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLENBQUNDLFFBQVEsRUFBRTtnQkFDeEIsSUFBTUMsTUFBTSxHQUFHLElBQUksQ0FBQ0gsS0FBSyxDQUFDRyxNQUFNLEVBQzFCQyxVQUFVLEdBQUcsQ0FBQyxFQUNkQyxTQUFTLEdBQUdGLE1BQU0sR0FBRyxDQUFDLEFBQUM7Z0JBRTdCLElBQUssSUFBSUcsS0FBSyxHQUFHRixVQUFVLEVBQUVFLEtBQUssSUFBSUQsU0FBUyxFQUFFQyxLQUFLLEVBQUUsQ0FBRTtvQkFDeEQsSUFBTUMsV0FBVyxHQUFHLElBQUksQ0FBQ1AsS0FBSyxDQUFDTSxLQUFLLENBQUMsQUFBQztvQkFFdENKLFFBQVEsQ0FBQ0ssV0FBVyxFQUFFRCxL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