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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwicHJvcGVydHlRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvblF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvciIsInByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImdldFByb3BlcnR5IiwiZ2V0RXhwcmVzc2lvbiIsImNoZWNrTWF0Y2hlcyIsImRlY2xhcmF0aW9ucyIsIm1hdGNoZXMiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJwcm9wZXJ0aWVzTWF0Y2giLCJhc0NTUyIsImluZGVudCIsImxhc3QiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eUNvbnRlbnQiLCJleHByZXNzaW9uQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVhLEdBQXNCLENBQXRCLFFBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxHQUFLLENBQUMsYUFBYSxHQUpHLFNBQVcsT0FJTCxjQUFjLENBQUMsQ0FBYSxlQUNsRCxlQUFlLEdBTEMsU0FBVyxPQUtILGNBQWMsQ0FBQyxDQUFlO0lBRXZDLFdBQVcsaUJBQWpCLFFBQVE7YUFBRixXQUFXLENBQ2xCLFFBQVEsRUFBRSxVQUFVOzhCQURiLFdBQVc7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7aUJBSFgsV0FBVzs7WUFNOUIsR0FBVyxFQUFYLENBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFhLEVBQWIsQ0FBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3hCLENBQUM7OztZQUVELEdBQVksRUFBWixDQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7O2dCQUMxQixHQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFQLFdBQVcsRUFBSyxDQUFDO29CQUNsRCxHQUFLLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxXQUFXLElBQ2xDLGVBQWUsR0FBSSxRQUFRLFdBQVUsUUFBUTtvQkFFbkQsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDO3dCQUNwQixNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBSyxFQUFMLENBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUNILENBQUEsRUFBVyxNQUFhLENBQXRCLE1BQU0sRUFBcUIsTUFBZSxDQUFqQyxJQUFJLENBQUMsUUFBUSxFQUFDLENBQUUsS0FBa0IsTUFBQyxDQUFqQixJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsTUFDNUMsQ0FBQSxFQUFXLE1BQWEsQ0FBdEIsTUFBTSxFQUFxQixNQUFlLENBQWpDLElBQUksQ0FBQyxRQUFRLEVBQUMsQ0FBRSxLQUFrQixNQUFHLENBQW5CLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBRztnQkFFL0QsTUFBTSxDQUFDLEdBQUc7WUFDWixDQUFDOzs7O1lBRU0sR0FBaUIsRUFBakIsQ0FBaUI7bUJBQXhCLFFBQVEsQ0FBRCxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLEdBQUssQ0FBQyxlQUFlLE9BekNxQixRQUFzQixnQ0F5Q1YsYUFBYSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQzNFLGlCQUFpQixPQTFDbUIsUUFBc0IsZ0NBMENSLGVBQWUsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUMvRSxRQUFRLEdBQUcsZUFBZSxFQUMxQixVQUFVLEdBQUcsaUJBQWlCLEVBQzlCLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxVQUFVO2dCQUV4RCxNQUFNLENBQUMsV0FBVztZQUNwQixDQUFDOzs7V0EzQ2tCLFdBQVc7O2tCQUFYLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByb3BlcnR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3Byb3BlcnR5XCIpLFxuICAgICAgZXhwcmVzc2lvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGNoZWNrTWF0Y2hlcyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTWF0Y2ggPSAocHJvcGVydHkgPT09IHRoaXMucHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydGllc01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQsIGxhc3QpIHtcbiAgICBjb25zdCBjc3MgPSBsYXN0ID9cbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259O2AgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufTtcXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcm9wZXJ0eVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGV4cHJlc3Npb25Db250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoZXhwcmVzc2lvblF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHByb3BlcnR5LCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl19