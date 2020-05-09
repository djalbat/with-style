"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _node = require("../utilities/node");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Declaration = /*#__PURE__*/function () {
  function Declaration(content) {
    _classCallCheck(this, Declaration);

    this.content = content;
  }

  _createClass(Declaration, [{
    key: "getContent",
    value: function getContent() {
      return this.content;
    }
  }, {
    key: "asCSS",
    value: function asCSS(indent, last) {
      var css = last ? "".concat(indent).concat(this.content) : "".concat(indent).concat(this.content, "\n");
      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var content = (0, _node.asContent)(node, tokens),
          declaration = new Declaration(content);
      return declaration;
    }
  }]);

  return Declaration;
}();

exports["default"] = Declaration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbIkRlY2xhcmF0aW9uIiwiY29udGVudCIsImluZGVudCIsImxhc3QiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwiZGVjbGFyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRXFCQSxXO0FBQ25CLHVCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ25CLFNBQUtBLE9BQUwsR0FBZUEsT0FBZjtBQUNEOzs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLQSxPQUFaO0FBQ0Q7OzswQkFFS0MsTSxFQUFRQyxJLEVBQU07QUFDbEIsVUFBTUMsR0FBRyxHQUFHRCxJQUFJLGFBQ0RELE1BREMsU0FDUSxLQUFLRCxPQURiLGNBRUNDLE1BRkQsU0FFVSxLQUFLRCxPQUZmLE9BQWhCO0FBSUEsYUFBT0csR0FBUDtBQUNEOzs7c0NBRXdCQyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNTCxPQUFPLEdBQUcscUJBQVVJLElBQVYsRUFBZ0JDLE1BQWhCLENBQWhCO0FBQUEsVUFDTUMsV0FBVyxHQUFHLElBQUlQLFdBQUosQ0FBZ0JDLE9BQWhCLENBRHBCO0FBR0EsYUFBT00sV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzQ29udGVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnQpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgZ2V0Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgYXNDU1MoaW5kZW50LCBsYXN0KSB7XG4gICAgY29uc3QgY3NzID0gbGFzdCA/XG4gICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5jb250ZW50fWAgOlxuICAgICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5jb250ZW50fVxcbmA7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBhc0NvbnRlbnQobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihjb250ZW50KTtcblxuICAgIHJldHVybiBkZWNsYXJhdGlvbjtcbiAgfVxufVxuIl19