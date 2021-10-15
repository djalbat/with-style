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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyJdLCJuYW1lcyI6WyJRdWVyeSIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwicHJvcGVydHlRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvblF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJjb25zdHJ1Y3RvciIsInByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImdldFByb3BlcnR5IiwiZ2V0RXhwcmVzc2lvbiIsImNoZWNrTWF0Y2hlcyIsImRlY2xhcmF0aW9ucyIsIm1hdGNoZXMiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJwcm9wZXJ0aWVzTWF0Y2giLCJhc0NTUyIsImluZGVudCIsImxhc3QiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eUNvbnRlbnQiLCJleHByZXNzaW9uQ29udGVudCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFXLENBQVgsU0FBVztBQUVhLEdBQXNCLENBQXRCLFFBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxHQUFLLENBQUMsYUFBYSxHQUpHLFNBQVcsT0FJTCxjQUFjLEVBQUMsV0FBYSxJQUNsRCxlQUFlLEdBTEMsU0FBVyxPQUtILGNBQWMsRUFBQyxhQUFlO0lBRXZDLFdBQVcsaUJBQWpCLFFBQVE7YUFBRixXQUFXLENBQ2xCLFFBQVEsRUFBRSxVQUFVOzhCQURiLFdBQVc7UUFFNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTs7aUJBSFgsV0FBVzs7WUFNOUIsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUN0QixDQUFDOzs7WUFFRCxHQUFhLEdBQWIsYUFBYTttQkFBYixRQUFRLENBQVIsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVO1lBQ3hCLENBQUM7OztZQUVELEdBQVksR0FBWixZQUFZO21CQUFaLFFBQVEsQ0FBUixZQUFZLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQzFCLEdBQUssQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBQyxRQUFRLENBQVAsV0FBVyxFQUFLLENBQUM7b0JBQ2xELEdBQUssQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFdBQVcsSUFDbEMsZUFBZSxHQUFJLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUTtvQkFFbkQsRUFBRSxFQUFFLGVBQWUsRUFBRSxDQUFDO3dCQUNwQixNQUFNLENBQUMsSUFBSTtvQkFDYixDQUFDO2dCQUNILENBQUM7Z0JBRUQsTUFBTSxDQUFDLE9BQU87WUFDaEIsQ0FBQzs7O1lBRUQsR0FBSyxHQUFMLEtBQUs7bUJBQUwsUUFBUSxDQUFSLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLEdBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUNRLE1BQWEsQ0FBdEIsTUFBTSxFQUFxQixNQUFlLENBQWpDLElBQUksQ0FBQyxRQUFRLEdBQUMsRUFBRSxHQUFrQixNQUFDLENBQWpCLElBQUksQ0FBQyxVQUFVLEdBQUMsQ0FBQyxRQUNqQyxNQUFhLENBQXRCLE1BQU0sRUFBcUIsTUFBZSxDQUFqQyxJQUFJLENBQUMsUUFBUSxHQUFDLEVBQUUsR0FBa0IsTUFBRyxDQUFuQixJQUFJLENBQUMsVUFBVSxHQUFDLEdBQUc7Z0JBRS9ELE1BQU0sQ0FBQyxHQUFHO1lBQ1osQ0FBQzs7OztZQUVNLEdBQWlCLEdBQWpCLGlCQUFpQjttQkFBeEIsUUFBUSxDQUFELGlCQUFpQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDdEMsR0FBSyxDQUFDLGVBQWUsT0F6Q3FCLFFBQXNCLGdDQXlDVixhQUFhLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FDM0UsaUJBQWlCLE9BMUNtQixRQUFzQixnQ0EwQ1IsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQy9FLFFBQVEsR0FBRyxlQUFlLEVBQzFCLFVBQVUsR0FBRyxpQkFBaUIsRUFDOUIsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFVBQVU7Z0JBRXhELE1BQU0sQ0FBQyxXQUFXO1lBQ3BCLENBQUM7OztXQTNDa0IsV0FBVzs7a0JBQVgsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgcHJvcGVydHlRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcHJvcGVydHlcIiksXG4gICAgICBleHByZXNzaW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydHksIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgY2hlY2tNYXRjaGVzKGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZGVjbGFyYXRpb24uZ2V0UHJvcGVydHkoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNNYXRjaCA9IChwcm9wZXJ0eSA9PT0gdGhpcy5wcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCwgbGFzdCkge1xuICAgIGNvbnN0IGNzcyA9IGxhc3QgP1xuICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn07YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5Q29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5UXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZXhwcmVzc2lvbkNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhleHByZXNzaW9uUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uQ29udGVudCwgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24ocHJvcGVydHksIGV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iXX0=