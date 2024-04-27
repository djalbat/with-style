"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _necessary = require("necessary");
var _declaration = _interopRequireDefault(require("./declaration"));
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
var percentageQuery = _occamQuery.Query.fromExpression("/*/@percentage"), declarationQuery = _occamQuery.Query.fromExpression("/*/declaration");
var first = _necessary.arrayUtilities.first;
var Keyframe = /*#__PURE__*/ function() {
    function Keyframe(percentage, declaration) {
        _classCallCheck(this, Keyframe);
        this.percentage = percentage;
        this.declaration = declaration;
    }
    _createClass(Keyframe, [
        {
            key: "getPercentage",
            value: function getPercentage() {
                return this.percentage;
            }
        },
        {
            key: "getDeclaration",
            value: function getDeclaration() {
                return this.declaration;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                var declarationCSS = this.declaration.asCSS(indent), css = "".concat(indent).concat(this.percentage, " { \n").concat(declarationCSS).concat(indent, "}\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var percentageContent = (0, _content).contentFromQueryNodeAndTokens(percentageQuery, node, tokens), percentage = percentageContent, declarationNodes = declarationQuery.execute(node), firstDeclarationNode = first(declarationNodes), declarationNode = firstDeclarationNode; ///
                node = declarationNode; ///
                var declaration = _declaration.default.fromNodeAndTokens(node, tokens), keyframe = new Keyframe(percentage, declaration);
                return keyframe;
            }
        }
    ]);
    return Keyframe;
}();
exports.default = Keyframe;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZS5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgcGVyY2VudGFnZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9AcGVyY2VudGFnZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2RlY2xhcmF0aW9uXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5ZnJhbWUge1xuICBjb25zdHJ1Y3RvcihwZXJjZW50YWdlLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50YWdlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IHRoaXMuZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50KSxcbiAgICAgICAgICBjc3MgPSBgJHtpbmRlbnR9JHt0aGlzLnBlcmNlbnRhZ2V9IHsgXG4ke2RlY2xhcmF0aW9uQ1NTfSR7aW5kZW50fX1cXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwZXJjZW50YWdlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHBlcmNlbnRhZ2VRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwZXJjZW50YWdlID0gcGVyY2VudGFnZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgZmlyc3REZWNsYXJhdGlvbk5vZGUgPSBmaXJzdChkZWNsYXJhdGlvbk5vZGVzKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGUgPSBmaXJzdERlY2xhcmF0aW9uTm9kZTsgLy8vXG5cbiAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBrZXlmcmFtZSA9IG5ldyBLZXlmcmFtZShwZXJjZW50YWdlLCBkZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsicGVyY2VudGFnZVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImRlY2xhcmF0aW9uUXVlcnkiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwiS2V5ZnJhbWUiLCJwZXJjZW50YWdlIiwiZGVjbGFyYXRpb24iLCJnZXRQZXJjZW50YWdlIiwiZ2V0RGVjbGFyYXRpb24iLCJhc0NTUyIsImluZGVudCIsImRlY2xhcmF0aW9uQ1NTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicGVyY2VudGFnZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsImRlY2xhcmF0aW9uTm9kZXMiLCJleGVjdXRlIiwiZmlyc3REZWNsYXJhdGlvbk5vZGUiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiIsImtleWZyYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0osSUFBQSxVQUFXLFdBQVgsV0FBVyxDQUFBO0FBRWxCLElBQUEsWUFBZSxrQ0FBZixlQUFlLEVBQUE7QUFFTyxJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU1BLGVBQWUsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN4REMsZ0JBQWdCLEdBQUdGLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQUFBQztBQUVoRSxJQUFNLEFBQUVFLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFFbEIsSUFBQSxBQUFNRSxRQUFRLGlCQUFkO2FBQU1BLFFBQVEsQ0FDZkMsVUFBVSxFQUFFQyxXQUFXOztRQUNqQyxJQUFJLENBQUNELFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXLENBQUM7Ozs7WUFHakNDLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUM7YUFDeEI7OztZQUVERyxHQUFjLEVBQWRBLGdCQUFjO21CQUFkQSxTQUFBQSxjQUFjLEdBQUc7Z0JBQ2YsT0FBTyxJQUFJLENBQUNGLFdBQVcsQ0FBQzthQUN6Qjs7O1lBRURHLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxNQUFNLEVBQUU7Z0JBQ1osSUFBTUMsY0FBYyxHQUFHLElBQUksQ0FBQ0wsV0FBVyxDQUFDRyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxFQUMvQ0UsR0FBRyxHQUFHLEFBQUMsRUFBQSxDQUFXLE1BQWUsQ0FBeEJGLE1BQU0sQ0FBbUIsQ0FDMUNDLE1BQWMsQ0FEWSxJQUFJLENBQUNOLFVBQVUsRUFBQyxPQUM1QyxDQUFpQixDQUFFSyxNQUFNLENBQXZCQyxjQUFjLENBQVUsQ0FBQSxNQUFHLENBQVZELE1BQU0sRUFBQyxLQUFHLENBQUMsQUFBQztnQkFFM0IsT0FBT0UsR0FBRyxDQUFDO2FBQ1o7Ozs7WUFFTUMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBeEIsU0FBT0EsaUJBQWlCLENBQUNDLElBQUksRUFBRUMsTUFBTSxFQUFFO2dCQUNyQyxJQUFNQyxpQkFBaUIsR0FBR0MsQ0FBQUEsR0FBQUEsUUFBNkIsQUFBK0IsQ0FBQSw4QkFBL0IsQ0FBQ25CLGVBQWUsRUFBRWdCLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQ2hGVixVQUFVLEdBQUdXLGlCQUFpQixFQUM5QkUsZ0JBQWdCLEdBQUdqQixnQkFBZ0IsQ0FBQ2tCLE9BQU8sQ0FBQ0wsSUFBSSxDQUFDLEVBQ2pETSxvQkFBb0IsR0FBR2xCLEtBQUssQ0FBQ2dCLGdCQUFnQixDQUFDLEVBQzlDRyxlQUFlLEdBQUdELG9CQUFvQixBQUFDLEVBQUMsR0FBRztnQkFFakROLElBQUksR0FBR08sZUFBZSxDQUFDLENBQUMsR0FBRztnQkFFM0IsSUFBTWYsV0FBVyxHQUFHZ0IsWUFBVyxRQUFBLENBQUNULGlCQUFpQixDQUFDQyxJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUN6RFEsUUFBUSxHQUFHLElBQUluQixRQUFRLENBQUNDLFVBQVUsRUFBRUMsV0FBVyxDQUFDLEFBQUM7Z0JBRXZELE9BQU9pQixRQUFRLENBQUM7YUFDakI7Ozs7Q0FDRixFQUFBO2tCQXBDb0JuQixRQUFRIn0=