"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _node = require("../utilities/node");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var first = _necessary.arrayUtilities.first;

var propertyQuery = _occamDom.Query.fromExpression("/*/property"),
    expressionQuery = _occamDom.Query.fromExpression("/*/expression");

var Declaration = /*#__PURE__*/function () {
  function Declaration(property, expression) {
    _classCallCheck(this, Declaration);

    this.property = property;
    this.expression = expression;
  }

  _createClass(Declaration, [{
    key: "getProperty",
    value: function getProperty() {
      return this.property;
    }
  }, {
    key: "getExpression",
    value: function getExpression() {
      return this.expression;
    }
  }, {
    key: "asCSS",
    value: function asCSS(indent, last) {
      var css = last ? "".concat(indent).concat(this.property, ": ").concat(this.expression, ";") : "".concat(indent).concat(this.property, ": ").concat(this.expression, ";\n");
      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var propertyContent = contentFromQueryNodeAndTokens(propertyQuery, node, tokens),
          expressionContent = contentFromQueryNodeAndTokens(expressionQuery, node, tokens),
          property = propertyContent,
          ///
      expression = expressionContent,
          ///
      declaration = new Declaration(property, expression);
      return declaration;
    }
  }]);

  return Declaration;
}();

exports["default"] = Declaration;

function contentFromQueryNodeAndTokens(query, node, tokens) {
  var nodes = query.execute(node),
      firstNode = first(nodes),
      content = (0, _node.asContent)(firstNode, tokens);
  return content;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9wZXJ0eVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb25RdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJleHByZXNzaW9uIiwiaW5kZW50IiwibGFzdCIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsImV4cHJlc3Npb25Db250ZW50IiwiZGVjbGFyYXRpb24iLCJxdWVyeSIsIm5vZGVzIiwiZXhlY3V0ZSIsImZpcnN0Tm9kZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7QUFFUixJQUFNRSxhQUFhLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGFBQXJCLENBQXRCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUR4Qjs7SUFHcUJFLFc7QUFDbkIsdUJBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztrQ0FFYTtBQUNaLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQVFDLEksRUFBTTtBQUNsQixVQUFNQyxHQUFHLEdBQUdELElBQUksYUFDREQsTUFEQyxTQUNRLEtBQUtGLFFBRGIsZUFDMEIsS0FBS0MsVUFEL0IsbUJBRUNDLE1BRkQsU0FFVSxLQUFLRixRQUZmLGVBRTRCLEtBQUtDLFVBRmpDLFFBQWhCO0FBSUEsYUFBT0csR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxlQUFlLEdBQUdDLDZCQUE2QixDQUFDYixhQUFELEVBQWdCVSxJQUFoQixFQUFzQkMsTUFBdEIsQ0FBckQ7QUFBQSxVQUNNRyxpQkFBaUIsR0FBR0QsNkJBQTZCLENBQUNWLGVBQUQsRUFBa0JPLElBQWxCLEVBQXdCQyxNQUF4QixDQUR2RDtBQUFBLFVBRU1OLFFBQVEsR0FBR08sZUFGakI7QUFBQSxVQUVrQztBQUM1Qk4sTUFBQUEsVUFBVSxHQUFHUSxpQkFIbkI7QUFBQSxVQUdzQztBQUNoQ0MsTUFBQUEsV0FBVyxHQUFHLElBQUlYLFdBQUosQ0FBZ0JDLFFBQWhCLEVBQTBCQyxVQUExQixDQUpwQjtBQU1BLGFBQU9TLFdBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTRiw2QkFBVCxDQUF1Q0csS0FBdkMsRUFBOENOLElBQTlDLEVBQW9EQyxNQUFwRCxFQUE0RDtBQUMxRCxNQUFNTSxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjUixJQUFkLENBQWQ7QUFBQSxNQUNNUyxTQUFTLEdBQUdyQixLQUFLLENBQUNtQixLQUFELENBRHZCO0FBQUEsTUFFTUcsT0FBTyxHQUFHLHFCQUFVRCxTQUFWLEVBQXFCUixNQUFyQixDQUZoQjtBQUlBLFNBQU9TLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhc0NvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb3BlcnR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3Byb3BlcnR5XCIpLFxuICAgICAgZXhwcmVzc2lvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGFzQ1NTKGluZGVudCwgbGFzdCkge1xuICAgIGNvbnN0IGNzcyA9IGxhc3QgP1xuICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn07YCA6XG4gICAgICAgICAgICAgICAgICBgJHtpbmRlbnR9JHt0aGlzLnByb3BlcnR5fTogJHt0aGlzLmV4cHJlc3Npb259O1xcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHByb3BlcnR5Q29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHByb3BlcnR5UXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgZXhwcmVzc2lvbkNvbnRlbnQgPSBjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyhleHByZXNzaW9uUXVlcnksIG5vZGUsIHRva2VucyksXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUNvbnRlbnQsIC8vL1xuICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uQ29udGVudCwgLy8vXG4gICAgICAgICAgZGVjbGFyYXRpb24gPSBuZXcgRGVjbGFyYXRpb24ocHJvcGVydHksIGV4cHJlc3Npb24pO1xuXG4gICAgcmV0dXJuIGRlY2xhcmF0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKHF1ZXJ5LCBub2RlLCB0b2tlbnMpIHtcbiAgY29uc3Qgbm9kZXMgPSBxdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICBmaXJzdE5vZGUgPSBmaXJzdChub2RlcyksXG4gICAgICAgIGNvbnRlbnQgPSBhc0NvbnRlbnQoZmlyc3ROb2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBjb250ZW50O1xufVxuIl19