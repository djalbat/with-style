'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _necessary = require("necessary");

var _ruleSet = _interopRequireDefault(require("./ruleSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _unshift = _necessary.arrayUtilities.unshift;

var ruleSetQuery = _occamDom.Query.fromExpression('/*/ruleSet');

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
        ruleSet = _ruleSet["default"].fromNodeAndTokens(node, tokens);

        return ruleSet;
      }),
          ruleSets = new RuleSets(array);
      return ruleSets;
    }
  }]);

  return RuleSets;
}();

exports["default"] = RuleSets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXRzLmpzIl0sIm5hbWVzIjpbInVuc2hpZnQiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJnZXRBcnJheSIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXQiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiUnVsZVNldCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOztBQUVBOzs7Ozs7Ozs7O0lBRVFBLFEsR0FBWUMseUIsQ0FBWkQsTzs7QUFFUixJQUFNRSxZQUFZLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBQXJCOztJQUVxQkMsUTtBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0EsS0FBWjtBQUNEOzs7NEJBRU9DLFEsRUFBVTtBQUNoQixVQUFNRCxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxFQUFkOztBQUVBUixNQUFBQSxRQUFPLENBQUMsS0FBS00sS0FBTixFQUFhQSxLQUFiLENBQVA7QUFDRDs7OzBCQUVLRyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxHQUFHLEdBQUcsS0FBS0wsS0FBTCxDQUFXTSxNQUFYLENBQWtCLFVBQUNELEdBQUQsRUFBTUUsT0FBTixFQUFrQjtBQUM5QyxZQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsS0FBUixDQUFjTixTQUFkLEVBQXlCQyxNQUF6QixDQUFuQjtBQUVBQyxRQUFBQSxHQUFHLElBQUlHLFVBQVA7QUFFQSxlQUFPSCxHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjtBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkssSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsWUFBWSxHQUFHaEIsWUFBWSxDQUFDaUIsT0FBYixDQUFxQkgsSUFBckIsQ0FBckI7QUFBQSxVQUNNVixLQUFLLEdBQUdZLFlBQVksQ0FBQ0UsR0FBYixDQUFpQixVQUFDQyxXQUFELEVBQWlCO0FBQ3hDLFlBQU1MLElBQUksR0FBR0ssV0FBYjtBQUFBLFlBQTBCO0FBQ3BCUixRQUFBQSxPQUFPLEdBQUdTLG9CQUFRQyxpQkFBUixDQUEwQlAsSUFBMUIsRUFBZ0NDLE1BQWhDLENBRGhCOztBQUdBLGVBQU9KLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NTixRQUFRLEdBQUcsSUFBSUYsUUFBSixDQUFhQyxLQUFiLENBUGpCO0FBU0EsYUFBT0MsUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ29jY2FtLWRvbSc7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gJ25lY2Vzc2FyeSc7XG5cbmltcG9ydCBSdWxlU2V0IGZyb20gJy4vcnVsZVNldCc7XG5cbmNvbnN0IHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKCcvKi9ydWxlU2V0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICBnZXRBcnJheSgpIHtcbiAgICByZXR1cm4gdGhpcy5hcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBjb25zdCBhcnJheSA9IHJ1bGVTZXRzLmdldEFycmF5KCk7XG5cbiAgICB1bnNoaWZ0KHRoaXMuYXJyYXksIGFycmF5KTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCAnJyk7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXROb2RlcyA9IHJ1bGVTZXRRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vZGVzLm1hcCgocnVsZVNldE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdfQ==