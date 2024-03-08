"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _necessary = require("necessary");
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
var forwardsForEach = _necessary.arrayUtilities.forwardsForEach, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var declarationQuery = _occamQuery.Query.fromExpression("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _classCallCheck(this, Declarations);
        this.array = array;
    }
    _createClass(Declarations, [
        {
            key: "forwardsForEach",
            value: function forwardsForEach1(callback) {
                forwardsForEach(this.array, callback);
            }
        },
        {
            key: "backwardsForEach",
            value: function backwardsForEach1(callback) {
                backwardsForEach(this.array, callback);
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations) {
                var _this = this;
                declarations.backwardsForEach(function(declaration) {
                    var matches = declaration.matchDeclarations(_this); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3J3YXJkc0ZvckVhY2gsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBmb3J3YXJkc0ZvckVhY2goY2FsbGJhY2spIHsgZm9yd2FyZHNGb3JFYWNoKHRoaXMuYXJyYXksIGNhbGxiYWNrKTsgfVxuXG4gIGJhY2t3YXJkc0ZvckVhY2goY2FsbGJhY2spIHsgYmFja3dhcmRzRm9yRWFjaCh0aGlzLmFycmF5LCBjYWxsYmFjayk7IH1cblxuICB1bnNoaWZ0KGRlY2xhcmF0aW9ucykge1xuICAgIGRlY2xhcmF0aW9ucy5iYWNrd2FyZHNGb3JFYWNoKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLm1hdGNoRGVjbGFyYXRpb25zKHRoaXMpOyAvLy9cblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChkZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGlmIChpbmRlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5kZW50ID0gY2xhc3NOYW1lOyAvLy9cblxuICAgICAgY2xhc3NOYW1lID0gbnVsbDsgLy8vXG4gICAgfVxuXG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDEsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnNDU1MgPSB0aGlzLmFycmF5LnJlZHVjZSgoZGVjbGFyYXRpb25zQ1NTLCBkZWNsYXJhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IChpbmRleCA9PT0gbGFzdEluZGV4KSxcbiAgICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb25DU1MgPSBkZWNsYXJhdGlvbi5hc0NTUyhpbmRlbnQsIGxhc3QpO1xuXG4gICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb25zQ1NTO1xuICAgICAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBjc3MgPSBkZWNsYXJhdGlvbnNDU1M7ICAvLy9cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNzcyA9IGAuJHtjbGFzc05hbWV9IHtcbiR7ZGVjbGFyYXRpb25zQ1NTfVxufVxuXG5gO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgZGVjbGFyYXRpb25Ob2RlcyA9IGRlY2xhcmF0aW9uUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IGRlY2xhcmF0aW9uTm9kZXMubWFwKChkZWNsYXJhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBkZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgICAgZGVjbGFyYXRpb24gPSBEZWNsYXJhdGlvbi5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgZGVjbGFyYXRpb25zID0gbmV3IERlY2xhcmF0aW9ucyhhcnJheSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb25zO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZvcndhcmRzRm9yRWFjaCIsImFycmF5VXRpbGl0aWVzIiwiYmFja3dhcmRzRm9yRWFjaCIsImRlY2xhcmF0aW9uUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiRGVjbGFyYXRpb25zIiwiYXJyYXkiLCJjYWxsYmFjayIsInVuc2hpZnQiLCJkZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbiIsIm1hdGNoZXMiLCJtYXRjaERlY2xhcmF0aW9ucyIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwidW5kZWZpbmVkIiwiY3NzIiwiRU1QVFlfU1RSSU5HIiwibGVuZ3RoIiwibGFzdEluZGV4IiwiZGVjbGFyYXRpb25zQ1NTIiwicmVkdWNlIiwiaW5kZXgiLCJsYXN0IiwiZGVjbGFyYXRpb25DU1MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJkZWNsYXJhdGlvbk5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsImRlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0osSUFB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