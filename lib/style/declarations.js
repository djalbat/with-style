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
            key: "someDeclaration",
            value: function someDeclaration(callback) {
                return this.array.some(callback);
            }
        },
        {
            key: "forwardsForEachDeclaration",
            value: function forwardsForEachDeclaration(callback) {
                forwardsForEach(this.array, callback);
            }
        },
        {
            key: "backwardsForEachDeclaration",
            value: function backwardsForEachDeclaration(callback) {
                backwardsForEach(this.array, callback);
            }
        },
        {
            key: "unshift",
            value: function unshift(declarations) {
                var _this = this;
                declarations.backwardsForEachDeclaration(function(declaration) {
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
                var declarationsCSS1 = this.array.reduce(function(declarationsCSS, declaration) {
                    var declarationCSS = declaration.asCSS(indent);
                    declarationsCSS += declarationCSS;
                    return declarationsCSS;
                }, _constants.EMPTY_STRING), css = className === null ? declarationsCSS1 : "".concat(indent, ".").concat(className, " {\n").concat(declarationsCSS1).concat(indent, "}\n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3J3YXJkc0ZvckVhY2gsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBzb21lRGVjbGFyYXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3J3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbihjYWxsYmFjaykgeyBmb3J3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKGNhbGxiYWNrKSB7IGJhY2t3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBkZWNsYXJhdGlvbnMuYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLm1hdGNoRGVjbGFyYXRpb25zKHRoaXMpOyAvLy9cblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChkZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IChjbGFzc05hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtpbmRlbnR9fVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiZm9yd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNGb3JFYWNoIiwiZGVjbGFyYXRpb25RdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJEZWNsYXJhdGlvbnMiLCJhcnJheSIsInNvbWVEZWNsYXJhdGlvbiIsImNhbGxiYWNrIiwic29tZSIsImZvcndhcmRzRm9yRWFjaERlY2xhcmF0aW9uIiwiYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uIiwidW5zaGlmdCIsImRlY2xhcmF0aW9ucyIsImRlY2xhcmF0aW9uIiwibWF0Y2hlcyIsIm1hdGNoRGVjbGFyYXRpb25zIiwiYXNDU1MiLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJkZWNsYXJhdGlvbnNDU1MiLCJyZWR1Y2UiLCJkZWNsYXJhdGlvbkNTUyIsIkVNUFRZX1NUUklORyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwibWFwIiwiZGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFDSixJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFFbEIsSUFBQSxZQUFlLGtDQUFmLGVBQWUsRUFBQTtBQUVWLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFRQSxlQUFlLEdBQXVCQyxVQUFjLGVBQUEsQ0FBcERELGVBQWUsRUFBRUUsZ0JBQWdCLEdBQUtE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