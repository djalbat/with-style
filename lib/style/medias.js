'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _media = _interopRequireDefault(require("./media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _unshift = _necessary.arrayUtilities.unshift;

var mediaQuery = _occamDom.Query.fromExpression('/stylesheet/media');

var Medias = /*#__PURE__*/function () {
  function Medias(array) {
    _classCallCheck(this, Medias);

    this.array = array;
  }

  _createClass(Medias, [{
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(medias) {
      var array = medias.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: "asCSS",
    value: function asCSS(className) {
      var css = this.array.reduce(function (css, media) {
        var mediaCSS = media.asCSS(className);
        css += mediaCSS;
        return css;
      }, '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhcy5qcyJdLCJuYW1lcyI6WyJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJtZWRpYVF1ZXJ5IiwiUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhcyIsImFycmF5IiwibWVkaWFzIiwiZ2V0QXJyYXkiLCJjbGFzc05hbWUiLCJjc3MiLCJyZWR1Y2UiLCJtZWRpYSIsIm1lZGlhQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJNZWRpYSIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0lBRVFBLFEsR0FBWUMseUIsQ0FBWkQsTzs7QUFFUixJQUFNRSxVQUFVLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLG1CQUFyQixDQUFuQjs7SUFFcUJDLE07QUFDbkIsa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzRCQUVPQyxNLEVBQVE7QUFDZCxVQUFNRCxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxFQUFkOztBQUVBUixNQUFBQSxRQUFPLENBQUMsS0FBS00sS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxTLEVBQVc7QUFDZixVQUFNQyxHQUFHLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCLFVBQUNELEdBQUQsRUFBTUUsS0FBTixFQUFnQjtBQUM1QyxZQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZTCxTQUFaLENBQWpCO0FBRUFDLFFBQUFBLEdBQUcsSUFBSUcsUUFBUDtBQUVBLGVBQU9ILEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaO0FBUUEsYUFBT0EsR0FBUDtBQUNEOzs7c0NBRXdCSyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxVQUFVLEdBQUdmLFVBQVUsQ0FBQ2dCLE9BQVgsQ0FBbUJILElBQW5CLENBQW5CO0FBQUEsVUFDTVQsS0FBSyxHQUFHVyxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFDQyxTQUFELEVBQWU7QUFDcEMsWUFBTUwsSUFBSSxHQUFHSyxTQUFiO0FBQUEsWUFBd0I7QUFDbEJSLFFBQUFBLEtBQUssR0FBR1Msa0JBQU1DLGlCQUFOLENBQXdCUCxJQUF4QixFQUE4QkMsTUFBOUIsQ0FEZDs7QUFHQSxlQUFPSixLQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTUwsTUFBTSxHQUFHLElBQUlGLE1BQUosQ0FBV0MsS0FBWCxDQVBmO0FBU0EsYUFBT0MsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ29jY2FtLWRvbSc7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gJ25lY2Vzc2FyeSc7XG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL21lZGlhJztcblxuY29uc3QgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbWVkaWFRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvc3R5bGVzaGVldC9tZWRpYScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYXMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChtZWRpYXMpIHtcbiAgICBjb25zdCBhcnJheSA9IG1lZGlhcy5nZXRBcnJheSgpO1xuXG4gICAgdW5zaGlmdCh0aGlzLmFycmF5LCBhcnJheSk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZSgoY3NzLCBtZWRpYSkgPT4ge1xuICAgICAgY29uc3QgbWVkaWFDU1MgPSBtZWRpYS5hc0NTUyhjbGFzc05hbWUpO1xuXG4gICAgICBjc3MgKz0gbWVkaWFDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBtZWRpYU5vZGVzID0gbWVkaWFRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gbWVkaWFOb2Rlcy5tYXAoKG1lZGlhTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG1lZGlhTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZWRpYSA9IE1lZGlhLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZWRpYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZWRpYXMgPSBuZXcgTWVkaWFzKGFycmF5KTtcblxuICAgIHJldHVybiBtZWRpYXM7XG4gIH1cbn1cbiJdfQ==