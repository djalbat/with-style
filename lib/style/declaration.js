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
            key: "getNameProperty",
            value: function getNameProperty() {
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
                var matches1 = declarations.some(function(declaration) {
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
            value: function asCSS(indent, last) {
                var css = last ? "".concat(indent).concat(this.propertyName, ": ").concat(this.propertyValues).concat(this.important, ";") : "".concat(indent).concat(this.propertyName, ": ").concat(this.propertyValues).concat(this.important, ";\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgaW1wb3J0YW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2ltcG9ydGFudFwiKSxcbiAgICAgIHByb3BlcnR5TmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eU5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVZhbHVlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpIHtcbiAgICB0aGlzLnByb3BlcnR5VmFsdWVzID0gcHJvcGVydHlWYWx1ZXM7XG4gICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnQ7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVZhbHVlcztcbiAgfVxuXG4gIGdldE5hbWVQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBnZXRJbXBvcnRhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gdGhpcy5tYXRjaERlY2xhcmF0aW9uKGRlY2xhcmF0aW9uKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCwgbGFzdCkge1xuICAgIGNvbnN0IGNzcyA9IGxhc3QgP1xuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eU5hbWV9OiAke3RoaXMucHJvcGVydHlWYWx1ZXN9JHt0aGlzLmltcG9ydGFudH07YCA6XG4gICAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHlOYW1lfTogJHt0aGlzLnByb3BlcnR5VmFsdWVzfSR7dGhpcy5pbXBvcnRhbnR9O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5VmFsdWVzQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5VmFsdWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJvcGVydHlOYW1lQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5TmFtZVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGltcG9ydGFudENvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhpbXBvcnRhbnRRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlcyA9IHByb3BlcnR5VmFsdWVzQ29udGVudCwgLy8vXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lQ29udGVudCwgLy8vXG4gICAgICAgICAgaW1wb3J0YW50ID0gKGltcG9ydGFudENvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke2ltcG9ydGFudENvbnRlbnR9YCxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImltcG9ydGFudFF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsInByb3BlcnR5TmFtZVF1ZXJ5IiwicHJvcGVydHlWYWx1ZXNRdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHlWYWx1ZXMiLCJwcm9wZXJ0eU5hbWUiLCJpbXBvcnRhbnQiLCJnZXRQcm9wZXJ0eVZhbHVlcyIsImdldE5hbWVQcm9wZXJ0eSIsImdldEltcG9ydGFudCIsIm1hdGNoUHJvcGVydHlOYW1lIiwibWF0Y2hlcyIsIm1hdGNoRGVjbGFyYXRpb24iLCJkZWNsYXJhdGlvbiIsImdldFByb3BlcnR5TmFtZSIsIm1hdGNoRGVjbGFyYXRpb25zIiwiZGVjbGFyYXRpb25zIiwic29tZSIsImFzQ1NTIiwiaW5kZW50IiwibGFzdCIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5VmFsdWVzQ29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwicHJvcGVydHlOYW1lQ29udGVudCIsImltcG9ydGFudENvbnRlbnQiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFTixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDRyxJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxjQUFjLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQ3JEQyxpQkFBaUIsR0FBR0YsV0FBSyxNQUFBLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMzREUsbUJBQW1CLEdBQUdILFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQUFBQztBQUV2RCxJQUFBLEFBQU1HLFdBQVcsaUJBQWpCO2FBQU1BLFdBQVcsQ0FDbEJDLGNBQWMsRUFBRUMsWUFBWSxFQUFFQyxTQUFTOztRQUNqRCxJQUFJLENBQUNGLGNBQWMsR0FBR0EsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQ0MsWUFBWSxHQUFHQSxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDQyxTQUFTLEdBQUdBLFNBQVMsQ0FBQzs7OztZQUc3QkMsR0FBaUIsRUFBakJBLG1CQUFpQjttQkFBakJBLFNBQUFBLGlCQUFpQixHQUFHO2dCQUNsQixPQUFPLElBQUksQ0FBQ0gsY0FBYyxDQUFDO2FBQzVCOzs7WUFFREksR0FBZSxFQUFmQSxpQkFBZTttQkFBZkEsU0FBQUEs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