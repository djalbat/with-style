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
    key: "getContent",
    value: function getContent() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJwcm9wZXJ0eVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsImV4cHJlc3Npb25RdWVyeSIsIkRlY2xhcmF0aW9uIiwicHJvcGVydHkiLCJleHByZXNzaW9uIiwiaW5kZW50IiwibGFzdCIsImNzcyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eUNvbnRlbnQiLCJjb250ZW50RnJvbVF1ZXJ5Tm9kZUFuZFRva2VucyIsImV4cHJlc3Npb25Db250ZW50IiwiZGVjbGFyYXRpb24iLCJxdWVyeSIsIm5vZGVzIiwiZXhlY3V0ZSIsImZpcnN0Tm9kZSIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7QUFFUixJQUFNRSxhQUFhLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLGFBQXJCLENBQXRCO0FBQUEsSUFDTUMsZUFBZSxHQUFHRixnQkFBTUMsY0FBTixDQUFxQixlQUFyQixDQUR4Qjs7SUFHcUJFLFc7QUFDbkIsdUJBQVlDLFFBQVosRUFBc0JDLFVBQXRCLEVBQWtDO0FBQUE7O0FBQ2hDLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztpQ0FFWTtBQUNYLGFBQU8sS0FBS0QsUUFBWjtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLEtBQUtDLFVBQVo7QUFDRDs7OzBCQUVLQyxNLEVBQVFDLEksRUFBTTtBQUNsQixVQUFNQyxHQUFHLEdBQUdELElBQUksYUFDREQsTUFEQyxTQUNRLEtBQUtGLFFBRGIsZUFDMEIsS0FBS0MsVUFEL0IsbUJBRUNDLE1BRkQsU0FFVSxLQUFLRixRQUZmLGVBRTRCLEtBQUtDLFVBRmpDLFFBQWhCO0FBSUEsYUFBT0csR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxlQUFlLEdBQUdDLDZCQUE2QixDQUFDYixhQUFELEVBQWdCVSxJQUFoQixFQUFzQkMsTUFBdEIsQ0FBckQ7QUFBQSxVQUNNRyxpQkFBaUIsR0FBR0QsNkJBQTZCLENBQUNWLGVBQUQsRUFBa0JPLElBQWxCLEVBQXdCQyxNQUF4QixDQUR2RDtBQUFBLFVBRU1OLFFBQVEsR0FBR08sZUFGakI7QUFBQSxVQUVrQztBQUM1Qk4sTUFBQUEsVUFBVSxHQUFHUSxpQkFIbkI7QUFBQSxVQUdzQztBQUNoQ0MsTUFBQUEsV0FBVyxHQUFHLElBQUlYLFdBQUosQ0FBZ0JDLFFBQWhCLEVBQTBCQyxVQUExQixDQUpwQjtBQU1BLGFBQU9TLFdBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTRiw2QkFBVCxDQUF1Q0csS0FBdkMsRUFBOENOLElBQTlDLEVBQW9EQyxNQUFwRCxFQUE0RDtBQUMxRCxNQUFNTSxLQUFLLEdBQUdELEtBQUssQ0FBQ0UsT0FBTixDQUFjUixJQUFkLENBQWQ7QUFBQSxNQUNNUyxTQUFTLEdBQUdyQixLQUFLLENBQUNtQixLQUFELENBRHZCO0FBQUEsTUFFTUcsT0FBTyxHQUFHLHFCQUFVRCxTQUFWLEVBQXFCUixNQUFyQixDQUZoQjtBQUlBLFNBQU9TLE9BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBhc0NvbnRlbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHByb3BlcnR5UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3Byb3BlcnR5XCIpLFxuICAgICAgZXhwcmVzc2lvblF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oXCIvKi9leHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnR5LCBleHByZXNzaW9uKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMuZXhwcmVzc2lvbiA9IGV4cHJlc3Npb247XG4gIH1cblxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50LCBsYXN0KSB7XG4gICAgY29uc3QgY3NzID0gbGFzdCA/XG4gICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufTtgIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn07XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcHJvcGVydHlDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJvcGVydHlRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBleHByZXNzaW9uQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKGV4cHJlc3Npb25RdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5Q29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Db250ZW50LCAvLy9cbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eSwgZXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocXVlcnksIG5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlcyA9IHF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgIGZpcnN0Tm9kZSA9IGZpcnN0KG5vZGVzKSxcbiAgICAgICAgY29udGVudCA9IGFzQ29udGVudChmaXJzdE5vZGUsIHRva2Vucyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXX0=