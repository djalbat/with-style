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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tZG9tXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZW50XCI7XG5cbmNvbnN0IHByaW9yaXR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3ByaW9yaXR5XCIpLFxuICAgICAgcHJvcGVydHlRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcHJvcGVydHlcIiksXG4gICAgICBleHByZXNzaW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydHksIGV4cHJlc3Npb24sIHByaW9yaXR5KSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcmlvcml0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgfVxuXG4gIGNoZWNrTWF0Y2hlcyhkZWNsYXJhdGlvbnMpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVjbGFyYXRpb25zLnNvbWUoKGRlY2xhcmF0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9wZXJ0eSA9IGRlY2xhcmF0aW9uLmdldFByb3BlcnR5KCksXG4gICAgICAgICAgICBwcm9wZXJ0aWVzTWF0Y2ggPSAocHJvcGVydHkgPT09IHRoaXMucHJvcGVydHkpO1xuXG4gICAgICBpZiAocHJvcGVydGllc01hdGNoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBhc0NTUyhpbmRlbnQsIGxhc3QpIHtcbiAgICBjb25zdCBjc3MgPSBsYXN0ID9cbiAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259JHt0aGlzLnByaW9yaXR5fTtgIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn0ke3RoaXMucHJpb3JpdHl9O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5Q29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5UXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZXhwcmVzc2lvbkNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhleHByZXNzaW9uUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJpb3JpdHlDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJpb3JpdHlRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5Q29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Db250ZW50LCAvLy9cbiAgICAgICAgICBwcmlvcml0eSA9IChwcmlvcml0eUNvbnRlbnQgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgJHtwcmlvcml0eUNvbnRlbnR9YCxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eSwgZXhwcmVzc2lvbiwgcHJpb3JpdHkpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbInByaW9yaXR5UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwicHJvcGVydHlRdWVyeSIsImV4cHJlc3Npb25RdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJleHByZXNzaW9uIiwicHJpb3JpdHkiLCJnZXRQcm9wZXJ0eSIsImdldEV4cHJlc3Npb24iLCJnZXRQcmlvcml0eSIsImNoZWNrTWF0Y2hlcyIsImRlY2xhcmF0aW9ucyIsIm1hdGNoZXMiLCJzb21lIiwiZGVjbGFyYXRpb24iLCJwcm9wZXJ0aWVzTWF0Y2giLCJhc0NTUyIsImluZGVudCIsImxhc3QiLCJjc3MiLCJmcm9tTm9kZUFuZFRva2VucyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsImV4cHJlc3Npb25Db250ZW50IiwicHJpb3JpdHlDb250ZW50IiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxTQUFXLFdBQVgsV0FBVyxDQUFBO0FBRUosSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0csSUFBQSxRQUFzQixXQUF0QixzQkFBc0IsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEUsSUFBTUEsYUFBYSxHQUFHQyxTQUFLLE1BQUEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQyxFQUNuREMsYUFBYSxH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