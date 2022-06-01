"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamDom = require("occam-dom");
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
var priorityQuery = _occamDom.Query.fromExpression("/*/priority"), propertyQuery = _occamDom.Query.fromExpression("/*/property"), expressionQuery = _occamDom.Query.fromExpression("/*/expression");
var Declaration = /*#__PURE__*/ function() {
    function Declaration(property, expression, priority) {
        _classCallCheck(this, Declaration);
        this.property = property;
        this.expression = expression;
        this.priority = priority;
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
            key: "getPriority",
            value: function getPriority() {
                return this.priority;
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
                var css = last ? "".concat(indent).concat(this.property, ": ").concat(this.expression).concat(this.priority, ";") : "".concat(indent).concat(this.property, ": ").concat(this.expression).concat(this.priority, ";\n");
                return css;
            }
        }
    ], [
        {
            key: "fromNodeAndTokens",
            value: function fromNodeAndTokens(node, tokens) {
                var propertyContent = (0, _content).contentFromQueryNodeAndTokens(propertyQuery, node, tokens), expressionContent = (0, _content).contentFromQueryNodeAndTokens(expressionQuery, node, tokens), priorityContent = (0, _content).contentFromQueryNodeAndTokens(priorityQuery, node, tokens), property = propertyContent, expression = expressionContent, priority = priorityContent === null ? _constants.EMPTY_STRING : " ".concat(priorityContent), declaration = new Declaration(property, expression, priority);
                return declaration;
            }
        }
    ]);
    return Declaration;
}();
exports.default = Declaration;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByaW9yaXR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3ByaW9yaXR5XCIpLFxuICAgICAgcHJvcGVydHlRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcHJvcGVydHlcIiksXG4gICAgICBleHByZXNzaW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydHksIGV4cHJlc3Npb24sIHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGNoZWNrTWF0Y2hlcyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTWF0Y2ggPSAocHJvcGVydHkgPT09IHRoaXMucHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydGllc01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQsIGxhc3QpIHtcbiAgICBjb25zdCBjc3MgPSBsYXN0ID9cbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259JHt0aGlzLnByaW9yaXR5fTtgIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn0ke3RoaXMucHJpb3JpdHl9O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5Q29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5UXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZXhwcmVzc2lvbkNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhleHByZXNzaW9uUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJpb3JpdHlDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJpb3JpdHlRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5Q29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Db250ZW50LCAvLy9cbiAgICAgICAgICBwcmlvcml0eSA9IChwcmlvcml0eUNvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtwcmlvcml0eUNvbnRlbnR9YCxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eSwgZXhwcmVzc2lvbiwgcHJpb3JpdHkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpb3JpdHlRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJwcm9wZXJ0eVF1ZXJ5IiwiZXhwcmVzc2lvblF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJwcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJwcmlvcml0eSIsImdldFByb3BlcnR5IiwiZ2V0RXhwcmVzc2lvbiIsImdldFByaW9yaXR5IiwiY2hlY2tNYXRjaGVzIiwiZGVjbGFyYXRpb25zIiwibWF0Y2hlcyIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInByb3BlcnRpZXNNYXRjaCIsImFzQ1NTIiwiaW5kZW50IiwibGFzdCIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5Q29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwiZXhwcmVzc2lvbkNvbnRlbnQiLCJwcmlvcml0eUNvbnRlbnQiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFNBQVcsV0FBWCxXQUFXLENBQUE7QUFFSixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDRyxJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxhQUFhLEdBQUdDLFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ25EQyxhQUFhLEdBQUdGLFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ25ERSxlQUFlLEdBQUdILFNBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsZUFBZSxDQUFDLEFBQUM7QUFFL0MsSUFBQSxBQUFNRyxXQUFXLGlCQUFqQjthQUFNQSxXQUFXLENBQ2xCQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsUUFBUTs7UUFDeEMsSUFBSSxDQUFDRixRQUFRLEdBQUdBLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRLENBQUM7Ozs7WUFHM0JDLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRLENBQUM7YUFDdEI7OztZQUVESSxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRztnQkFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVSxDQUFDO2FBQ3hCOzs7WUFFREksR0FBVyxFQUFYQSxhQUFXO21CQUFYQSxTQUFBQSxXQUFXLEdBQUc7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVEsQ0FBQzthQUN0Qjs7O1lBRURJLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxDQUFDQyxZQUFZLEVBQUU7O2dCQUN6QixJQUFNQyxPQUFPLEdBQUdELFlBQVksQ0FBQ0UsSUFBSSxDQUFDLFNBQUNDLFdBQVcsRUFBSztvQkFDakQsSUFBTVYsUUFBUSxHQUFHVSxXQUFXLENBQUNQLFdBQVcsRUFBRSxFQUNwQ1EsZUFBZSxHQUFJWCxRQUFRLEtBQUssTUFBS0EsUUFBUSxBQUFDLEFBQUM7b0JBRXJELElBQUlXLGVBQWUsRUFBRTt3QkFDbkIsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxBQUFDO2dCQUVILE9BQU9ILE9BQU8sQ0FBQzthQUNoQjs7O1lBRURJLEdBQUssRUFBTEEsT0FBSzttQkFBTEEsU0FBQUEsS0FBSyxDQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBRTtnQkFDbEIsSUFBTUMsR0FBRyxHQUFHRCxJQUFJLEdBQ0osQUFBQyxFQUFBLENBQVcsTUFBYSxDQUF0QkQsTUFBTSxDQUFpQixDQUFJLE1BQWUsQ0FBakMsSUFBSSxDQUFDYixRQUFRLEVBQUMsSUFBRSxDQUFrQixDQUFFLE1BQWEsQ0FBL0IsSUFBSSxDQUFDQyxVQUFVLENBQWlCLENBQUEsTUFBQyxDQUFmLElBQUksQ0FBQ0MsUUFBUSxFQUFDLEdBQUMsQ0FBQyxHQUM5RCxBQUFDLEVBQUEsQ0FBVyxNQUFhLENBQXRCVyxNQUFNLENBQWlCLENBQUksTUFBZSxDQUFqQyxJQUFJLENBQUNiLFFBQVEsRUFBQyxJQUFFLENBQWtCLENBQUUsTUFBYSxDQUEvQixJQUFJLENBQUNDLFVBQVUsQ0FBaUIsQ0FBQSxNQUFHLENBQWpCLElBQUksQ0FBQ0MsUUFBUSxFQUFDLEtBQUcsQ0FBQyxBQUFDO2dCQUVqRixPQUFPYSxHQUFHLENBQUM7YUFDWjs7OztZQUVNQyxHQUFpQixFQUFqQkEsbUJBQWlCO21CQUF4QixTQUFPQSxpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFQyxNQUFNLEVBQUU7Z0JBQ3JDLElBQU1DLGVBQWUsR0FBR0MsQ0FBQUEsR0FBQUEsUUFBNkIsQUFBNkIsQ0FBQSw4QkFBN0IsQ0FBQ3ZCLGFBQWEsRUFBRW9CLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQzVFRyxpQkFBaUIsR0FBR0QsQ0FBQUEsR0FBQUEsUUFBNkIsQUFBK0IsQ0FBQSw4QkFBL0IsQ0FBQ3RCLGVBQWUsRUFBRW1CLElBQUksRUFBRUMsTUFBTSxDQUFDLEVBQ2hGSSxlQUFlLEdBQUdGLENBQUFBLEdBQUFBLFFBQTZCLEFBQTZCLENBQUEsOEJBQTdCLENBQUMxQixhQUFhLEVBQUV1QixJQUFJLEVBQUVDLE1BQU0sQ0FBQyxFQUM1RWxCLFFBQVEsR0FBR21CLGVBQWUsRUFDMUJsQixVQUFVLEdBQUdvQixpQkFBaUIsRUFDOUJuQixRQUFRLEdBQUcsQUFBQ29CLGVBQWUsS0FBSyxJQUFJLEdBQ3ZCQyxVQUFZLGFBQUEsR0FDWCxBQUFDLEdBQUMsQ0FBa0IsTUFBQSxDQUFoQkQsZUFBZSxDQUFFLEVBQ25DWixXQUFXLEdBQUcsSUFBSVgsV0FBVyxDQUFDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxDQUFDLEFBQUM7Z0JBRXBFLE9BQU9RLFdBQVcsQ0FBQzthQUNwQjs7OztDQUNGLEVBQUE7a0JBckRvQlgsV0FBVyJ9