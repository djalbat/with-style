'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easyLayout = require("easy-layout");

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

var MainVerticalSplitter = /*#__PURE__*/function (_VerticalSplitter) {
  _inherits(MainVerticalSplitter, _VerticalSplitter);

  var _super = _createSuper(MainVerticalSplitter);

  function MainVerticalSplitter() {
    _classCallCheck(this, MainVerticalSplitter);

    return _super.apply(this, arguments);
  }

  _createClass(MainVerticalSplitter, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var afterSizeableElement = true;
      Object.assign(properties, {
        ///
        afterSizeableElement: afterSizeableElement
      });

      var mainVerticalSplitter = _easyLayout.Splitter.fromProperties(MainVerticalSplitter, properties);

      return mainVerticalSplitter;
    }
  }]);

  return MainVerticalSplitter;
}(_easyLayout.VerticalSplitter);

exports["default"] = MainVerticalSplitter;

_defineProperty(MainVerticalSplitter, "defaultProperties", {
  className: 'main'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpblZlcnRpY2FsU3BsaXR0ZXIiLCJwcm9wZXJ0aWVzIiwiYWZ0ZXJTaXplYWJsZUVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJtYWluVmVydGljYWxTcGxpdHRlciIsIlNwbGl0dGVyIiwiZnJvbVByb3BlcnRpZXMiLCJWZXJ0aWNhbFNwbGl0dGVyIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsb0I7Ozs7Ozs7Ozs7Ozs7bUNBS0dDLFUsRUFBWTtBQUNoQyxVQUFNQyxvQkFBb0IsR0FBRyxJQUE3QjtBQUVBQyxNQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0gsVUFBZCxFQUEwQjtBQUFFO0FBQzFCQyxRQUFBQSxvQkFBb0IsRUFBcEJBO0FBRHdCLE9BQTFCOztBQUlBLFVBQU1HLG9CQUFvQixHQUFHQyxxQkFBU0MsY0FBVCxDQUF3QlAsb0JBQXhCLEVBQThDQyxVQUE5QyxDQUE3Qjs7QUFFQSxhQUFPSSxvQkFBUDtBQUNEOzs7O0VBZitDRyw0Qjs7OztnQkFBN0JSLG9CLHVCQUNRO0FBQ3pCUyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBTcGxpdHRlciwgVmVydGljYWxTcGxpdHRlciB9IGZyb20gJ2Vhc3ktbGF5b3V0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBWZXJ0aWNhbFNwbGl0dGVyIHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogJ21haW4nXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBhZnRlclNpemVhYmxlRWxlbWVudCA9IHRydWU7XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHsgLy8vXG4gICAgICBhZnRlclNpemVhYmxlRWxlbWVudFxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFpblZlcnRpY2FsU3BsaXR0ZXIgPSBTcGxpdHRlci5mcm9tUHJvcGVydGllcyhNYWluVmVydGljYWxTcGxpdHRlciwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gbWFpblZlcnRpY2FsU3BsaXR0ZXI7XG4gIH1cbn1cbiJdfQ==