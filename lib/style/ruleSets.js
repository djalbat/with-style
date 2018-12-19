'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var RuleSet = require('./ruleSet');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;


var ruleSetQuery = Query.fromExpression('/*/ruleSet');

var RuleSets = function () {
  function RuleSets(array) {
    _classCallCheck(this, RuleSets);

    this.array = array;
  }

  _createClass(RuleSets, [{
    key: 'getArray',
    value: function getArray() {
      return this.array;
    }
  }, {
    key: 'unshift',
    value: function unshift(ruleSets) {
      var array = ruleSets.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: 'asCSS',
    value: function asCSS(className, indent) {
      var css = this.array.reduce(function (css, ruleSet) {
        var ruleSetCSS = ruleSet.asCSS(className, indent);

        css += ruleSetCSS;

        return css;
      }, '');

      return css;
    }
  }], [{
    key: 'fromNodeAndTokens',
    value: function fromNodeAndTokens(node, tokens) {
      var ruleSetNodes = ruleSetQuery.execute(node),
          array = ruleSetNodes.map(function (ruleSetNode) {
        var node = ruleSetNode,
            ///
        ruleSet = RuleSet.fromNodeAndTokens(node, tokens);

        return ruleSet;
      }),
          ruleSets = new RuleSets(array);

      return ruleSets;
    }
  }]);

  return RuleSets;
}();

module.exports = RuleSets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9zdHlsZS9ydWxlU2V0cy5qcyJdLCJuYW1lcyI6WyJkb20iLCJyZXF1aXJlIiwibmVjZXNzYXJ5IiwiUnVsZVNldCIsImFycmF5VXRpbGl0aWVzIiwiUXVlcnkiLCJ1bnNoaWZ0IiwicnVsZVNldFF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJnZXRBcnJheSIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiZnJvbU5vZGVBbmRUb2tlbnMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUSxXQUFSLENBQVo7QUFBQSxJQUFtQztBQUM3QkMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdBLElBQU1FLFVBQVVGLFFBQVEsV0FBUixDQUFoQjs7QUFFTSxJQUFFRyxjQUFGLEdBQXFCRixTQUFyQixDQUFFRSxjQUFGO0FBQUEsSUFDRUMsS0FERixHQUNZTCxHQURaLENBQ0VLLEtBREY7QUFBQSxJQUVFQyxRQUZGLEdBRWNGLGNBRmQsQ0FFRUUsT0FGRjs7O0FBSU4sSUFBTUMsZUFBZUYsTUFBTUcsY0FBTixDQUFxQixZQUFyQixDQUFyQjs7SUFFTUMsUTtBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxLQUFaO0FBQ0Q7Ozs0QkFFT0MsUSxFQUFVO0FBQ2hCLFVBQU1ELFFBQVFDLFNBQVNDLFFBQVQsRUFBZDs7QUFFQU4sZUFBUSxLQUFLSSxLQUFiLEVBQW9CQSxLQUFwQjtBQUNEOzs7MEJBRUtHLFMsRUFBV0MsTSxFQUFRO0FBQ3ZCLFVBQU1DLE1BQU0sS0FBS0wsS0FBTCxDQUFXTSxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY0UsT0FBZCxFQUF1QjtBQUNuRCxZQUFNQyxhQUFhRCxRQUFRRSxLQUFSLENBQWNOLFNBQWQsRUFBeUJDLE1BQXpCLENBQW5COztBQUVBQyxlQUFPRyxVQUFQOztBQUVBLGVBQU9ILEdBQVA7QUFDRCxPQU5XLEVBTVQsRUFOUyxDQUFaOztBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkssSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsZUFBZWYsYUFBYWdCLE9BQWIsQ0FBcUJILElBQXJCLENBQXJCO0FBQUEsVUFDTVYsUUFBUVksYUFBYUUsR0FBYixDQUFpQixVQUFTQyxXQUFULEVBQXNCO0FBQzdDLFlBQU1MLE9BQU9LLFdBQWI7QUFBQSxZQUEwQjtBQUNwQlIsa0JBQVVkLFFBQVF1QixpQkFBUixDQUEwQk4sSUFBMUIsRUFBZ0NDLE1BQWhDLENBRGhCOztBQUdBLGVBQU9KLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NTixXQUFXLElBQUlGLFFBQUosQ0FBYUMsS0FBYixDQVBqQjs7QUFTQSxhQUFPQyxRQUFQO0FBQ0Q7Ozs7OztBQUdIZ0IsT0FBT0MsT0FBUCxHQUFpQm5CLFFBQWpCIiwiZmlsZSI6InJ1bGVTZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGVTZXQgPSByZXF1aXJlKCcuL3J1bGVTZXQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcnVsZVNldFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8qL3J1bGVTZXQnKTtcblxuY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0cykge1xuICAgIGNvbnN0IGFycmF5ID0gcnVsZVNldHMuZ2V0QXJyYXkoKTtcblxuICAgIHVuc2hpZnQodGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZShmdW5jdGlvbihjc3MsIHJ1bGVTZXQpIHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoZnVuY3Rpb24ocnVsZVNldE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlU2V0cztcbiJdfQ==