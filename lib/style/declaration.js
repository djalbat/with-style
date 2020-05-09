"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _content = require("../utilities/content");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    key: "checkMatches",
    value: function checkMatches(declarations) {
      var _this = this;

      var matches = declarations.some(function (declaration) {
        var property = declaration.getProperty(),
            propertiesMatch = checkPropertiesMatch(property, _this.property);

        if (propertiesMatch) {
          return true;
        }
      });
      return matches;
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
      var propertyContent = (0, _content.contentFromQueryNodeAndTokens)(propertyQuery, node, tokens),
          expressionContent = (0, _content.contentFromQueryNodeAndTokens)(expressionQuery, node, tokens),
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

function checkPropertiesMatch(propertyA, propertyB) {
  var propertiesMatch = propertyA === propertyB;
  return propertiesMatch;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xhcmF0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BlcnR5UXVlcnkiLCJRdWVyeSIsImZyb21FeHByZXNzaW9uIiwiZXhwcmVzc2lvblF1ZXJ5IiwiRGVjbGFyYXRpb24iLCJwcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJkZWNsYXJhdGlvbnMiLCJtYXRjaGVzIiwic29tZSIsImRlY2xhcmF0aW9uIiwiZ2V0UHJvcGVydHkiLCJwcm9wZXJ0aWVzTWF0Y2giLCJjaGVja1Byb3BlcnRpZXNNYXRjaCIsImluZGVudCIsImxhc3QiLCJjc3MiLCJub2RlIiwidG9rZW5zIiwicHJvcGVydHlDb250ZW50IiwiZXhwcmVzc2lvbkNvbnRlbnQiLCJwcm9wZXJ0eUEiLCJwcm9wZXJ0eUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixhQUFyQixDQUF0QjtBQUFBLElBQ01DLGVBQWUsR0FBR0YsZ0JBQU1DLGNBQU4sQ0FBcUIsZUFBckIsQ0FEeEI7O0lBR3FCRSxXO0FBQ25CLHVCQUFZQyxRQUFaLEVBQXNCQyxVQUF0QixFQUFrQztBQUFBOztBQUNoQyxTQUFLRCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0Q7Ozs7a0NBRWE7QUFDWixhQUFPLEtBQUtELFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7OztpQ0FFWUMsWSxFQUFjO0FBQUE7O0FBQ3pCLFVBQU1DLE9BQU8sR0FBR0QsWUFBWSxDQUFDRSxJQUFiLENBQWtCLFVBQUNDLFdBQUQsRUFBaUI7QUFDakQsWUFBTUwsUUFBUSxHQUFHSyxXQUFXLENBQUNDLFdBQVosRUFBakI7QUFBQSxZQUNNQyxlQUFlLEdBQUdDLG9CQUFvQixDQUFDUixRQUFELEVBQVcsS0FBSSxDQUFDQSxRQUFoQixDQUQ1Qzs7QUFHQSxZQUFJTyxlQUFKLEVBQXFCO0FBQ25CLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BUGUsQ0FBaEI7QUFTQSxhQUFPSixPQUFQO0FBQ0Q7OzswQkFFS00sTSxFQUFRQyxJLEVBQU07QUFDbEIsVUFBTUMsR0FBRyxHQUFHRCxJQUFJLGFBQ0RELE1BREMsU0FDUSxLQUFLVCxRQURiLGVBQzBCLEtBQUtDLFVBRC9CLG1CQUVDUSxNQUZELFNBRVUsS0FBS1QsUUFGZixlQUU0QixLQUFLQyxVQUZqQyxRQUFoQjtBQUlBLGFBQU9VLEdBQVA7QUFDRDs7O3NDQUV3QkMsSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZUFBZSxHQUFHLDRDQUE4Qm5CLGFBQTlCLEVBQTZDaUIsSUFBN0MsRUFBbURDLE1BQW5ELENBQXhCO0FBQUEsVUFDTUUsaUJBQWlCLEdBQUcsNENBQThCakIsZUFBOUIsRUFBK0NjLElBQS9DLEVBQXFEQyxNQUFyRCxDQUQxQjtBQUFBLFVBRU1iLFFBQVEsR0FBR2MsZUFGakI7QUFBQSxVQUVrQztBQUM1QmIsTUFBQUEsVUFBVSxHQUFHYyxpQkFIbkI7QUFBQSxVQUdzQztBQUNoQ1YsTUFBQUEsV0FBVyxHQUFHLElBQUlOLFdBQUosQ0FBZ0JDLFFBQWhCLEVBQTBCQyxVQUExQixDQUpwQjtBQU1BLGFBQU9JLFdBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTRyxvQkFBVCxDQUE4QlEsU0FBOUIsRUFBeUNDLFNBQXpDLEVBQW9EO0FBQ2xELE1BQU1WLGVBQWUsR0FBSVMsU0FBUyxLQUFLQyxTQUF2QztBQUVBLFNBQU9WLGVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IHsgY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRlbnRcIjtcblxuY29uc3QgcHJvcGVydHlRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcHJvcGVydHlcIiksXG4gICAgICBleHByZXNzaW9uUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL2V4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcGVydHksIGV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0RXhwcmVzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uO1xuICB9XG5cbiAgY2hlY2tNYXRjaGVzKGRlY2xhcmF0aW9ucykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBkZWNsYXJhdGlvbnMuc29tZSgoZGVjbGFyYXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb3BlcnR5ID0gZGVjbGFyYXRpb24uZ2V0UHJvcGVydHkoKSxcbiAgICAgICAgICAgIHByb3BlcnRpZXNNYXRjaCA9IGNoZWNrUHJvcGVydGllc01hdGNoKHByb3BlcnR5LCB0aGlzLnByb3BlcnR5KTtcblxuICAgICAgaWYgKHByb3BlcnRpZXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgYXNDU1MoaW5kZW50LCBsYXN0KSB7XG4gICAgY29uc3QgY3NzID0gbGFzdCA/XG4gICAgICAgICAgICAgICAgYCR7aW5kZW50fSR7dGhpcy5wcm9wZXJ0eX06ICR7dGhpcy5leHByZXNzaW9ufTtgIDpcbiAgICAgICAgICAgICAgICAgIGAke2luZGVudH0ke3RoaXMucHJvcGVydHl9OiAke3RoaXMuZXhwcmVzc2lvbn07XFxuYDtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcHJvcGVydHlDb250ZW50ID0gY29udGVudEZyb21RdWVyeU5vZGVBbmRUb2tlbnMocHJvcGVydHlRdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBleHByZXNzaW9uQ29udGVudCA9IGNvbnRlbnRGcm9tUXVlcnlOb2RlQW5kVG9rZW5zKGV4cHJlc3Npb25RdWVyeSwgbm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5Q29udGVudCwgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb25Db250ZW50LCAvLy9cbiAgICAgICAgICBkZWNsYXJhdGlvbiA9IG5ldyBEZWNsYXJhdGlvbihwcm9wZXJ0eSwgZXhwcmVzc2lvbik7XG5cbiAgICByZXR1cm4gZGVjbGFyYXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wZXJ0aWVzTWF0Y2gocHJvcGVydHlBLCBwcm9wZXJ0eUIpIHtcbiAgY29uc3QgcHJvcGVydGllc01hdGNoID0gKHByb3BlcnR5QSA9PT0gcHJvcGVydHlCKTtcblxuICByZXR1cm4gcHJvcGVydGllc01hdGNoO1xufVxuIl19