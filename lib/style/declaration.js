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
                var matches = declarations.some((function(declaration) {
                    var property = declaration.getProperty(), propertiesMatch = property === this.property;
                    if (propertiesMatch) {
                        return true;
                    }
                }).bind(this));
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByb3BlcnR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3Byb3BlcnR5XCIpLFxuICAgICAgZXhwcmVzc2lvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGNoZWNrTWF0Y2hlcyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTWF0Y2ggPSAocHJvcGVydHkgPT09IHRoaXMucHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydGllc01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQsIGxhc3QpIHtcbiAgICBjb25zdCBjc3MgPSBsYXN0ID9cbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259O2AgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufTtcXG5gO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcm9wZXJ0eVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIGV4cHJlc3Npb25Db250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMoZXhwcmVzc2lvblF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkNvbnRlbnQsIC8vL1xuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHByb3BlcnR5LCBleHByZXNzaW9uKTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBVyxDQUFYLFNBQVc7QUFFYSxHQUFzQixDQUF0QixRQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsR0FBSyxDQUFDLGFBQWEsR0FKRyxTQUFXLE9BSUwsY0FBYyxFQUFDLFdBQWEsSUFDbEQsZUFBZSxHQUxDLFNBQVcsT0FLSCxjQUFjLEVBQUMsYUFBZTtJQUV2QyxXQUFXO2FBQVgsV0FBVyxDQUNsQixRQUFRLEVBQUUsVUFBVTs4QkFEYixXQUFXO2FBRXZCLFFBQVEsR0FBRyxRQUFRO2FBQ25CLFVBQVUsR0FBRyxVQUFVOztpQkFIWCxXQUFXOztZQU05QixHQUFXLEdBQVgsV0FBVzs0QkFBWCxXQUFXLEdBQUcsQ0FBQzs0QkFDRCxRQUFRO1lBQ3RCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWEsR0FBRyxDQUFDOzRCQUNILFVBQVU7WUFDeEIsQ0FBQzs7O1lBRUQsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUMxQixHQUFLLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLFdBQUUsV0FBVyxFQUFLLENBQUM7b0JBQ2xELEdBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFdBQVcsSUFDbEMsZUFBZSxHQUFJLFFBQVEsVUFBVSxRQUFRO29CQUVuRCxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUM7K0JBQ2IsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7dUJBRU0sT0FBTztZQUNoQixDQUFDOzs7WUFFRCxHQUFLLEdBQUwsS0FBSzs0QkFBTCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNuQixHQUFLLENBQUMsR0FBRyxHQUFHLElBQUksTUFDUSxNQUFhLENBQXRCLE1BQU0sRUFBcUIsTUFBZSxNQUE1QixRQUFRLEdBQUMsRUFBRSxHQUFrQixNQUFDLE1BQVosVUFBVSxHQUFDLENBQUMsUUFDakMsTUFBYSxDQUF0QixNQUFNLEVBQXFCLE1BQWUsTUFBNUIsUUFBUSxHQUFDLEVBQUUsR0FBa0IsTUFBRyxNQUFkLFVBQVUsR0FBQyxHQUFHO3VCQUV4RCxHQUFHO1lBQ1osQ0FBQzs7OztZQUVNLEdBQWlCLEdBQWpCLGlCQUFpQjs0QkFBakIsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2dCQUN0QyxHQUFLLENBQUMsZUFBZSxPQXpDcUIsUUFBc0IsZ0NBeUNWLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUMzRSxpQkFBaUIsT0ExQ21CLFFBQXNCLGdDQTBDUixlQUFlLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FDL0UsUUFBUSxHQUFHLGVBQWUsRUFDMUIsVUFBVSxHQUFHLGlCQUFpQixFQUM5QixXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsVUFBVTt1QkFFakQsV0FBVztZQUNwQixDQUFDOzs7V0EzQ2tCLFdBQVc7O2tCQUFYLFdBQVcifQ==