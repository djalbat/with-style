"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _occamDom = require("occam-dom");

var _ruleSet = _interopRequireDefault(require("./ruleSet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ruleSetQuery = _occamDom.Query.fromExpression("/*/ruleSet");

var RuleSets = /*#__PURE__*/function () {
  function RuleSets(array) {
    _classCallCheck(this, RuleSets);

    this.array = array;
  }

  _createClass(RuleSets, [{
    key: "unshift",
    value: function unshift(ruleSets) {
      var _this = this;

      ruleSets.forEach(function (ruleSet) {
        var matches = ruleSet.checkMatches(_this.array); ///

        if (!matches) {
          _this.array.unshift(ruleSet);
        }
      });
    }
  }, {
    key: "forEach",
    value: function forEach(callback) {
      this.array.forEach(callback);
    }
  }, {
    key: "asCSS",
    value: function asCSS(className, indent) {
      var css = this.array.reduce(function (css, ruleSet) {
        var ruleSetCSS = ruleSet.asCSS(className, indent);
        css += ruleSetCSS;
        return css;
      }, "");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXRzLmpzIl0sIm5hbWVzIjpbInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJmb3JFYWNoIiwicnVsZVNldCIsIm1hdGNoZXMiLCJjaGVja01hdGNoZXMiLCJ1bnNoaWZ0IiwiY2FsbGJhY2siLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJyZWR1Y2UiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiUnVsZVNldCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUFyQjs7SUFFcUJDLFE7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLFEsRUFBVTtBQUFBOztBQUNoQkEsTUFBQUEsUUFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixZQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsWUFBUixDQUFxQixLQUFJLENBQUNMLEtBQTFCLENBQWhCLENBRDRCLENBQ3NCOztBQUVsRCxZQUFJLENBQUNJLE9BQUwsRUFBYztBQUNaLFVBQUEsS0FBSSxDQUFDSixLQUFMLENBQVdNLE9BQVgsQ0FBbUJILE9BQW5CO0FBQ0Q7QUFDRixPQU5EO0FBT0Q7Ozs0QkFFT0ksUSxFQUFVO0FBQ2hCLFdBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkssUUFBbkI7QUFDRDs7OzBCQUVLQyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxHQUFHLEdBQUcsS0FBS1YsS0FBTCxDQUFXVyxNQUFYLENBQWtCLFVBQUNELEdBQUQsRUFBTVAsT0FBTixFQUFrQjtBQUM5QyxZQUFNUyxVQUFVLEdBQUdULE9BQU8sQ0FBQ1UsS0FBUixDQUFjTCxTQUFkLEVBQXlCQyxNQUF6QixDQUFuQjtBQUVBQyxRQUFBQSxHQUFHLElBQUlFLFVBQVA7QUFFQSxlQUFPRixHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjtBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkksSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsWUFBWSxHQUFHcEIsWUFBWSxDQUFDcUIsT0FBYixDQUFxQkgsSUFBckIsQ0FBckI7QUFBQSxVQUNNZCxLQUFLLEdBQUdnQixZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUN4QyxZQUFNTCxJQUFJLEdBQUdLLFdBQWI7QUFBQSxZQUEwQjtBQUNwQmhCLFFBQUFBLE9BQU8sR0FBR2lCLG9CQUFRQyxpQkFBUixDQUEwQlAsSUFBMUIsRUFBZ0NDLE1BQWhDLENBRGhCOztBQUdBLGVBQU9aLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NRixRQUFRLEdBQUcsSUFBSUYsUUFBSixDQUFhQyxLQUFiLENBUGpCO0FBU0EsYUFBT0MsUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9ydWxlU2V0XCI7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcnVsZVNldFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBydWxlU2V0cy5mb3JFYWNoKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gcnVsZVNldC5jaGVja01hdGNoZXModGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGVTZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXROb2RlcyA9IHJ1bGVTZXRRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vZGVzLm1hcCgocnVsZVNldE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdfQ==