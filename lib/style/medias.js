"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Medias;
    }
});
const _occamquery = require("occam-query");
const _media = /*#__PURE__*/ _interop_require_default(require("./media"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const mediaQuery = _occamquery.Query.fromExpressionString("/stylesheet/media");
class Medias {
    constructor(array){
        this.array = array;
    }
    unshift(medias) {
        medias.forEach((media)=>{
            this.array.unshift(media);
        });
    }
    forEach(callback) {
        this.array.forEach(callback);
    }
    asCSS(className, indent) {
        const css = this.array.reduce((css, media)=>{
            const mediaCSS = media.asCSS(className, indent);
            css += mediaCSS;
            return css;
        }, _constants.EMPTY_STRING);
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const mediaNodes = mediaQuery.execute(node), array = mediaNodes.map((mediaNode)=>{
            const node = mediaNode, media = _media.default.fromNodeAndTokens(node, tokens);
            return media;
        }), medias = new Medias(array);
        return medias;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5cbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvblN0cmluZyhcIi9zdHlsZXNoZWV0L21lZGlhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgICB0aGlzLmFycmF5LnVuc2hpZnQobWVkaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIG1lZGlhKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYUNTUyA9IG1lZGlhLmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1lZGlhcyIsIm1lZGlhUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiYXJyYXkiLCJ1bnNoaWZ0IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwiY2FsbGJhY2siLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsIm1lZGlhQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7Ozs0QkFSQzs4REFFSjsyQkFFVzs7Ozs7O0FBRTdCLE1BQU1DLGFBQWFDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRS9CLE1BQU1IO0lBQ25CLFlBQVlJLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxRQUFRQyxNQUFNLEVBQUU7UUFDZEEsT0FBT0MsT0FBTyxDQUFDLENBQUNDO1lBQ2QsSUFBSSxDQUFDSixLQUFLLENBQUNDLE9BQU8sQ0FBQ0c7UUFDckI7SUFDRjtJQUVBRCxRQUFRRSxRQUFRLEVBQUU7UUFDaEIsSUFBSSxDQUFDTCxLQUFLLENBQUNHLE9BQU8sQ0FBQ0U7SUFDckI7SUFFQUMsTUFBTUMsU0FBUyxFQUFFQyxNQUFNLEVBQUU7UUFDdkIsTUFBTUMsTUFBTSxJQUFJLENBQUNULEtBQUssQ0FBQ1UsTUFBTSxDQUFDLENBQUNELEtBQUtMO1lBQ2xDLE1BQU1PLFdBQVdQLE1BQU1FLEtBQUssQ0FBQ0MsV0FBV0M7WUFFeENDLE9BQU9FO1lBRVAsT0FBT0Y7UUFDVCxHQUFHRyx1QkFBWTtRQUVmLE9BQU9IO0lBQ1Q7SUFFQSxPQUFPSSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFO1FBQ3JDLE1BQU1DLGFBQWFuQixXQUFXb0IsT0FBTyxDQUFDSCxPQUNoQ2QsUUFBUWdCLFdBQVdFLEdBQUcsQ0FBQyxDQUFDQztZQUN0QixNQUFNTCxPQUFPSyxXQUNQZixRQUFRZ0IsY0FBSyxDQUFDUCxpQkFBaUIsQ0FBQ0MsTUFBTUM7WUFFNUMsT0FBT1g7UUFDVCxJQUNBRixTQUFTLElBQUlOLE9BQU9JO1FBRTFCLE9BQU9FO0lBQ1Q7QUFDRiJ9