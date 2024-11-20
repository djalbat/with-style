"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declarations;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _constants = require("../constants");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var forwardsForEach = _necessary.arrayUtilities.forwardsForEach, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
var declarationQuery = _occamquery.Query.fromExpressionString("/*/declaration");
var Declarations = /*#__PURE__*/ function() {
    function Declarations(array) {
        _class_call_check(this, Declarations);
        this.array = array;
    }
    _create_class(Declarations, [
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
                var declarationsCSS = this.array.reduce(function(declarationsCSS, declaration) {
                    var declarationCSS = declaration.asCSS(indent);
                    declarationsCSS += declarationCSS;
                    return declarationsCSS;
                }, _constants.EMPTY_STRING), css = className === null ? declarationsCSS : "".concat(indent, ".").concat(className, " {\n").concat(declarationsCSS).concat(indent, "}\n\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3J3YXJkc0ZvckVhY2gsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBzb21lRGVjbGFyYXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3J3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbihjYWxsYmFjaykgeyBmb3J3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKGNhbGxiYWNrKSB7IGJhY2t3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBkZWNsYXJhdGlvbnMuYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLm1hdGNoRGVjbGFyYXRpb25zKHRoaXMpOyAvLy9cblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChkZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IChjbGFzc05hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtpbmRlbnR9fVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJmb3J3YXJkc0ZvckVhY2giLCJhcnJheVV0aWxpdGllcyIsImJhY2t3YXJkc0ZvckVhY2giLCJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImFycmF5Iiwic29tZURlY2xhcmF0aW9uIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yd2FyZHNGb3JFYWNoRGVjbGFyYXRpb24iLCJiYWNrd2FyZHNGb3JFYWNoRGVjbGFyYXRpb24iLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb24iLCJtYXRjaGVzIiwibWF0Y2hEZWNsYXJhdGlvbnMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImRlY2xhcmF0aW9uQ1NTIiwiRU1QVFlfU1RSSU5HIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzBCQVhDO3lCQUNTO2tFQUVQO3lCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQVFDLGtCQUFzQ0MseUJBQWMsQ0FBcERELGlCQUFpQkUsbUJBQXFCRCx5QkFBYyxDQUFuQ0M7QUFFekIsSUFBTUMsbUJBQW1CQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQztBQUVyQyxJQUFBLEFBQU1OLDZCQUFELEFBQUw7YUFBTUEsYUFDUE8sS0FBSztnQ0FERVA7UUFFakIsSUFBSSxDQUFDTyxLQUFLLEdBQUdBOztrQkFGSVA7O1lBS25CUSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0Q7WUFBVzs7O1lBRTlERSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCRixRQUFRO2dCQUFJUixnQkFBZ0IsSUFBSSxDQUFDTSxLQUFLLEVBQUVFO1lBQVc7OztZQUU5RUcsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkgsUUFBUTtnQkFBSU4saUJBQWlCLElBQUksQ0FBQ0ksS0FBSyxFQUFFRTtZQUFXOzs7WUFFaEZJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZOztnQkFDbEJBLGFBQWFGLDJCQUEyQixDQUFDLFNBQUNHO29CQUN4QyxJQUFNQyxVQUFVRCxZQUFZRSxpQkFBaUIsU0FBUSxHQUFHO29CQUV4RCxJQUFJLENBQUNELFNBQVM7d0JBQ1osTUFBS1QsS0FBSyxDQUFDTSxPQUFPLENBQUNFO29CQUNyQjtnQkFDRjtZQUNGOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFNBQVMsRUFBRUMsTUFBTTtnQkFDckIsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ2QsS0FBSyxDQUFDZSxNQUFNLENBQUMsU0FBQ0QsaUJBQWlCTjtvQkFDcEQsSUFBTVEsaUJBQWlCUixZQUFZRyxLQUFLLENBQUNFO29CQUV6Q0MsbUJBQW1CRTtvQkFFbkIsT0FBT0Y7Z0JBQ1QsR0FBR0csdUJBQVksR0FDZkMsTUFBTSxBQUFDTixjQUFjLE9BQ2JFLGtCQUNFLEFBQUMsR0FBWUYsT0FBVkMsUUFBTyxLQUM1QkMsT0FEK0JGLFdBQVUsUUFDdkJDLE9BQWxCQyxpQkFBeUIsT0FBUEQsUUFBTztnQkFJdkIsT0FBT0s7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsbUJBQW1CekIsaUJBQWlCMEIsT0FBTyxDQUFDSCxPQUM1Q3BCLFFBQVFzQixpQkFBaUJFLEdBQUcsQ0FBQyxTQUFDQztvQkFDNUIsSUFBTUwsU0FBT0ssaUJBQ1BqQixjQUFja0Isb0JBQVcsQ0FBQ1AsaUJBQWlCLENBQUNDLFFBQU1DO29CQUV4RCxPQUFPYjtnQkFDVCxJQUNBRCxlQUFlLElBL0NKZCxhQStDcUJPO2dCQUV0QyxPQUFPTztZQUNUOzs7V0FsRG1CZCJ9