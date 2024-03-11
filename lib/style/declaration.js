"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamQuery = require("occam-query");
var _constants = require("../constants");
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
var importantQuery = _occamQuery.Query.fromExpression("/*/important"), propertyNameQuery = _occamQuery.Query.fromExpression("/*/propertyName"), propertyValuesQuery = _occamQuery.Query.fromExpression("/*/propertyValues");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(propertyValues, propertyName, important) {
        _classCallCheck(this, Declaration);
        this.propertyValues = propertyValues;
        this.propertyName = propertyName;
        this.important = important;
    }
    _createClass(Declaration, [
        {
            key: "getPropertyValues",
            value: function getPropertyValues() {
                return this.propertyValues;
            }
        },
        {
            key: "getPropertyName",
            value: function getPropertyName() {
                return this.propertyName;
            }
        },
        {
            key: "getImportant",
            value: function getImportant() {
                return this.important;
            }
        },
        {
            key: "matchPropertyName",
            value: function matchPropertyName(propertyName) {
                var matches = this.propertyName === propertyName;
                return matches;
            }
        },
        {
            key: "matchDeclaration",
            value: function matchDeclaration(declaration) {
                var propertyName = declaration.getPropertyName(), matches = this.matchPropertyName(propertyName); ///
                return matches;
            }
        },
        {
            key: "matchDeclarations",
            value: function matchDeclarations(declarations) {
                var _this = this;
                var matches1 = declarations.someDeclaration(function(declaration) {
                    var matches = _this.matchDeclaration(declaration);
                    if (matches) {
                        return true;
                    }
                });
                return matches1;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent) {
                indent = indent + _constants.TWO_SPACES;
                var css = "".concat(indent).concat(this.propertyName, ": ").concat(this.propertyValues).concat(this.important, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var propertyValuesContent = (0, _content).contentFromQueryNodeAndTokens(propertyValuesQuery, node, tokens), propertyNameContent = (0, _content).contentFromQueryNodeAndTokens(propertyNameQuery, node, tokens), importantContent = (0, _content).contentFromQueryNodeAndTokens(importantQuery, node, tokens), propertyValues = propertyValuesContent, propertyName = propertyNameContent, important = importantContent === null ? _constants.EMPTY_STRING : " ".concat(importantContent), declaration = new Declaration(propertyValues, propertyName, important);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();
exports.default = Declaration;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBUV09fU1BBQ0VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgaW1wb3J0YW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2ltcG9ydGFudFwiKSxcbiAgICAgIHByb3BlcnR5TmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eU5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVZhbHVlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpIHtcbiAgICB0aGlzLnByb3BlcnR5VmFsdWVzID0gcHJvcGVydHlWYWx1ZXM7XG4gICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnQ7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVZhbHVlcztcbiAgfVxuXG4gIGdldFByb3BlcnR5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBnZXRJbXBvcnRhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWVEZWNsYXJhdGlvbigoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLm1hdGNoRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGNzcyA9IGAke2luZGVudH0ke3RoaXMucHJvcGVydHlOYW1lfTogJHt0aGlzLnByb3BlcnR5VmFsdWVzfSR7dGhpcy5pbXBvcnRhbnR9O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5VmFsdWVzQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5VmFsdWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJvcGVydHlOYW1lQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5TmFtZVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGltcG9ydGFudENvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhpbXBvcnRhbnRRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlcyA9IHByb3BlcnR5VmFsdWVzQ29udGVudCwgLy8vXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lQ29udGVudCwgLy8vXG4gICAgICAgICAgaW1wb3J0YW50ID0gKGltcG9ydGFudENvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke2ltcG9ydGFudENvbnRlbnR9YCxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImltcG9ydGFudFF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsInByb3BlcnR5TmFtZVF1ZXJ5IiwicHJvcGVydHlWYWx1ZXNRdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHlWYWx1ZXMiLCJwcm9wZXJ0eU5hbWUiLCJpbXBvcnRhbnQiLCJnZXRQcm9wZXJ0eVZhbHVlcyIsImdldFByb3BlcnR5TmFtZSIsImdldEltcG9ydGFudCIsIm1hdGNoUHJvcGVydHlOYW1lIiwibWF0Y2hlcyIsIm1hdGNoRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbiIsIm1hdGNoRGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25zIiwic29tZURlY2xhcmF0aW9uIiwiYXNDU1MiLCJpbmRlbnQiLCJUV09fU1BBQ0VTIiwiY3NzIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJub2RlIiwidG9rZW5zIiwicHJvcGVydHlWYWx1ZXNDb250ZW50IiwiY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMiLCJwcm9wZXJ0eU5hbWVDb250ZW50IiwiaW1wb3J0YW50Q29udGVudCIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUVNLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNULElBQUEsUUFBc0IsV0FBdEIsc0JBQXNCLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLElBQU1BLGNBQWMsR0FBR0MsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFDckRDLGlCQUFpQixHQUFHRixXQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEVBQzNERSxtQkFBbUIsR0FBR0gsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxBQUFDO0FBRXZELElBQUEsQUFBTUcsV0FBVyxpQkFBakI7YUFBTUEsV0FBVyxDQUNsQkMsY0FBYyxFQUFFQyxZQUFZLEVBQUVDLFNBQVM7O1FBQ2pELElBQUksQ0FBQ0YsY0FBYyxHQUFHQSxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDQyxZQUFZLEdBQUdBLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUNDLFNBQVMsR0FBR0EsU0FBUyxDQUFDOzs7O1lBRzdCQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUFqQkEsU0FBQUEsaUJBQWlCLEdBQUc7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDSCxjQUFjLENBQUM7YUFDNUI7OztZQUVESSxHQUFlLEVBQWZBLGlCQUFlO21CQUFmQSxTQUFBQSxlQUFlLEdBQUc7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDSCxZQUFZLENBQUM7YUFDMUI7OztZQUVESSxHQUFZLEVBQVpBLGNB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