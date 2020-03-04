'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Media = require('./media');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;
var mediaQuery = Query.fromExpression('/stylesheet/media');

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
        media = Media.fromNodeAndTokens(node, tokens);
        return media;
      }),
          medias = new Medias(array);
      return medias;
    }
  }]);

  return Medias;
}();

module.exports = Medias;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhcy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiTWVkaWEiLCJhcnJheVV0aWxpdGllcyIsIlF1ZXJ5IiwidW5zaGlmdCIsIm1lZGlhUXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIk1lZGlhcyIsImFycmF5IiwibWVkaWFzIiwiZ2V0QXJyYXkiLCJjbGFzc05hbWUiLCJjc3MiLCJyZWR1Y2UiLCJtZWRpYSIsIm1lZGlhQ1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwibWVkaWFOb2RlcyIsImV4ZWN1dGUiLCJtYXAiLCJtZWRpYU5vZGUiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7QUFBQSxJQUFtQztBQUM3QkMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6Qjs7QUFHQSxJQUFNRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQyxTQUFELENBQXJCOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGO0FBSU4sSUFBTUMsVUFBVSxHQUFHRixLQUFLLENBQUNHLGNBQU4sQ0FBcUIsbUJBQXJCLENBQW5COztJQUVNQyxNO0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7K0JBRVU7QUFDVCxhQUFPLEtBQUtBLEtBQVo7QUFDRDs7OzRCQUVPQyxNLEVBQVE7QUFDZCxVQUFNRCxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUCxFQUFkOztBQUVBTixNQUFBQSxRQUFPLENBQUMsS0FBS0ksS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxTLEVBQVc7QUFDZixVQUFNQyxHQUFHLEdBQUcsS0FBS0osS0FBTCxDQUFXSyxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY0UsS0FBZCxFQUFxQjtBQUNqRCxZQUFNQyxRQUFRLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZTCxTQUFaLENBQWpCO0FBRUFDLFFBQUFBLEdBQUcsSUFBSUcsUUFBUDtBQUVBLGVBQU9ILEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaO0FBUUEsYUFBT0EsR0FBUDtBQUNEOzs7c0NBRXdCSyxJLEVBQU1DLE0sRUFBUTtBQUNyQyxVQUFNQyxVQUFVLEdBQUdkLFVBQVUsQ0FBQ2UsT0FBWCxDQUFtQkgsSUFBbkIsQ0FBbkI7QUFBQSxVQUNNVCxLQUFLLEdBQUdXLFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQVNDLFNBQVQsRUFBb0I7QUFDekMsWUFBTUwsSUFBSSxHQUFHSyxTQUFiO0FBQUEsWUFBd0I7QUFDbEJSLFFBQUFBLEtBQUssR0FBR2IsS0FBSyxDQUFDc0IsaUJBQU4sQ0FBd0JOLElBQXhCLEVBQThCQyxNQUE5QixDQURkO0FBR0EsZUFBT0osS0FBUDtBQUNELE9BTE8sQ0FEZDtBQUFBLFVBT01MLE1BQU0sR0FBRyxJQUFJRixNQUFKLENBQVdDLEtBQVgsQ0FQZjtBQVNBLGFBQU9DLE1BQVA7QUFDRDs7Ozs7O0FBR0hlLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxCLE1BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE1lZGlhID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5IH0gPSBkb20sXG4gICAgICB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBtZWRpYVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9zdHlsZXNoZWV0L21lZGlhJyk7XG5cbmNsYXNzIE1lZGlhcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KG1lZGlhcykge1xuICAgIGNvbnN0IGFycmF5ID0gbWVkaWFzLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGNzcywgbWVkaWEpIHtcbiAgICAgIGNvbnN0IG1lZGlhQ1NTID0gbWVkaWEuYXNDU1MoY2xhc3NOYW1lKTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb2RlcyA9IG1lZGlhUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IG1lZGlhTm9kZXMubWFwKGZ1bmN0aW9uKG1lZGlhTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG1lZGlhTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZWRpYSA9IE1lZGlhLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZWRpYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZWRpYXMgPSBuZXcgTWVkaWFzKGFycmF5KTtcblxuICAgIHJldHVybiBtZWRpYXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYXM7XG4iXX0=