"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BNFTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(BNFTextarea, _InputElement);

  var _super = _createSuper(BNFTextarea);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(BNFTextarea, [{
    key: "getBNF",
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: "setBNF",
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);
      return {
        getBNF: getBNF,
        setBNF: setBNF
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _easy.InputElement.fromProperties(BNFTextarea, properties);
    }
  }]);

  return BNFTextarea;
}(_easy.InputElement);

exports["default"] = BNFTextarea;

_defineProperty(BNFTextarea, "tagName", "textarea");

_defineProperty(BNFTextarea, "defaultProperties", {
  className: "bnf",
  spellCheck: "false"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRWYWx1ZSIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJwcm9wZXJ0aWVzIiwiSW5wdXRFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxHQUFHLEdBQUdGLEtBRFosQ0FETyxDQUVhOztBQUVwQixhQUFPRSxHQUFQO0FBQ0Q7OzsyQkFFTUEsRyxFQUFLO0FBQ1YsVUFBTUYsS0FBSyxHQUFHRSxHQUFkLENBRFUsQ0FDVTs7QUFFcEIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1JLE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBZjtBQUFBLFVBQ01DLE1BQU0sR0FBRyxLQUFLQSxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEZjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsTUFBTSxFQUFOQSxNQURNO0FBRU5FLFFBQUFBLE1BQU0sRUFBTkE7QUFGTSxPQUFSO0FBSUQ7OzttQ0FTcUJDLFUsRUFBWTtBQUFFLGFBQU9DLG1CQUFhQyxjQUFiLENBQTRCVixXQUE1QixFQUF5Q1EsVUFBekMsQ0FBUDtBQUE4RDs7OztFQS9CM0RDLGtCOzs7O2dCQUFwQlQsVyxhQXdCRixVOztnQkF4QkVBLFcsdUJBMEJRO0FBQ3pCVyxFQUFBQSxTQUFTLEVBQUUsS0FEYztBQUV6QkMsRUFBQUEsVUFBVSxFQUFFO0FBRmEsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBJbnB1dEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBibmYgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldEJORihibmYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGJuZjsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Qk5GLFxuICAgICAgc2V0Qk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQk5GVGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG4iXX0=