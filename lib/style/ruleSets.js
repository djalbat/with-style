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
        var matchingRuleSet = ruleSet.findMatchingRuleSet(_this.array); ///

        matchingRuleSet === null ? _this.array.unshift(ruleSet) : matchingRuleSet.unshift(ruleSet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXRzLmpzIl0sIm5hbWVzIjpbInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJmb3JFYWNoIiwicnVsZVNldCIsIm1hdGNoaW5nUnVsZVNldCIsImZpbmRNYXRjaGluZ1J1bGVTZXQiLCJ1bnNoaWZ0IiwiY2FsbGJhY2siLCJjbGFzc05hbWUiLCJpbmRlbnQiLCJjc3MiLCJyZWR1Y2UiLCJydWxlU2V0Q1NTIiwiYXNDU1MiLCJub2RlIiwidG9rZW5zIiwicnVsZVNldE5vZGVzIiwiZXhlY3V0ZSIsIm1hcCIsInJ1bGVTZXROb2RlIiwiUnVsZVNldCIsImZyb21Ob2RlQW5kVG9rZW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxnQkFBTUMsY0FBTixDQUFxQixZQUFyQixDQUFyQjs7SUFFcUJDLFE7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDakIsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NEJBRU9DLFEsRUFBVTtBQUFBOztBQUNoQkEsTUFBQUEsUUFBUSxDQUFDQyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QixZQUFNQyxlQUFlLEdBQUdELE9BQU8sQ0FBQ0UsbUJBQVIsQ0FBNEIsS0FBSSxDQUFDTCxLQUFqQyxDQUF4QixDQUQ0QixDQUNxQzs7QUFFaEVJLFFBQUFBLGVBQWUsS0FBSyxJQUFyQixHQUNFLEtBQUksQ0FBQ0osS0FBTCxDQUFXTSxPQUFYLENBQW1CSCxPQUFuQixDQURGLEdBRUlDLGVBQWUsQ0FBQ0UsT0FBaEIsQ0FBd0JILE9BQXhCLENBRko7QUFHRCxPQU5EO0FBT0Q7Ozs0QkFFT0ksUSxFQUFVO0FBQ2hCLFdBQUtQLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkssUUFBbkI7QUFDRDs7OzBCQUVLQyxTLEVBQVdDLE0sRUFBUTtBQUN2QixVQUFNQyxHQUFHLEdBQUcsS0FBS1YsS0FBTCxDQUFXVyxNQUFYLENBQWtCLFVBQUNELEdBQUQsRUFBTVAsT0FBTixFQUFrQjtBQUM5QyxZQUFNUyxVQUFVLEdBQUdULE9BQU8sQ0FBQ1UsS0FBUixDQUFjTCxTQUFkLEVBQXlCQyxNQUF6QixDQUFuQjtBQUVBQyxRQUFBQSxHQUFHLElBQUlFLFVBQVA7QUFFQSxlQUFPRixHQUFQO0FBQ0QsT0FOVyxFQU1ULEVBTlMsQ0FBWjtBQVFBLGFBQU9BLEdBQVA7QUFDRDs7O3NDQUV3QkksSSxFQUFNQyxNLEVBQVE7QUFDckMsVUFBTUMsWUFBWSxHQUFHcEIsWUFBWSxDQUFDcUIsT0FBYixDQUFxQkgsSUFBckIsQ0FBckI7QUFBQSxVQUNNZCxLQUFLLEdBQUdnQixZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUN4QyxZQUFNTCxJQUFJLEdBQUdLLFdBQWI7QUFBQSxZQUEwQjtBQUNwQmhCLFFBQUFBLE9BQU8sR0FBR2lCLG9CQUFRQyxpQkFBUixDQUEwQlAsSUFBMUIsRUFBZ0NDLE1BQWhDLENBRGhCOztBQUdBLGVBQU9aLE9BQVA7QUFDRCxPQUxPLENBRGQ7QUFBQSxVQU9NRixRQUFRLEdBQUcsSUFBSUYsUUFBSixDQUFhQyxLQUFiLENBUGpCO0FBU0EsYUFBT0MsUUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcIm9jY2FtLWRvbVwiO1xuXG5pbXBvcnQgUnVsZVNldCBmcm9tIFwiLi9ydWxlU2V0XCI7XG5cbmNvbnN0IHJ1bGVTZXRRdWVyeSA9IFF1ZXJ5LmZyb21FeHByZXNzaW9uKFwiLyovcnVsZVNldFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZVNldHMge1xuICBjb25zdHJ1Y3RvcihhcnJheSkge1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgfVxuXG4gIHVuc2hpZnQocnVsZVNldHMpIHtcbiAgICBydWxlU2V0cy5mb3JFYWNoKChydWxlU2V0KSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGluZ1J1bGVTZXQgPSBydWxlU2V0LmZpbmRNYXRjaGluZ1J1bGVTZXQodGhpcy5hcnJheSk7IC8vL1xuXG4gICAgICAobWF0Y2hpbmdSdWxlU2V0ID09PSBudWxsKSA/XG4gICAgICAgIHRoaXMuYXJyYXkudW5zaGlmdChydWxlU2V0KSA6XG4gICAgICAgICAgbWF0Y2hpbmdSdWxlU2V0LnVuc2hpZnQocnVsZVNldCk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5hcnJheS5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KSB7XG4gICAgY29uc3QgY3NzID0gdGhpcy5hcnJheS5yZWR1Y2UoKGNzcywgcnVsZVNldCkgPT4ge1xuICAgICAgY29uc3QgcnVsZVNldENTUyA9IHJ1bGVTZXQuYXNDU1MoY2xhc3NOYW1lLCBpbmRlbnQpO1xuXG4gICAgICBjc3MgKz0gcnVsZVNldENTUztcblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9LCBcIlwiKTtcblxuICAgIHJldHVybiBjc3M7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gICAgY29uc3QgcnVsZVNldE5vZGVzID0gcnVsZVNldFF1ZXJ5LmV4ZWN1dGUobm9kZSksXG4gICAgICAgICAgYXJyYXkgPSBydWxlU2V0Tm9kZXMubWFwKChydWxlU2V0Tm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHJ1bGVTZXROb2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHJ1bGVTZXQgPSBSdWxlU2V0LmZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBydWxlU2V0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVTZXRzID0gbmV3IFJ1bGVTZXRzKGFycmF5KTtcblxuICAgIHJldHVybiBydWxlU2V0cztcbiAgfVxufVxuIl19