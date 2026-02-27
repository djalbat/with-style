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
const _occamquery = require("occam-query");
const _necessary = require("necessary");
const _declaration = /*#__PURE__*/ _interop_require_default(require("./declaration"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { forwardsForEach, backwardsForEach } = _necessary.arrayUtilities;
const declarationQuery = _occamquery.Query.fromExpressionString("/*/declaration");
class Declarations {
    constructor(array){
        this.array = array;
    }
    someDeclaration(callback) {
        return this.array.some(callback);
    }
    forwardsForEachDeclaration(callback) {
        forwardsForEach(this.array, callback);
    }
    backwardsForEachDeclaration(callback) {
        backwardsForEach(this.array, callback);
    }
    unshift(declarations) {
        declarations.backwardsForEachDeclaration((declaration)=>{
            const matches = declaration.matchDeclarations(this); ///
            if (!matches) {
                this.array.unshift(declaration);
            }
        });
    }
    asCSS(className, indent) {
        const declarationsCSS = this.array.reduce((declarationsCSS, declaration)=>{
            const declarationCSS = declaration.asCSS(indent);
            declarationsCSS += declarationCSS;
            return declarationsCSS;
        }, _constants.EMPTY_STRING), css = className === null ? declarationsCSS : `${indent}.${className} {
${declarationsCSS}${indent}}

`;
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const declarationNodes = declarationQuery.execute(node), array = declarationNodes.map((declarationNode)=>{
            const node = declarationNode, declaration = _declaration.default.fromNodeAndTokens(node, tokens);
            return declaration;
        }), declarations = new Declarations(array);
        return declarations;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLXF1ZXJ5XCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBmb3J3YXJkc0ZvckVhY2gsIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBkZWNsYXJhdGlvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb25TdHJpbmcoXCIvKi9kZWNsYXJhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb25zIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBzb21lRGVjbGFyYXRpb24oY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuYXJyYXkuc29tZShjYWxsYmFjayk7IH1cblxuICBmb3J3YXJkc0ZvckVhY2hEZWNsYXJhdGlvbihjYWxsYmFjaykgeyBmb3J3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKGNhbGxiYWNrKSB7IGJhY2t3YXJkc0ZvckVhY2godGhpcy5hcnJheSwgY2FsbGJhY2spOyB9XG5cbiAgdW5zaGlmdChkZWNsYXJhdGlvbnMpIHtcbiAgICBkZWNsYXJhdGlvbnMuYmFja3dhcmRzRm9yRWFjaERlY2xhcmF0aW9uKChkZWNsYXJhdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGRlY2xhcmF0aW9uLm1hdGNoRGVjbGFyYXRpb25zKHRoaXMpOyAvLy9cblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChkZWNsYXJhdGlvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9uc0NTUyA9IHRoaXMuYXJyYXkucmVkdWNlKChkZWNsYXJhdGlvbnNDU1MsIGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJhdGlvbkNTUyA9IGRlY2xhcmF0aW9uLmFzQ1NTKGluZGVudCk7XG5cbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyArPSBkZWNsYXJhdGlvbkNTUztcblxuICAgICAgICAgICAgcmV0dXJuIGRlY2xhcmF0aW9uc0NTUztcbiAgICAgICAgICB9LCBFTVBUWV9TVFJJTkcpLFxuICAgICAgICAgIGNzcyA9IChjbGFzc05hbWUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIGRlY2xhcmF0aW9uc0NTUyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fS4ke2NsYXNzTmFtZX0ge1xuJHtkZWNsYXJhdGlvbnNDU1N9JHtpbmRlbnR9fVxuXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBkZWNsYXJhdGlvbk5vZGVzID0gZGVjbGFyYXRpb25RdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gZGVjbGFyYXRpb25Ob2Rlcy5tYXAoKGRlY2xhcmF0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IGRlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbiA9IERlY2xhcmF0aW9uLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBkZWNsYXJhdGlvbnMgPSBuZXcgRGVjbGFyYXRpb25zKGFycmF5KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbnM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEZWNsYXJhdGlvbnMiLCJmb3J3YXJkc0ZvckVhY2giLCJiYWNrd2FyZHNGb3JFYWNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWNsYXJhdGlvblF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvblN0cmluZyIsImFycmF5Iiwic29tZURlY2xhcmF0aW9uIiwiY2FsbGJhY2siLCJzb21lIiwiZm9yd2FyZHNGb3JFYWNoRGVjbGFyYXRpb24iLCJiYWNrd2FyZHNGb3JFYWNoRGVjbGFyYXRpb24iLCJ1bnNoaWZ0IiwiZGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb24iLCJtYXRjaGVzIiwibWF0Y2hEZWNsYXJhdGlvbnMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsImRlY2xhcmF0aW9uc0NTUyIsInJlZHVjZSIsImRlY2xhcmF0aW9uQ1NTIiwiRU1QVFlfU1RSSU5HIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb25Ob2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJkZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7Ozs0QkFYQzsyQkFDUztvRUFFUDsyQkFFSzs7Ozs7O0FBRTdCLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFBRSxHQUFHQyx5QkFBYztBQUU1RCxNQUFNQyxtQkFBbUJDLGlCQUFLLENBQUNDLG9CQUFvQixDQUFDO0FBRXJDLE1BQU1OO0lBQ25CLFlBQVlPLEtBQUssQ0FBRTtRQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0E7SUFDZjtJQUVBQyxnQkFBZ0JDLFFBQVEsRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0Q7SUFBVztJQUU5REUsMkJBQTJCRixRQUFRLEVBQUU7UUFBRVIsZ0JBQWdCLElBQUksQ0FBQ00sS0FBSyxFQUFFRTtJQUFXO0lBRTlFRyw0QkFBNEJILFFBQVEsRUFBRTtRQUFFUCxpQkFBaUIsSUFBSSxDQUFDSyxLQUFLLEVBQUVFO0lBQVc7SUFFaEZJLFFBQVFDLFlBQVksRUFBRTtRQUNwQkEsYUFBYUYsMkJBQTJCLENBQUMsQ0FBQ0c7WUFDeEMsTUFBTUMsVUFBVUQsWUFBWUUsaUJBQWlCLENBQUMsSUFBSSxHQUFHLEdBQUc7WUFFeEQsSUFBSSxDQUFDRCxTQUFTO2dCQUNaLElBQUksQ0FBQ1QsS0FBSyxDQUFDTSxPQUFPLENBQUNFO1lBQ3JCO1FBQ0Y7SUFDRjtJQUVBRyxNQUFNQyxTQUFTLEVBQUVDLE1BQU0sRUFBRTtRQUN2QixNQUFNQyxrQkFBa0IsSUFBSSxDQUFDZCxLQUFLLENBQUNlLE1BQU0sQ0FBQyxDQUFDRCxpQkFBaUJOO1lBQ3BELE1BQU1RLGlCQUFpQlIsWUFBWUcsS0FBSyxDQUFDRTtZQUV6Q0MsbUJBQW1CRTtZQUVuQixPQUFPRjtRQUNULEdBQUdHLHVCQUFZLEdBQ2ZDLE1BQU0sQUFBQ04sY0FBYyxPQUNiRSxrQkFDRSxHQUFHRCxPQUFPLENBQUMsRUFBRUQsVUFBVTtBQUMzQyxFQUFFRSxrQkFBa0JELE9BQU87O0FBRTNCLENBQUM7UUFFRyxPQUFPSztJQUNUO0lBRUEsT0FBT0Msa0JBQWtCQyxJQUFJLEVBQUVDLE1BQU0sRUFBRTtRQUNyQyxNQUFNQyxtQkFBbUJ6QixpQkFBaUIwQixPQUFPLENBQUNILE9BQzVDcEIsUUFBUXNCLGlCQUFpQkUsR0FBRyxDQUFDLENBQUNDO1lBQzVCLE1BQU1MLE9BQU9LLGlCQUNQakIsY0FBY2tCLG9CQUFXLENBQUNQLGlCQUFpQixDQUFDQyxNQUFNQztZQUV4RCxPQUFPYjtRQUNULElBQ0FELGVBQWUsSUFBSWQsYUFBYU87UUFFdEMsT0FBT087SUFDVDtBQUNGIn0=