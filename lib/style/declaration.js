"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Declaration;
    }
});
var _occamquery = require("occam-query");
var _constants = require("../constants");
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
var importantQuery = _occamquery.Query.fromExpression("/*/important"), propertyNameQuery = _occamquery.Query.fromExpression("/*/propertyName"), propertyValuesQuery = _occamquery.Query.fromExpression("/*/propertyValues");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(propertyValues, propertyName, important) {
        _class_call_check(this, Declaration);
        this.propertyValues = propertyValues;
        this.propertyName = propertyName;
        this.important = important;
    }
    _create_class(Declaration, [
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
                var matches = declarations.someDeclaration(function(declaration) {
                    var matches = _this.matchDeclaration(declaration);
                    if (matches) {
                        return true;
                    }
                });
                return matches;
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
                var propertyValuesContent = (0, _content.contentFromQueryNodeAndTokens)(propertyValuesQuery, node, tokens), propertyNameContent = (0, _content.contentFromQueryNodeAndTokens)(propertyNameQuery, node, tokens), importantContent = (0, _content.contentFromQueryNodeAndTokens)(importantQuery, node, tokens), propertyValues = propertyValuesContent, propertyName = propertyNameContent, important = importantContent === null ? _constants.EMPTY_STRING : " ".concat(importantContent), declaration = new Declaration(propertyValues, propertyName, important);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBUV09fU1BBQ0VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgaW1wb3J0YW50UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2ltcG9ydGFudFwiKSxcbiAgICAgIHByb3BlcnR5TmFtZVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eU5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVZhbHVlc1F1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVZhbHVlc1wiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpIHtcbiAgICB0aGlzLnByb3BlcnR5VmFsdWVzID0gcHJvcGVydHlWYWx1ZXM7XG4gICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnQ7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVZhbHVlcztcbiAgfVxuXG4gIGdldFByb3BlcnR5TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eU5hbWU7XG4gIH1cblxuICBnZXRJbXBvcnRhbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0YW50O1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0aGlzLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hEZWNsYXJhdGlvbihkZWNsYXJhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7IC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaERlY2xhcmF0aW9ucyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWVEZWNsYXJhdGlvbigoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0aGlzLm1hdGNoRGVjbGFyYXRpb24oZGVjbGFyYXRpb24pO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50KSB7XG4gICAgaW5kZW50ID0gaW5kZW50ICsgVFdPX1NQQUNFUztcblxuICAgIGNvbnN0IGNzcyA9IGAke2luZGVudH0ke3RoaXMucHJvcGVydHlOYW1lfTogJHt0aGlzLnByb3BlcnR5VmFsdWVzfSR7dGhpcy5pbXBvcnRhbnR9O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5VmFsdWVzQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5VmFsdWVzUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJvcGVydHlOYW1lQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5TmFtZVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGltcG9ydGFudENvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhpbXBvcnRhbnRRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eVZhbHVlcyA9IHByb3BlcnR5VmFsdWVzQ29udGVudCwgLy8vXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lQ29udGVudCwgLy8vXG4gICAgICAgICAgaW1wb3J0YW50ID0gKGltcG9ydGFudENvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgYCAke2ltcG9ydGFudENvbnRlbnR9YCxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eVZhbHVlcywgcHJvcGVydHlOYW1lLCBpbXBvcnRhbnQpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGVjbGFyYXRpb24iLCJpbXBvcnRhbnRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJwcm9wZXJ0eU5hbWVRdWVyeSIsInByb3BlcnR5VmFsdWVzUXVlcnkiLCJwcm9wZXJ0eVZhbHVlcyIsInByb3BlcnR5TmFtZSIsImltcG9ydGFudCIsImdldFByb3BlcnR5VmFsdWVzIiwiZ2V0UHJvcGVydHlOYW1lIiwiZ2V0SW1wb3J0YW50IiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJtYXRjaGVzIiwibWF0Y2hEZWNsYXJhdGlvbiIsImRlY2xhcmF0aW9uIiwibWF0Y2hEZWNsYXJhdGlvbnMiLCJkZWNsYXJhdGlvbnMiLCJzb21lRGVjbGFyYXRpb24iLCJhc0NTUyIsImluZGVudCIsIlRXT19TUEFDRVMiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eVZhbHVlc0NvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsInByb3BlcnR5TmFtZUNvbnRlbnQiLCJpbXBvcnRhbnRDb250ZW50IiwiRU1QVFlfU1RSSU5HIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzBCQVRDO3lCQUVtQjt1QkFDSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsSUFBTUMsaUJBQWlCQyxpQkFBSyxDQUFDQyxjQUFjLENBQUMsaUJBQ3RDQyxvQkFBb0JGLGlCQUFLLENBQUNDLGNBQWMsQ0FBQyxvQkFDekNFLHNCQUFzQkgsaUJBQUssQ0FBQ0MsY0FBYyxDQUFDO0FBRWxDLElBQUEsQUFBTUgsNEJBQUQsQUFBTDthQUFNQSxZQUNQTSxjQUFjLEVBQUVDLFlBQVksRUFBRUMsU0FBUztnQ0FEaENSO1FBRWpCLElBQUksQ0FBQ00sY0FBYyxHQUFHQTtRQUN0QixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQVI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGNBQWM7WUFDNUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFlBQVk7WUFDMUI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCTCxZQUFZO2dCQUM1QixJQUFNTSxVQUFXLElBQUksQ0FBQ04sWUFBWSxLQUFLQTtnQkFFdkMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVc7Z0JBQzFCLElBQU1SLGVBQWVRLFlBQVlMLGVBQWUsSUFDMUNHLFVBQVUsSUFBSSxDQUFDRCxpQkFBaUIsQ0FBQ0wsZUFBZSxHQUFHO2dCQUV6RCxPQUFPTTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsWUFBWTs7Z0JBQzVCLElBQU1KLFVBQVVJLGFBQWFDLGVBQWUsQ0FBQyxTQUFDSDtvQkFDNUMsSUFBTUYsVUFBVSxNQUFLQyxnQkFBZ0IsQ0FBQ0M7b0JBRXRDLElBQUlGLFNBQVM7d0JBQ1gsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLE1BQU07Z0JBQ1ZBLFNBQVNBLFNBQVNDLHFCQUFVO2dCQUU1QixJQUFNQyxNQUFNLEFBQUMsR0FBVyxPQUFURixRQUErQixPQUF0QixJQUFJLENBQUNiLFlBQVksRUFBQyxNQUEwQixPQUF0QixJQUFJLENBQUNELGNBQWMsRUFBa0IsT0FBZixJQUFJLENBQUNFLFNBQVMsRUFBQztnQkFFbkYsT0FBT2M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLElBQUksRUFBRUMsTUFBTTtnQkFDbkMsSUFBTUMsd0JBQXdCQyxJQUFBQSxzQ0FBNkIsRUFBQ3RCLHFCQUFxQm1CLE1BQU1DLFNBQ2pGRyxzQkFBc0JELElBQUFBLHNDQUE2QixFQUFDdkIsbUJBQW1Cb0IsTUFBTUMsU0FDN0VJLG1CQUFtQkYsSUFBQUEsc0NBQTZCLEVBQUMxQixnQkFBZ0J1QixNQUFNQyxTQUN2RW5CLGlCQUFpQm9CLHVCQUNqQm5CLGVBQWVxQixxQkFDZnBCLFlBQVksQUFBQ3FCLHFCQUFxQixPQUNwQkMsdUJBQVksR0FDWCxBQUFDLElBQW9CLE9BQWpCRCxtQkFDbkJkLGNBQWMsSUE3REhmLFlBNkRtQk0sZ0JBQWdCQyxjQUFjQztnQkFFbEUsT0FBT087WUFDVDs7O1dBaEVtQmYifQ==