"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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
var propertyQuery = _occamDom.Query.fromExpression("/*/property"), expressionQuery = _occamDom.Query.fromExpression("/*/expression");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(property, expression) {
        _classCallCheck(this, Declaration);
        this.property = property;
        this.expression = expression;
    }
    _createClass(Declaration, [
        {
            key: "getProperty",
            value: function getProperty() {
                return this.property;
            }
        },
        {
            key: "getExpression",
            value: function getExpression() {
                return this.expression;
            }
        },
        {
            key: "checkMatches",
            value: function checkMatches(declarations) {
                var _this = this;
                var matches = declarations.some(function(declaration) {
                    var property = declaration.getProperty(), propertiesMatch = property === _this.property;
                    if (propertiesMatch) {
                        return true;
                    }
                });
                return matches;
            }
        },
        {
            key: "asCSS",
            value: function asCSS(indent, last) {
                var css = last ? "".concat(indent).concat(this.property, ": ").concat(this.expression, ";") : "".concat(indent).concat(this.property, ": ").concat(this.expression, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var propertyContent = (0, _content).contentFromQueryNodeAndTokens(propertyQuery, node, tokens), expressionContent = (0, _content).contentFromQueryNodeAndTokens(expressionQuery, node, tokens), property = propertyContent, expression = expressionContent, declaration = new Declaration(property, expression);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();
exports.default = Declaration;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByb3BlcnR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3Byb3BlcnR5XCIpLFxuICAgICAgZXhwcmVzc2lvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGNoZWNrTWF0Y2hlcyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTWF0Y2ggPSAocHJvcGVydHkgPT09IHRoaXMucHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydGllc01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQsIGxhc3QpIHtcbiAgICBjb25zdCBjc3MgPSBsYXN0ID9cbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259O2AgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufTtcXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcm9wZXJ0eVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGV4cHJlc3Npb25Db250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoZXhwcmVzc2lvblF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHByb3BlcnR5LCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInByb3BlcnR5UXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb25RdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJleHByZXNzaW9uIiwiZ2V0UHJvcGVydHkiLCJnZXRFeHByZXNzaW9uIiwiY2hlY2tNYXRjaGVzIiwiZGVjbGFyYXRpb25zIiwibWF0Y2hlcyIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInByb3BlcnRpZXNNYXRjaCIsImFzQ1NTIiwiaW5kZW50IiwibGFzdCIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5Q29udGVudCIsImV4cHJlc3Npb25Db250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQVcsQ0FBWCxTQUFXO0FBRWEsR0FBc0IsQ0FBdEIsUUFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBFLEdBQUssQ0FBQ0EsYUFBYSxHQUpHLFNBQVcsT0FJTEMsY0FBYyxDQUFDLENBQWEsZUFDbERDLGVBQWUsR0FMQyxTQUFXLE9BS0hELGNBQWMsQ0FBQyxDQUFlO0lBRXZDRSxXQUFXLGlCQUFqQixRQUFRO2FBQUZBLFdBQVcsQ0FDbEJDLFFBQVEsRUFBRUMsVUFBVTs7UUFDOUIsSUFBSSxDQUFDRCxRQUFRLEdBQUdBLFFBQVE7UUFDeEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7Ozs7WUFHOUJDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDRixRQUFRO1lBQ3RCLENBQUM7OztZQUVERyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQ0YsVUFBVTtZQUN4QixDQUFDOzs7WUFFREcsR0FBWSxFQUFaQSxDQUFZO21CQUFaQSxRQUFRLENBQVJBLFlBQVksQ0FBQ0MsWUFBWSxFQUFFLENBQUM7O2dCQUMxQixHQUFLLENBQUNDLE9BQU8sR0FBR0QsWUFBWSxDQUFDRSxJQUFJLENBQUMsUUFBUSxDQUFQQyxXQUFXLEVBQUssQ0FBQztvQkFDbEQsR0FBSyxDQUFDUixRQUFRLEdBQUdRLFdBQVcsQ0FBQ04sV0FBVyxJQUNsQ08sZUFBZSxHQUFJVCxRQUFRLFdBQVVBLFFBQVE7b0JBRW5ELEVBQUUsRUFBRVMsZUFBZSxFQUFFLENBQUM7d0JBQ3BCLE1BQU0sQ0FBQyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxNQUFNLENBQUNILE9BQU87WUFDaEIsQ0FBQzs7O1lBRURJLEdBQUssRUFBTEEsQ0FBSzttQkFBTEEsUUFBUSxDQUFSQSxLQUFLLENBQUNDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQ0MsR0FBRyxHQUFHRCxJQUFJLEdBQ0gsQ0FBQSxFQUFXLE1BQWEsQ0FBdEJELE1BQU0sRUFBcUIsTUFBZSxDQUFqQyxJQUFJLENBQUNYLFFBQVEsRUFBQyxDQUFFLEtBQWtCLE1BQUMsQ0FBakIsSUFBSSxDQUFDQyxVQUFVLEVBQUMsQ0FBQyxNQUM1QyxDQUFBLEVBQVcsTUFBYSxDQUF0QlUsTUFBTSxFQUFxQixNQUFlLENBQWpDLElBQUksQ0FBQ1gsUUFBUSxFQUFDLENBQUUsS0FBa0IsTUFBRyxDQUFuQixJQUFJLENBQUNDLFVBQVUsRUFBQyxDQUFHO2dCQUUvRCxNQUFNLENBQUNZLEdBQUc7WUFDWixDQUFDOzs7O1lBRU1DLEdBQWlCLEVBQWpCQSxDQUFpQjttQkFBeEIsUUFBUSxDQUFEQSxpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDQyxlQUFlLE9BekNxQixRQUFzQixnQ0F5Q1ZyQixhQUFhLEVBQUVtQixJQUFJLEVBQUVDLE1BQU0sR0FDM0VFLGlCQUFpQixPQTFDbUIsUUFBc0IsZ0NBMENScEIsZUFBZSxFQUFFaUIsSUFBSSxFQUFFQyxNQUFNLEdBQy9FaEIsUUFBUSxHQUFHaUIsZUFBZSxFQUMxQmhCLFVBQVUsR0FBR2lCLGlCQUFpQixFQUM5QlYsV0FBVyxHQUFHLEdBQUcsQ0FBQ1QsV0FBVyxDQUFDQyxRQUFRLEVBQUVDLFVBQVU7Z0JBRXhELE1BQU0sQ0FBQ08sV0FBVztZQUNwQixDQUFDOzs7OztrQkEzQ2tCVCxXQUFXIn0=