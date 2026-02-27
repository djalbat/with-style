"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Media;
    }
});
const _occamquery = require("occam-query");
const _ruleSets = /*#__PURE__*/ _interop_require_default(require("./ruleSets"));
const _declarations = /*#__PURE__*/ _interop_require_default(require("./declarations"));
const _string = require("../utilities/string");
const _constants = require("../constants");
const _content = require("../utilities/content");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const queriesQuery = _occamquery.Query.fromExpressionString("/media/mediaQueries"); ///
class Media {
    constructor(declarations, ruleSets, queries){
        this.declarations = declarations;
        this.ruleSets = ruleSets;
        this.queries = queries;
    }
    getDeclarations() {
        return this.declarations;
    }
    getRuleSets() {
        return this.ruleSets;
    }
    getQueries() {
        return this.queries;
    }
    asCSS(className, indent) {
        indent = indent + _constants.TWO_SPACES;
        let css = _constants.EMPTY_STRING;
        const ruleSetsCSS = this.ruleSets.asCSS(className, indent), declarationsCSS = this.declarations.asCSS(className, indent);
        let ruleSetsDeclarationsCSS = `${declarationsCSS}${ruleSetsCSS}`;
        if (ruleSetsDeclarationsCSS !== _constants.EMPTY_STRING) {
            ruleSetsDeclarationsCSS = (0, _string.trim)(ruleSetsDeclarationsCSS);
            css = `@media ${this.queries} {
${ruleSetsDeclarationsCSS}}

`;
        }
        return css;
    }
    static fromNodeAndTokens(node, tokens) {
        const declarations = _declarations.default.fromNodeAndTokens(node, tokens), ruleSets = _ruleSets.default.fromNodeAndTokens(node, tokens), queries = queriesFromNodeAndTokens(node, tokens), media = new Media(declarations, ruleSets, queries);
        return media;
    }
}
function queriesFromNodeAndTokens(node, tokens) {
    const queriesNodeContent = (0, _content.contentFromQueryNodeAndTokens)(queriesQuery, node, tokens), queries = `${queriesNodeContent}`;
    return queries;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9tZWRpYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IFJ1bGVTZXRzIGZyb20gXCIuL3J1bGVTZXRzXCI7XG5pbXBvcnQgRGVjbGFyYXRpb25zIGZyb20gXCIuL2RlY2xhcmF0aW9uc1wiO1xuXG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IFRXT19TUEFDRVMsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHF1ZXJpZXNRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uU3RyaW5nKFwiL21lZGlhL21lZGlhUXVlcmllc1wiKTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcykge1xuICAgIHRoaXMuZGVjbGFyYXRpb25zID0gZGVjbGFyYXRpb25zO1xuICAgIHRoaXMucnVsZVNldHMgPSBydWxlU2V0cztcbiAgICB0aGlzLnF1ZXJpZXMgPSBxdWVyaWVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyYXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmF0aW9ucztcbiAgfVxuXG4gIGdldFJ1bGVTZXRzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVTZXRzO1xuICB9XG5cbiAgZ2V0UXVlcmllcygpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyaWVzO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBpbmRlbnQgPSBpbmRlbnQgKyBUV09fU1BBQ0VTO1xuXG4gICAgbGV0IGNzcyA9IEVNUFRZX1NUUklORztcblxuICAgIGNvbnN0IHJ1bGVTZXRzQ1NTID0gdGhpcy5ydWxlU2V0cy5hc0NTUyhjbGFzc05hbWUsIGluZGVudCksXG4gICAgICAgICAgZGVjbGFyYXRpb25zQ1NTID0gdGhpcy5kZWNsYXJhdGlvbnMuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgbGV0IHJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTID0gYCR7ZGVjbGFyYXRpb25zQ1NTfSR7cnVsZVNldHNDU1N9YDtcblxuICAgIGlmIChydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyAhPT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICBydWxlU2V0c0RlY2xhcmF0aW9uc0NTUyA9IHRyaW0ocnVsZVNldHNEZWNsYXJhdGlvbnNDU1MpO1xuXG4gICAgICBjc3MgPSBgQG1lZGlhICR7dGhpcy5xdWVyaWVzfSB7XG4ke3J1bGVTZXRzRGVjbGFyYXRpb25zQ1NTfX1cblxuYDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGRlY2xhcmF0aW9ucyA9IERlY2xhcmF0aW9ucy5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHJ1bGVTZXRzID0gUnVsZVNldHMuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBxdWVyaWVzID0gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2VucyksXG4gICAgICAgICAgbWVkaWEgPSBuZXcgTWVkaWEoZGVjbGFyYXRpb25zLCBydWxlU2V0cywgcXVlcmllcyk7XG5cbiAgICByZXR1cm4gbWVkaWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBjb25zdCBxdWVyaWVzTm9kZUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhxdWVyaWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgIHF1ZXJpZXMgPSBgJHtxdWVyaWVzTm9kZUNvbnRlbnR9YDtcblxuICByZXR1cm4gcXVlcmllcztcbn1cbiJdLCJuYW1lcyI6WyJNZWRpYSIsInF1ZXJpZXNRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb25TdHJpbmciLCJkZWNsYXJhdGlvbnMiLCJydWxlU2V0cyIsInF1ZXJpZXMiLCJnZXREZWNsYXJhdGlvbnMiLCJnZXRSdWxlU2V0cyIsImdldFF1ZXJpZXMiLCJhc0NTUyIsImNsYXNzTmFtZSIsImluZGVudCIsIlRXT19TUEFDRVMiLCJjc3MiLCJFTVBUWV9TVFJJTkciLCJydWxlU2V0c0NTUyIsImRlY2xhcmF0aW9uc0NTUyIsInJ1bGVTZXRzRGVjbGFyYXRpb25zQ1NTIiwidHJpbSIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsIkRlY2xhcmF0aW9ucyIsIlJ1bGVTZXRzIiwicXVlcmllc0Zyb21Ob2RlQW5kVG9rZW5zIiwibWVkaWEiLCJxdWVyaWVzTm9kZUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFxQkE7Ozs0QkFYQztpRUFFRDtxRUFDSTt3QkFFSjsyQkFDb0I7eUJBQ0s7Ozs7OztBQUU5QyxNQUFNQyxlQUFlQyxpQkFBSyxDQUFDQyxvQkFBb0IsQ0FBQyx3QkFBd0IsR0FBRztBQUU1RCxNQUFNSDtJQUNuQixZQUFZSSxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxDQUFFO1FBQzNDLElBQUksQ0FBQ0YsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0gsWUFBWTtJQUMxQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLE1BQU1DLFNBQVMsRUFBRUMsTUFBTSxFQUFFO1FBQ3ZCQSxTQUFTQSxTQUFTQyxxQkFBVTtRQUU1QixJQUFJQyxNQUFNQyx1QkFBWTtRQUV0QixNQUFNQyxjQUFjLElBQUksQ0FBQ1gsUUFBUSxDQUFDSyxLQUFLLENBQUNDLFdBQVdDLFNBQzdDSyxrQkFBa0IsSUFBSSxDQUFDYixZQUFZLENBQUNNLEtBQUssQ0FBQ0MsV0FBV0M7UUFFM0QsSUFBSU0sMEJBQTBCLEdBQUdELGtCQUFrQkQsYUFBYTtRQUVoRSxJQUFJRSw0QkFBNEJILHVCQUFZLEVBQUU7WUFDNUNHLDBCQUEwQkMsSUFBQUEsWUFBSSxFQUFDRDtZQUUvQkosTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNSLE9BQU8sQ0FBQztBQUNuQyxFQUFFWSx3QkFBd0I7O0FBRTFCLENBQUM7UUFDRztRQUVBLE9BQU9KO0lBQ1Q7SUFFQSxPQUFPTSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTSxFQUFFO1FBQ3JDLE1BQU1sQixlQUFlbUIscUJBQVksQ0FBQ0gsaUJBQWlCLENBQUNDLE1BQU1DLFNBQ3BEakIsV0FBV21CLGlCQUFRLENBQUNKLGlCQUFpQixDQUFDQyxNQUFNQyxTQUM1Q2hCLFVBQVVtQix5QkFBeUJKLE1BQU1DLFNBQ3pDSSxRQUFRLElBQUkxQixNQUFNSSxjQUFjQyxVQUFVQztRQUVoRCxPQUFPb0I7SUFDVDtBQUNGO0FBRUEsU0FBU0QseUJBQXlCSixJQUFJLEVBQUVDLE1BQU07SUFDNUMsTUFBTUsscUJBQXFCQyxJQUFBQSxzQ0FBNkIsRUFBQzNCLGNBQWNvQixNQUFNQyxTQUN2RWhCLFVBQVUsR0FBR3FCLG9CQUFvQjtJQUV2QyxPQUFPckI7QUFDVCJ9