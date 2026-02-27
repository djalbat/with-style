"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Keyframes;
    }
});
const _occamquery = require("occam-query");
const _keyframe = /*#__PURE__*/ _interop_require_default(require("./keyframe"));
const _constants = require("../constants");
const _content = require("../utilities/content");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const keyframeQuery = _occamquery.Query.fromExpressionString("/keyframes/keyframe"), identifierQuery = _occamquery.Query.fromExpressionString("/keyframes/@identifier");
class Keyframes {
    constructor(array, identifier){
        this.array = array;
        this.identifier = identifier;
    }
    getIdentifier() {
        return this.identifier;
    }
    asCSS(indent) {
        indent = indent + _constants.TWO_SPACES;
        const keyframesCSS = this.array.reduce((keyframesCSS, keyframe)=>{
            const keyframeCSS = keyframe.asCSS(indent);
            keyframesCSS += keyframeCSS;
            return keyframesCSS;
        }, _constants.EMPTY_STRING), css = `@keyframes ${this.identifier} {
${keyframesCSS}}

`;
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const keyframeNodes = keyframeQuery.execute(node), array = keyframeNodes.map((keyframeNode)=>{
            const node = keyframeNode, keyframe = _keyframe.default.fromNodeAndTokens(node, tokens);
            return keyframe;
        }), identifierContent = (0, _content.contentFromQueryNodeAndTokens)(identifierQuery, node, tokens), identifier = identifierContent, keyframes = new Keyframes(array, identifier);
        return keyframes;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBLZXlmcmFtZSBmcm9tIFwiLi9rZXlmcmFtZVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIFRXT19TUEFDRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGVudFwiO1xuXG5jb25zdCBrZXlmcmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIva2V5ZnJhbWVzL2tleWZyYW1lXCIpLFxuICAgICAgaWRlbnRpZmllclF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIva2V5ZnJhbWVzL0BpZGVudGlmaWVyXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlmcmFtZXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSwgaWRlbnRpZmllcikge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgICB0aGlzLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGtleWZyYW1lc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChrZXlmcmFtZXNDU1MsIGtleWZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZUNTUyA9IGtleWZyYW1lLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGtleWZyYW1lc0NTUyArPSBrZXlmcmFtZUNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IGBAa2V5ZnJhbWVzICR7dGhpcy5pZGVudGlmaWVyfSB7XG4ke2tleWZyYW1lc0NTU319XG5cbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGtleWZyYW1lTm9kZXMgPSBrZXlmcmFtZVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBrZXlmcmFtZU5vZGVzLm1hcCgoa2V5ZnJhbWVOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIGtleWZyYW1lID0gS2V5ZnJhbWUuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlkZW50aWZpZXJDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoaWRlbnRpZmllclF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSBpZGVudGlmaWVyQ29udGVudCwgLy8vXG4gICAgICAgICAga2V5ZnJhbWVzID0gbmV3IEtleWZyYW1lcyhhcnJheSwgaWRlbnRpZmllcik7XG5cbiAgICByZXR1cm4ga2V5ZnJhbWVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiS2V5ZnJhbWVzIiwia2V5ZnJhbWVRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJpZGVudGlmaWVyUXVlcnkiLCJhcnJheSIsImlkZW50aWZpZXIiLCJnZXRJZGVudGlmaWVyIiwiYXNDU1MiLCJpbmRlbnQiLCJUV09fU1BBQ0VTIiwia2V5ZnJhbWVzQ1NTIiwicmVkdWNlIiwia2V5ZnJhbWUiLCJrZXlmcmFtZUNTUyIsIkVNUFRZX1NUUklORyIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsImtleWZyYW1lTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVOb2RlIiwiS2V5ZnJhbWUiLCJpZGVudGlmaWVyQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwia2V5ZnJhbWVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXFCQTs7OzRCQVZDO2lFQUVEOzJCQUVvQjt5QkFDSzs7Ozs7O0FBRTlDLE1BQU1DLGdCQUFnQkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUMsd0JBQzNDQyxrQkFBa0JGLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRXBDLE1BQU1IO0lBQ25CLFlBQVlLLEtBQUssRUFBRUMsVUFBVSxDQUFFO1FBQzdCLElBQUksQ0FBQ0QsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0QsVUFBVTtJQUN4QjtJQUVBRSxNQUFNQyxNQUFNLEVBQUU7UUFDWkEsU0FBU0EsU0FBU0MscUJBQVU7UUFFNUIsTUFBTUMsZUFBZSxJQUFJLENBQUNOLEtBQUssQ0FBQ08sTUFBTSxDQUFDLENBQUNELGNBQWNFO1lBQzlDLE1BQU1DLGNBQWNELFNBQVNMLEtBQUssQ0FBQ0M7WUFFbkNFLGdCQUFnQkc7WUFFaEIsT0FBT0g7UUFDVCxHQUFHSSx1QkFBWSxHQUNmQyxNQUFNLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQ1YsVUFBVSxDQUFDO0FBQzlDLEVBQUVLLGFBQWE7O0FBRWYsQ0FBQztRQUVHLE9BQU9LO0lBQ1Q7SUFFQSxPQUFPQyxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFO1FBQ3JDLE1BQU1DLGdCQUFnQm5CLGNBQWNvQixPQUFPLENBQUNILE9BQ3RDYixRQUFRZSxjQUFjRSxHQUFHLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUwsT0FBT0ssY0FDUFYsV0FBV1csaUJBQVEsQ0FBQ1AsaUJBQWlCLENBQUNDLE1BQU1DO1lBRWxELE9BQU9OO1FBQ1QsSUFDQVksb0JBQW9CQyxJQUFBQSxzQ0FBNkIsRUFBQ3RCLGlCQUFpQmMsTUFBTUMsU0FDekViLGFBQWFtQixtQkFDYkUsWUFBWSxJQUFJM0IsVUFBVUssT0FBT0M7UUFFdkMsT0FBT3FCO0lBQ1Q7QUFDRiJ9