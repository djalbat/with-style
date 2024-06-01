"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Keyframe;
    }
});
var _occamquery = require("occam-query");
var _necessary = require("necessary");
var _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
var _content = require("../utilities/content");
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
var percentageQuery = _occamquery.Query.fromExpression("/*/@percentage"), declarationQuery = _occamquery.Query.fromExpression("/*/declaration");
var first = _necessary.arrayUtilities.first;
var Keyframe = /*#__PURE__*/ function() {
    function Keyframe(percentage, declaration) {
        _class_call_check(this, Keyframe);
        this.percentage = percentage;
        this.declaration = declaration;
    }
    _create_class(Keyframe, [
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
                var percentageContent = (0, _content.contentFromQueryNodeAndTokens)(percentageQuery, node, tokens), percentage = percentageContent, declarationNodes = declarationQuery.execute(node), firstDeclarationNode = first(declarationNodes), declarationNode = firstDeclarationNode; ///
                node = declarationNode; ///
                var declaration = _declaration.default.fromNodeAndTokens(node, tokens), keyframe = new Keyframe(percentage, declaration);
                return keyframe;
            }
        }
    ]);
    return Keyframe;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgcGVyY2VudGFnZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9AcGVyY2VudGFnZVwiKSxcbiAgICAgIGRlY2xhcmF0aW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2RlY2xhcmF0aW9uXCIpO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5ZnJhbWUge1xuICBjb25zdHJ1Y3RvcihwZXJjZW50YWdlLCBkZWNsYXJhdGlvbikge1xuICAgIHRoaXMucGVyY2VudGFnZSA9IHBlcmNlbnRhZ2U7XG4gICAgdGhpcy5kZWNsYXJhdGlvbiA9IGRlY2xhcmF0aW9uO1xuICB9XG5cbiAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50YWdlO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVjbGFyYXRpb247XG4gIH1cblxuICBhc0NTUyhpbmRlbnQpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IHRoaXMuZGVjbGFyYXRpb24uYXNDU1MoaW5kZW50KSxcbiAgICAgICAgICBjc3MgPSBgJHtpbmRlbnR9JHt0aGlzLnBlcmNlbnRhZ2V9IHsgXG4ke2RlY2xhcmF0aW9uQ1NTfSR7aW5kZW50fX1cXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwZXJjZW50YWdlQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHBlcmNlbnRhZ2VRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwZXJjZW50YWdlID0gcGVyY2VudGFnZUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uTm9kZXMgPSBkZWNsYXJhdGlvblF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgZmlyc3REZWNsYXJhdGlvbk5vZGUgPSBmaXJzdChkZWNsYXJhdGlvbk5vZGVzKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbk5vZGUgPSBmaXJzdERlY2xhcmF0aW9uTm9kZTsgLy8vXG5cbiAgICBub2RlID0gZGVjbGFyYXRpb25Ob2RlOyAvLy9cblxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gRGVjbGFyYXRpb24uZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBrZXlmcmFtZSA9IG5ldyBLZXlmcmFtZShwZXJjZW50YWdlLCBkZWNsYXJhdGlvbik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlmcmFtZSIsInBlcmNlbnRhZ2VRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJkZWNsYXJhdGlvblF1ZXJ5IiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBlcmNlbnRhZ2UiLCJkZWNsYXJhdGlvbiIsImdldFBlcmNlbnRhZ2UiLCJnZXREZWNsYXJhdGlvbiIsImFzQ1NTIiwiaW5kZW50IiwiZGVjbGFyYXRpb25DU1MiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwZXJjZW50YWdlQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJmaXJzdERlY2xhcmF0aW9uTm9kZSIsImRlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uIiwia2V5ZnJhbWUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7OzBCQVpDO3lCQUNTO2tFQUVQO3VCQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QyxJQUFNQyxrQkFBa0JDLGlCQUFLLENBQUNDLGNBQWMsQ0FBQyxtQkFDdkNDLG1CQUFtQkYsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDO0FBRTlDLElBQU0sQUFBRUUsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRU8sSUFBQSxBQUFNTCx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BPLFVBQVUsRUFBRUMsV0FBVztnQ0FEaEJSO1FBRWpCLElBQUksQ0FBQ08sVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUhGUjs7WUFNbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsV0FBVztZQUN6Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNO2dCQUNWLElBQU1DLGlCQUFpQixJQUFJLENBQUNMLFdBQVcsQ0FBQ0csS0FBSyxDQUFDQyxTQUN4Q0UsTUFBTSxBQUFDLEdBQVcsT0FBVEYsUUFDakJDLE9BRDBCLElBQUksQ0FBQ04sVUFBVSxFQUFDLFNBQ3pCSyxPQUFqQkMsZ0JBQXdCLE9BQVBELFFBQU87Z0JBRXRCLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU07Z0JBQ25DLElBQU1DLG9CQUFvQkMsSUFBQUEsc0NBQTZCLEVBQUNsQixpQkFBaUJlLE1BQU1DLFNBQ3pFVixhQUFhVyxtQkFDYkUsbUJBQW1CaEIsaUJBQWlCaUIsT0FBTyxDQUFDTCxPQUM1Q00sdUJBQXVCakIsTUFBTWUsbUJBQzdCRyxrQkFBa0JELHNCQUFzQixHQUFHO2dCQUVqRE4sT0FBT08saUJBQWlCLEdBQUc7Z0JBRTNCLElBQU1mLGNBQWNnQixvQkFBVyxDQUFDVCxpQkFBaUIsQ0FBQ0MsTUFBTUMsU0FDbERRLFdBQVcsSUFoQ0F6QixTQWdDYU8sWUFBWUM7Z0JBRTFDLE9BQU9pQjtZQUNUOzs7V0FuQ21CekIifQ==