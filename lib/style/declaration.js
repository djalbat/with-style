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
var priorityQuery = _occamQuery.Query.fromExpression("/*/priority"), propertyQuery = _occamQuery.Query.fromExpression("/*/property"), expressionQuery = _occamQuery.Query.fromExpression("/*/expression");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZS9kZWNsYXJhdGlvbi5qcyIsIjw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUXVlcnkgfSBmcm9tIFwib2NjYW0tcXVlcnlcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgcHJpb3JpdHlRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcHJpb3JpdHlcIiksXG4gICAgICBwcm9wZXJ0eVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9wcm9wZXJ0eVwiKSxcbiAgICAgIGV4cHJlc3Npb25RdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovZXhwcmVzc2lvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eSwgZXhwcmVzc2lvbiwgcHJpb3JpdHkpIHtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICB9XG5cbiAgY2hlY2tNYXRjaGVzKGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZGVjbGFyYXRpb24uZ2V0UHJvcGVydHkoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNNYXRjaCA9IChwcm9wZXJ0eSA9PT0gdGhpcy5wcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChwcm9wZXJ0aWVzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCwgbGFzdCkge1xuICAgIGNvbnN0IGNzcyA9IGxhc3QgP1xuICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn0ke3RoaXMucHJpb3JpdHl9O2AgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufSR7dGhpcy5wcmlvcml0eX07XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcHJvcGVydHlDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJvcGVydHlRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBleHByZXNzaW9uQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKGV4cHJlc3Npb25RdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcmlvcml0eUNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2Vucyhwcmlvcml0eVF1ZXJ5LCBub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlDb250ZW50LCAvLy9cbiAgICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbkNvbnRlbnQsIC8vL1xuICAgICAgICAgIHByaW9yaXR5ID0gKHByaW9yaXR5Q29udGVudCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBFTVBUWV9TVFJJTkcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYCAke3ByaW9yaXR5Q29udGVudH1gLFxuICAgICAgICAgIGRlY2xhcmF0aW9uID0gbmV3IERlY2xhcmF0aW9uKHByb3BlcnR5LCBleHByZXNzaW9uLCBwcmlvcml0eSk7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsicHJpb3JpdHlRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJwcm9wZXJ0eVF1ZXJ5IiwiZXhwcmVzc2lvblF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJwcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJwcmlvcml0eSIsImdldFByb3BlcnR5IiwiZ2V0RXhwcmVzc2lvbiIsImdldFByaW9yaXR5IiwiY2hlY2tNYXRjaGVzIiwiZGVjbGFyYXRpb25zIiwibWF0Y2hlcyIsInNvbWUiLCJkZWNsYXJhdGlvbiIsInByb3BlcnRpZXNNYXRjaCIsImFzQ1NTIiwiaW5kZW50IiwibGFzdCIsImNzcyIsImZyb21Ob2RlQW5kVG9rZW5zIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5Q29udGVudCIsImNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zIiwiZXhwcmVzc2lvbkNvbnRlbnQiLCJwcmlvcml0eUNvbnRlbnQiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFFTixJQUFBLFVBQWMsV0FBZCxjQUFjLENBQUE7QUFDRyxJQUFBLFFBQXNCLFdBQXRCLHNCQUFzQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNQSxhQUFhLEdBQUdDLFdBQUssTUFBQSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQ25EQyxhQUFh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