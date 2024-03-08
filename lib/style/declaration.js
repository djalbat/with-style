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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgaW1wb3J0YW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2ltcG9ydGFudFwiKSxcbiAgICAgIHByb3BlcnR5TmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eU5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVZhbHVlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpIHtcbiAgICB0aGlzLnByb3BlcnR5VmFsdWVzID0gcHJvcGVydHlWYWx1ZXM7XG4gICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnQ7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVZhbHVlcztcbiAgfVxuXG4gIGdldE5hbWVQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBnZXRJbXBvcnRhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWVEZWNsYXJhdGlvbigoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLm1hdGNoRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50LCBsYXN0KSB7XG4gICAgY29uc3QgY3NzID0gbGFzdCA/XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5TmFtZX06ICR7dGhpcy5wcm9wZXJ0eVZhbHVlc30ke3RoaXMuaW1wb3J0YW50fTtgIDpcbiAgICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eU5hbWV9OiAke3RoaXMucHJvcGVydHlWYWx1ZXN9JHt0aGlzLmltcG9ydGFudH07XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcHJvcGVydHlWYWx1ZXNDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJvcGVydHlWYWx1ZXNRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWVDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJvcGVydHlOYW1lUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgaW1wb3J0YW50Q29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKGltcG9ydGFudFF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5VmFsdWVzID0gcHJvcGVydHlWYWx1ZXNDb250ZW50LCAvLy9cbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWVDb250ZW50LCAvLy9cbiAgICAgICAgICBpbXBvcnRhbnQgPSAoaW1wb3J0YW50Q29udGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBgICR7aW1wb3J0YW50Q29udGVudH1gLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHByb3BlcnR5VmFsdWVzLCBwcm9wZXJ0eU5hbWUsIGltcG9ydGFudCk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiaW1wb3J0YW50UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwicHJvcGVydHlOYW1lUXVlcnkiLCJwcm9wZXJ0eVZhbHVlc1F1ZXJ5IiwiRGVjbGFyYXRpb24iLCJwcm9wZXJ0eVZhbHVlcyIsInByb3BlcnR5TmFtZSIsImltcG9ydGFudCIsImdldFByb3BlcnR5VmFsdWVzIiwiZ2V0TmFtZVByb3BlcnR5IiwiZ2V0SW1wb3J0YW50IiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJtYXRjaGVzIiwibWF0Y2hEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwiZ2V0UHJvcGVydHlOYW1lIiwibWF0Y2hEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbnMiLCJzb21lRGVjbGFyYXRpb24iLCJhc0NTUyIsImluZGVudCIsImxhc3QiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eVZhbHVlc0NvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsInByb3BlcnR5TmFtZUNvbnRlbnQiLCJpbXBvcnRhbnRDb250ZW50IiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBRU4sSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0csSUFBQSxRQUFzQixXQUF0QixzQkFBc0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsY0FBYyxHQUFHQyxXQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQyxFQUNyREMsaUJBQWlCLEdBQUdGLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFDM0RFLG1CQUFtQixHQUFHSCxXQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEFBQUM7QUFFdkQsSUFBQSxBQUFNRyxXQUFXLGlCQUFqQjthQUFNQSxXQUFXLENBQ2xCQyxjQUFjLEVBQUVDLFlBQVksRUFBRUMsU0FBUzs7UUFDakQsSUFBSSxDQUFDRixjQUFjLEdBQUdBLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUNDLFlBQVksR0FBR0EsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTLENBQUM7Ozs7WUFHN0JDLEdBQWlCLEVBQWpCQSxtQkFBaUI7bUJBQWpCQSxTQUFBQSxpQkFBaUIsR0FBRztnQkFDbEIsT0FBTyxJQUFJLENBQUNILGNBQWMsQ0FBQzthQUM1Qjs7O1lBRURJLEdBQWUsRUFB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