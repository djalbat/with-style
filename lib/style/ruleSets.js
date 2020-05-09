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
        _this.array.unshift(ruleSet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVTZXRzLmpzIl0sIm5hbWVzIjpbInJ1bGVTZXRRdWVyeSIsIlF1ZXJ5IiwiZnJvbUV4cHJlc3Npb24iLCJSdWxlU2V0cyIsImFycmF5IiwicnVsZVNldHMiLCJmb3JFYWNoIiwicnVsZVNldCIsInVuc2hpZnQiLCJjYWxsYmFjayIsImNsYXNzTmFtZSIsImluZGVudCIsImNzcyIsInJlZHVjZSIsInJ1bGVTZXRDU1MiLCJhc0NTUyIsIm5vZGUiLCJ0b2tlbnMiLCJydWxlU2V0Tm9kZXMiLCJleGVjdXRlIiwibWFwIiwicnVsZVNldE5vZGUiLCJSdWxlU2V0IiwiZnJvbU5vZGVBbmRUb2tlbnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGdCQUFNQyxjQUFOLENBQXFCLFlBQXJCLENBQXJCOztJQUVxQkMsUTtBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs0QkFFT0MsUSxFQUFVO0FBQUE7O0FBQ2hCQSxNQUFBQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLFFBQUEsS0FBSSxDQUFDSCxLQUFMLENBQVdJLE9BQVgsQ0FBbUJELE9BQW5CO0FBQ0QsT0FGRDtBQUdEOzs7NEJBRU9FLFEsRUFBVTtBQUNoQixXQUFLTCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJHLFFBQW5CO0FBQ0Q7OzswQkFFS0MsUyxFQUFXQyxNLEVBQVE7QUFDdkIsVUFBTUMsR0FBRyxHQUFHLEtBQUtSLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFDRCxHQUFELEVBQU1MLE9BQU4sRUFBa0I7QUFDOUMsWUFBTU8sVUFBVSxHQUFHUCxPQUFPLENBQUNRLEtBQVIsQ0FBY0wsU0FBZCxFQUF5QkMsTUFBekIsQ0FBbkI7QUFFQUMsUUFBQUEsR0FBRyxJQUFJRSxVQUFQO0FBRUEsZUFBT0YsR0FBUDtBQUNELE9BTlcsRUFNVCxFQU5TLENBQVo7QUFRQSxhQUFPQSxHQUFQO0FBQ0Q7OztzQ0FFd0JJLEksRUFBTUMsTSxFQUFRO0FBQ3JDLFVBQU1DLFlBQVksR0FBR2xCLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUJILElBQXJCLENBQXJCO0FBQUEsVUFDTVosS0FBSyxHQUFHYyxZQUFZLENBQUNFLEdBQWIsQ0FBaUIsVUFBQ0MsV0FBRCxFQUFpQjtBQUN4QyxZQUFNTCxJQUFJLEdBQUdLLFdBQWI7QUFBQSxZQUEwQjtBQUNwQmQsUUFBQUEsT0FBTyxHQUFHZSxvQkFBUUMsaUJBQVIsQ0FBMEJQLElBQTFCLEVBQWdDQyxNQUFoQyxDQURoQjs7QUFHQSxlQUFPVixPQUFQO0FBQ0QsT0FMTyxDQURkO0FBQUEsVUFPTUYsUUFBUSxHQUFHLElBQUlGLFFBQUosQ0FBYUMsS0FBYixDQVBqQjtBQVNBLGFBQU9DLFFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gXCJvY2NhbS1kb21cIjtcblxuaW1wb3J0IFJ1bGVTZXQgZnJvbSBcIi4vcnVsZVNldFwiO1xuXG5jb25zdCBydWxlU2V0UXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihcIi8qL3J1bGVTZXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVTZXRzIHtcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIH1cblxuICB1bnNoaWZ0KHJ1bGVTZXRzKSB7XG4gICAgcnVsZVNldHMuZm9yRWFjaCgocnVsZVNldCkgPT4ge1xuICAgICAgdGhpcy5hcnJheS51bnNoaWZ0KHJ1bGVTZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgZm9yRWFjaChjYWxsYmFjaykge1xuICAgIHRoaXMuYXJyYXkuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhc0NTUyhjbGFzc05hbWUsIGluZGVudCkge1xuICAgIGNvbnN0IGNzcyA9IHRoaXMuYXJyYXkucmVkdWNlKChjc3MsIHJ1bGVTZXQpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVTZXRDU1MgPSBydWxlU2V0LmFzQ1NTKGNsYXNzTmFtZSwgaW5kZW50KTtcblxuICAgICAgY3NzICs9IHJ1bGVTZXRDU1M7XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSwgXCJcIik7XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICAgIGNvbnN0IHJ1bGVTZXROb2RlcyA9IHJ1bGVTZXRRdWVyeS5leGVjdXRlKG5vZGUpLFxuICAgICAgICAgIGFycmF5ID0gcnVsZVNldE5vZGVzLm1hcCgocnVsZVNldE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBydWxlU2V0Tm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICBydWxlU2V0ID0gUnVsZVNldC5mcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZVNldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlU2V0cyA9IG5ldyBSdWxlU2V0cyhhcnJheSk7XG5cbiAgICByZXR1cm4gcnVsZVNldHM7XG4gIH1cbn1cbiJdfQ==