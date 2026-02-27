"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Keyframess;
    }
});
const _occamquery = require("occam-query");
const _keyframes = /*#__PURE__*/ _interop_require_default(require("./keyframes"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const keyframesQuery = _occamquery.Query.fromExpressionString("/stylesheet/keyframes");
class Keyframess {
    constructor(array){
        this.array = array;
    }
    unshift(keyframess) {
    ///
    }
    forEach(callback) {
        this.array.forEach(callback);
    }
    asCSS(className, indent) {
        const css = this.array.reduce((css, keyframes)=>{
            const keyframesCSS = keyframes.asCSS(indent);
            css += keyframesCSS;
            return css;
        }, _constants.EMPTY_STRING);
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const keyframesNodes = keyframesQuery.execute(node), array = keyframesNodes.map((keyframesNode)=>{
            const node = keyframesNode, keyframes = _keyframes.default.fromNodeAndTokens(node, tokens);
            return keyframes;
        }), keyframess = new Keyframess(array);
        return keyframess;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9rZXlmcmFtZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1xdWVyeVwiO1xuXG5pbXBvcnQgS2V5ZnJhbWVzIGZyb20gXCIuL2tleWZyYW1lc1wiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGtleWZyYW1lc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvc3R5bGVzaGVldC9rZXlmcmFtZXNcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleWZyYW1lc3Mge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQoa2V5ZnJhbWVzcykge1xuICAgIC8vL1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIGtleWZyYW1lcykgPT4ge1xuICAgICAgY29uc3Qga2V5ZnJhbWVzQ1NTID0ga2V5ZnJhbWVzLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgIGNzcyArPSBrZXlmcmFtZXNDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3Qga2V5ZnJhbWVzTm9kZXMgPSBrZXlmcmFtZXNRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0ga2V5ZnJhbWVzTm9kZXMubWFwKChrZXlmcmFtZXNOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0ga2V5ZnJhbWVzTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBrZXlmcmFtZXMgPSBLZXlmcmFtZXMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBrZXlmcmFtZXNzID0gbmV3IEtleWZyYW1lc3MoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGtleWZyYW1lc3M7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJLZXlmcmFtZXNzIiwia2V5ZnJhbWVzUXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uU3RyaW5nIiwiYXJyYXkiLCJ1bnNoaWZ0Iiwia2V5ZnJhbWVzcyIsImZvckVhY2giLCJjYWxsYmFjayIsImFzQ1NTIiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwia2V5ZnJhbWVzIiwia2V5ZnJhbWVzQ1NTIiwiRU1QVFlfU1RSSU5HIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwia2V5ZnJhbWVzTm9kZXMiLCJleGVjdXRlIiwibWFwIiwia2V5ZnJhbWVzTm9kZSIsIktleWZyYW1lcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7Ozs0QkFSQztrRUFFQTsyQkFFTzs7Ozs7O0FBRTdCLE1BQU1DLGlCQUFpQkMsaUJBQUssQ0FBQ0Msb0JBQW9CLENBQUM7QUFFbkMsTUFBTUg7SUFDbkIsWUFBWUksS0FBSyxDQUFFO1FBQ2pCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQTtJQUNmO0lBRUFDLFFBQVFDLFVBQVUsRUFBRTtJQUNsQixHQUFHO0lBQ0w7SUFFQUMsUUFBUUMsUUFBUSxFQUFFO1FBQ2hCLElBQUksQ0FBQ0osS0FBSyxDQUFDRyxPQUFPLENBQUNDO0lBQ3JCO0lBRUFDLE1BQU1DLFNBQVMsRUFBRUMsTUFBTSxFQUFFO1FBQ3ZCLE1BQU1DLE1BQU0sSUFBSSxDQUFDUixLQUFLLENBQUNTLE1BQU0sQ0FBQyxDQUFDRCxLQUFLRTtZQUNsQyxNQUFNQyxlQUFlRCxVQUFVTCxLQUFLLENBQUNFO1lBRXJDQyxPQUFPRztZQUVQLE9BQU9IO1FBQ1QsR0FBR0ksdUJBQVk7UUFFZixPQUFPSjtJQUNUO0lBRUEsT0FBT0ssa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtRQUNyQyxNQUFNQyxpQkFBaUJuQixlQUFlb0IsT0FBTyxDQUFDSCxPQUN4Q2QsUUFBUWdCLGVBQWVFLEdBQUcsQ0FBQyxDQUFDQztZQUMxQixNQUFNTCxPQUFPSyxlQUNQVCxZQUFZVSxrQkFBUyxDQUFDUCxpQkFBaUIsQ0FBQ0MsTUFBTUM7WUFFcEQsT0FBT0w7UUFDVCxJQUNBUixhQUFhLElBQUlOLFdBQVdJO1FBRWxDLE9BQU9FO0lBQ1Q7QUFDRiJ9