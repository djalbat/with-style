'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var Media = require('./media');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;


var mediaQuery = Query.fromExpression('/stylesheet/media');

var Medias = function () {
  function Medias(array) {
    _classCallCheck(this, Medias);

    this.array = array;
  }

  _createClass(Medias, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(medias) {
      var array = medias.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(className) {
      var css = this.array.reduce(function (css, media) {
        var mediaCSS = media.asCSS(className);

        css += mediaCSS;

        return css;
      }, '');

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9tZWRpYXMuanMiXSwibmFtZXMiOlsiZG9tIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsIk1lZGlhIiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsInVuc2hpZnQiLCJtZWRpYVF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJNZWRpYXMiLCJhcnJheSIsIm1lZGlhcyIsImdldEFycmF5IiwiY2xhc3NOYW1lIiwiY3NzIiwicmVkdWNlIiwibWVkaWEiLCJtZWRpYUNTUyIsImFzQ1NTIiwibm9kZSIsInRva2VucyIsIm1lZGlhTm9kZXMiLCJleGVjdXRlIiwibWFwIiwibWVkaWFOb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxXQUFSLENBQVo7QUFBQSxJQUFtQztBQUM3QkMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFFBQVFGLFFBQVEsU0FBUixDQUFkOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGOzs7QUFJTixJQUFNQyxhQUFhRixNQUFNRyxjQUFOLENBQXFCLG1CQUFyQixDQUFuQjs7SUFFTUMsTTtBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsTSxFQUFRO0FBQ2QsVUFBTUQsUUFBUUMsT0FBT0MsUUFBUCxFQUFkOztBQUVBTixlQUFRLEtBQUtJLEtBQWIsRUFBb0JBLEtBQXBCO0FBQ0Q7OzswQkFFS0csUyxFQUFXO0FBQ2YsVUFBTUMsTUFBTSxLQUFLSixLQUFMLENBQVdLLE1BQVgsQ0FBa0IsVUFBU0QsR0FBVCxFQUFjRSxLQUFkLEVBQXFCO0FBQ2pELFlBQU1DLFdBQVdELE1BQU1FLEtBQU4sQ0FBWUwsU0FBWixDQUFqQjs7QUFFQUMsZUFBT0csUUFBUDs7QUFFQSxlQUFPSCxHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjs7QUFRQSxhQUFPQSxHQUFQO0FBQ0Q7OztzQ0FFd0JLLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLGFBQWFkLFdBQVdlLE9BQVgsQ0FBbUJILElBQW5CLENBQW5CO0FBQUEsVUFDTVQsUUFBUVcsV0FBV0UsR0FBWCxDQUFlLFVBQVNDLFNBQVQsRUFBb0I7QUFDekMsWUFBTUwsT0FBT0ssU0FBYjtBQUFBLFlBQXdCO0FBQ2xCUixnQkFBUWIsTUFBTXNCLGlCQUFOLENBQXdCTixJQUF4QixFQUE4QkMsTUFBOUIsQ0FEZDs7QUFHQSxlQUFPSixLQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTUwsU0FBUyxJQUFJRixNQUFKLENBQVdDLEtBQVgsQ0FQZjs7QUFTQSxhQUFPQyxNQUFQO0FBQ0Q7Ozs7OztBQUdIZSxPQUFPQyxPQUFQLEdBQWlCbEIsTUFBakIiLCJmaWxlIjoibWVkaWFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IE1lZGlhID0gcmVxdWlyZSgnLi9tZWRpYScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IFF1ZXJ5IH0gPSBkb20sXG4gICAgICB7IHVuc2hpZnQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBtZWRpYVF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy9zdHlsZXNoZWV0L21lZGlhJyk7XG5cbmNsYXNzIE1lZGlhcyB7XG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0QXJyYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KG1lZGlhcykge1xuICAgIGNvbnN0IGFycmF5ID0gbWVkaWFzLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKGZ1bmN0aW9uKGNzcywgbWVkaWEpIHtcbiAgICAgIGNvbnN0IG1lZGlhQ1NTID0gbWVkaWEuYXNDU1MoY2xhc3NOYW1lKTtcblxuICAgICAgY3NzICs9IG1lZGlhQ1NTO1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0sICcnKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgbWVkaWFOb2RlcyA9IG1lZGlhUXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IG1lZGlhTm9kZXMubWFwKGZ1bmN0aW9uKG1lZGlhTm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG1lZGlhTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBtZWRpYSA9IE1lZGlhLmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBtZWRpYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZWRpYXMgPSBuZXcgTWVkaWFzKGFycmF5KTtcblxuICAgIHJldHVybiBtZWRpYXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYXM7XG4iXX0=