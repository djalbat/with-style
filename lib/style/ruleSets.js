'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dom = require('occam-dom'),
    ///
necessary = require('necessary');

var RuleSet = require('./ruleSet');

var arrayUtilities = necessary.arrayUtilities,
    Query = dom.Query,
    _unshift = arrayUtilities.unshift;
var ruleSetQuery = Query.fromExpression('/*/ruleSet');

var RuleSets = /*#__PURE__*/function () {
  function RuleSets(array) {
    _classCallCheck(this, RuleSets);

    this.array = array;
  }

  _createClass(RuleSets, [{
    key: "getArray",
    value: function getArray() {
      return this.array;
    }
  }, {
    key: "unshift",
    value: function unshift(ruleSets) {
      var array = ruleSets.getArray();

      _unshift(this.array, array);
    }
  }, {
    key: "asCSS",
    value: function asCSS(className, indent) {
      var css = this.array.reduce(function (css, ruleSet) {
        var ruleSetCSS = ruleSet.asCSS(className, indent);
        css += ruleSetCSS;
        return css;
      }, '');
      return css;
    }
  }], [{
    key: "fromNodeAndTokens",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXRzLmpzIl0sIm5hbWVzIjpbImRvbSIsInJlcXVpcmUiLCJuZWNlc3NhcnkiLCJSdWxlU2V0IiwiYXJyYXlVdGlsaXRpZXMiLCJRdWVyeSIsInVuc2hpZnQiLCJydWxlU2V0UXVlcnkiLCJmcm9tRXhwcmVzc2lvbiIsIlJ1bGVTZXRzIiwiYXJyYXkiLCJydWxlU2V0cyIsImdldEFycmF5IiwiY2xhc3NOYW1lIiwiaW5kZW50IiwiY3NzIiwicmVkdWNlIiwicnVsZVNldCIsInJ1bGVTZXRDU1MiLCJhc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9kZXMiLCJleGVjdXRlIiwibWFwIiwicnVsZVNldE5vZGUiLCJmcm9tTm9kZUFuZFRva2VucyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU1BLEdBQUcsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBbkI7QUFBQSxJQUFtQztBQUM3QkMsU0FBUyxHQUFHRCxPQUFPLENBQUMsV0FBRCxDQUR6Qjs7QUFHQSxJQUFNRSxPQUFPLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXZCOztBQUVNLElBQUVHLGNBQUYsR0FBcUJGLFNBQXJCLENBQUVFLGNBQUY7QUFBQSxJQUNFQyxLQURGLEdBQ1lMLEdBRFosQ0FDRUssS0FERjtBQUFBLElBRUVDLFFBRkYsR0FFY0YsY0FGZCxDQUVFRSxPQUZGO0FBSU4sSUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLGNBQU4sQ0FBcUIsWUFBckIsQ0FBckI7O0lBRU1DLFE7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFEsRUFBVTtBQUNoQixVQUFNRCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxFQUFkOztBQUVBTixNQUFBQSxRQUFPLENBQUMsS0FBS0ksS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxHQUFHLEdBQUcsS0FBS0wsS0FBTCxDQUFXTSxNQUFYLENBQWtCLFVBQVNELEdBQVQsRUFBY0UsT0FBZCxFQUF1QjtBQUNuRCxZQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsS0FBUixDQUFjTixTQUFkLEVBQXlCQyxNQUF6QixDQUFuQjtBQUVBQyxRQUFBQSxHQUFHLElBQUlHLFVBQVA7QUFFQSxlQUFPSCxHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjtBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkssSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsWUFBWSxHQUFHZixZQUFZLENBQUNnQixPQUFiLENBQXFCSCxJQUFyQixDQUFyQjtBQUFBLFVBQ01WLEtBQUssR0FBR1ksWUFBWSxDQUFDRSxHQUFiLENBQWlCLFVBQVNDLFdBQVQsRUFBc0I7QUFDN0MsWUFBTUwsSUFBSSxHQUFHSyxXQUFiO0FBQUEsWUFBMEI7QUFDcEJSLFFBQUFBLE9BQU8sR0FBR2QsT0FBTyxDQUFDdUIsaUJBQVIsQ0FBMEJOLElBQTFCLEVBQWdDQyxNQUFoQyxDQURoQjtBQUdBLGVBQU9KLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NTixRQUFRLEdBQUcsSUFBSUYsUUFBSixDQUFhQyxLQUFiLENBUGpCO0FBU0EsYUFBT0MsUUFBUDtBQUNEOzs7Ozs7QUFHSGdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5CLFFBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb20gPSByZXF1aXJlKCdvY2NhbS1kb20nKSwgIC8vL1xuICAgICAgbmVjZXNzYXJ5ID0gcmVxdWlyZSgnbmVjZXNzYXJ5Jyk7XG5cbmNvbnN0IFJ1bGVTZXQgPSByZXF1aXJlKCcuL3J1bGVTZXQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBRdWVyeSB9ID0gZG9tLFxuICAgICAgeyB1bnNoaWZ0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcnVsZVNldFF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oJy8qL3J1bGVTZXQnKTtcblxuY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgdW5zaGlmdChydWxlU2V0cykge1xuICAgIGNvbnN0IGFycmF5ID0gcnVsZVNldHMuZ2V0QXJyYXkoKTtcblxuICAgIHVuc2hpZnQodGhpcy5hcnJheSwgYXJyYXkpO1xuICB9XG5cbiAgYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpIHtcbiAgICBjb25zdCBjc3MgPSB0aGlzLmFycmF5LnJlZHVjZShmdW5jdGlvbihjc3MsIHJ1bGVTZXQpIHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgJycpO1xuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgICBjb25zdCBydWxlU2V0Tm9kZXMgPSBydWxlU2V0UXVlcnkuZXhlY3V0ZShub2RlKSxcbiAgICAgICAgICBhcnJheSA9IHJ1bGVTZXROb2Rlcy5tYXAoZnVuY3Rpb24ocnVsZVNldE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSdWxlU2V0cztcbiJdfQ==