'use strict';

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

var ContentTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(ContentTextarea, _InputElement);

  var _super = _createSuper(ContentTextarea);

  function ContentTextarea() {
    _classCallCheck(this, ContentTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ContentTextarea, [{
    key: "getContent",
    value: function getContent() {
      var value = this.getValue(),
          content = value; ///

      return content;
    }
  }, {
    key: "setContent",
    value: function setContent(content) {
      var value = content;
      this.setValue(value);
    }
  }, {
    key: "showError",
    value: function showError() {
      this.addClass('error');
    }
  }, {
    key: "hideError",
    value: function hideError() {
      this.removeClass('error');
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getContent = this.getContent.bind(this),
          setContent = this.setContent.bind(this),
          showError = this.showError.bind(this),
          hideError = this.hideError.bind(this);
      return {
        getContent: getContent,
        setContent: setContent,
        showError: showError,
        hideError: hideError
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _easy.InputElement.fromProperties(ContentTextarea, properties);
    }
  }]);

  return ContentTextarea;
}(_easy.InputElement);

exports["default"] = ContentTextarea;

_defineProperty(ContentTextarea, "tagName", 'textarea');

_defineProperty(ContentTextarea, "defaultProperties", {
  className: 'content',
  spellCheck: 'false'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRlbnQuanMiXSwibmFtZXMiOlsiQ29udGVudFRleHRhcmVhIiwidmFsdWUiLCJnZXRWYWx1ZSIsImNvbnRlbnQiLCJzZXRWYWx1ZSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJnZXRDb250ZW50IiwiYmluZCIsInNldENvbnRlbnQiLCJzaG93RXJyb3IiLCJoaWRlRXJyb3IiLCJwcm9wZXJ0aWVzIiwiSW5wdXRFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJzcGVsbENoZWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7OztpQ0FDTjtBQUNYLFVBQU1DLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxPQUFPLEdBQUdGLEtBRGhCLENBRFcsQ0FFWTs7QUFFdkIsYUFBT0UsT0FBUDtBQUNEOzs7K0JBRVVBLE8sRUFBUztBQUNsQixVQUFNRixLQUFLLEdBQUdFLE9BQWQ7QUFFQSxXQUFLQyxRQUFMLENBQWNILEtBQWQ7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0ksUUFBTCxDQUFjLE9BQWQ7QUFDRDs7O2dDQUVXO0FBQ1YsV0FBS0MsV0FBTCxDQUFpQixPQUFqQjtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNQyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbkI7QUFBQSxVQUNNQyxVQUFVLEdBQUcsS0FBS0EsVUFBTCxDQUFnQkQsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEbkI7QUFBQSxVQUVNRSxTQUFTLEdBQUcsS0FBS0EsU0FBTCxDQUFlRixJQUFmLENBQW9CLElBQXBCLENBRmxCO0FBQUEsVUFHTUcsU0FBUyxHQUFHLEtBQUtBLFNBQUwsQ0FBZUgsSUFBZixDQUFvQixJQUFwQixDQUhsQjtBQUtBLGFBQVE7QUFDTkQsUUFBQUEsVUFBVSxFQUFWQSxVQURNO0FBRU5FLFFBQUFBLFVBQVUsRUFBVkEsVUFGTTtBQUdOQyxRQUFBQSxTQUFTLEVBQVRBLFNBSE07QUFJTkMsUUFBQUEsU0FBUyxFQUFUQTtBQUpNLE9BQVI7QUFNRDs7O21DQVNxQkMsVSxFQUFZO0FBQUUsYUFBT0MsbUJBQWFDLGNBQWIsQ0FBNEJkLGVBQTVCLEVBQTZDWSxVQUE3QyxDQUFQO0FBQWtFOzs7O0VBM0MzREMsa0I7Ozs7Z0JBQXhCYixlLGFBb0NGLFU7O2dCQXBDRUEsZSx1QkFzQ1E7QUFDekJlLEVBQUFBLFNBQVMsRUFBRSxTQURjO0FBRXpCQyxFQUFBQSxVQUFVLEVBQUU7QUFGYSxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBJbnB1dEVsZW1lbnQgfSBmcm9tICdlYXN5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0Q29udGVudCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBjb250ZW50ID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzZXRDb250ZW50KGNvbnRlbnQpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGNvbnRlbnQ7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHNob3dFcnJvcigpIHtcbiAgICB0aGlzLmFkZENsYXNzKCdlcnJvcicpO1xuICB9XG5cbiAgaGlkZUVycm9yKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldENvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRDb250ZW50ID0gdGhpcy5zZXRDb250ZW50LmJpbmQodGhpcyksXG4gICAgICAgICAgc2hvd0Vycm9yID0gdGhpcy5zaG93RXJyb3IuYmluZCh0aGlzKSxcbiAgICAgICAgICBoaWRlRXJyb3IgPSB0aGlzLmhpZGVFcnJvci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRDb250ZW50LFxuICAgICAgc2V0Q29udGVudCxcbiAgICAgIHNob3dFcnJvcixcbiAgICAgIGhpZGVFcnJvclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSAndGV4dGFyZWEnO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6ICdjb250ZW50JyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDb250ZW50VGV4dGFyZWEsIHByb3BlcnRpZXMpOyB9XG59XG4iXX0=