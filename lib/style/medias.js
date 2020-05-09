"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _media = _interopRequireDefault(require("./media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mediaQuery = _occamDom.Query.fromExpression("/stylesheet/media");

var Medias = /*#__PURE__*/function () {
  function Medias(array) {
    _classCallCheck(this, Medias);

    this.array = array;
  }

  _createClass(Medias, [{
    key: "unshift",
    value: function unshift(medias) {
      var _this = this;

      medias.forEach(function (media) {
        _this.array.unshift(media);
      });
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "asCSS",
    value: function asCSS(className) {
      var css = this.array.reduce(function (css, media) {
        var mediaCSS = media.asCSS(className);
        css += mediaCSS;
        return css;
      }, "");
      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
    value: function fromNodeAndTokens(node, tokens) {
      var mediaNodes = mediaQuery.execute(node),
          array = mediaNodes.map(function (mediaNode) {
        var node = mediaNode,
            ///
        media = _media["default"].fromNodeAndTokens(node, tokens);

        return media;
      }),
          medias = new Medias(array);
      return medias;
    }
  }]);

  return Medias;
}();

exports["default"] = Medias;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhcy5qcyJdLCJuYW1lcyI6WyJtZWRpYVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhcyIsImFycmF5IiwibWVkaWFzIiwiZm9yRWFjaCIsIm1lZGlhIiwidW5zaGlmdCIsImNhbGxiYWNrIiwiY2xhc3NOYW1lIiwiY3NzIiwicmVkdWNlIiwibWVkaWFDU1MiLCJhc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJtZWRpYU5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsIm1lZGlhTm9kZSIsIk1lZGlhIiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLG1CQUFyQixDQUFuQjs7SUFFcUJDLE07QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLE0sRUFBUTtBQUFBOztBQUNkQSxNQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxVQUFDQyxLQUFELEVBQVc7QUFDeEIsUUFBQSxLQUFJLENBQUNILEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkQsS0FBbkI7QUFDRCxPQUZEO0FBR0Q7Ozs0QkFFT0UsUSxFQUFVO0FBQ2hCLFdBQUtMLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkcsUUFBbkI7QUFDRDs7OzBCQUVLQyxTLEVBQVc7QUFDZixVQUFNQyxHQUFHLEdBQUcsS0FBS1AsS0FBTCxDQUFXUSxNQUFYLENBQWtCLFVBQUNELEdBQUQsRUFBTUosS0FBTixFQUFnQjtBQUM1QyxZQUFNTSxRQUFRLEdBQUdOLEtBQUssQ0FBQ08sS0FBTixDQUFZSixTQUFaLENBQWpCO0FBRUFDLFFBQUFBLEdBQUcsSUFBSUUsUUFBUDtBQUVBLGVBQU9GLEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaO0FBUUEsYUFBT0EsR0FBUDtBQUNEOzs7c0NBRXdCSSxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxVQUFVLEdBQUdqQixVQUFVLENBQUNrQixPQUFYLENBQW1CSCxJQUFuQixDQUFuQjtBQUFBLFVBQ01YLEtBQUssR0FBR2EsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsU0FBRCxFQUFlO0FBQ3BDLFlBQU1MLElBQUksR0FBR0ssU0FBYjtBQUFBLFlBQXdCO0FBQ2xCYixRQUFBQSxLQUFLLEdBQUdjLGtCQUFNQyxpQkFBTixDQUF3QlAsSUFBeEIsRUFBOEJDLE1BQTlCLENBRGQ7O0FBR0EsZUFBT1QsS0FBUDtBQUNELE9BTE8sQ0FEZDtBQUFBLFVBT01GLE1BQU0sR0FBRyxJQUFJRixNQUFKLENBQVdDLEtBQVgsQ0FQZjtBQVNBLGFBQU9DLE1BQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCI7XG5cbmNvbnN0IG1lZGlhUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi9zdHlsZXNoZWV0L21lZGlhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQobWVkaWFzKSB7XG4gICAgbWVkaWFzLmZvckVhY2goKG1lZGlhKSA9PiB7XG4gICAgICB0aGlzLmFycmF5LnVuc2hpZnQobWVkaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBtZWRpYSkgPT4ge1xuICAgICAgY29uc3QgbWVkaWFDU1MgPSBtZWRpYS5hc0NTUyhjbGFzc05hbWUpO1xuXG4gICAgICBjc3MgKz0gbWVkaWFDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IG1lZGlhTm9kZXMgPSBtZWRpYVF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBtZWRpYU5vZGVzLm1hcCgobWVkaWFOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbWVkaWFOb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1lZGlhID0gTWVkaWEuZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1lZGlhcyA9IG5ldyBNZWRpYXMoYXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lZGlhcztcbiAgfVxufVxuIl19