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

var LexicalEntriesTextarea = /*#__PURE__*/function (_InputElement) {
  _inherits(LexicalEntriesTextarea, _InputElement);

  var _super = _createSuper(LexicalEntriesTextarea);

  function LexicalEntriesTextarea(selector, changeHandler, keyUpHandler) {
    var _this;

    _classCallCheck(this, LexicalEntriesTextarea);

    _this = _super.call(this, selector, changeHandler);

    if (keyUpHandler) {
      _this.onKeyUp(keyUpHandler);
    }

    return _this;
  }

  _createClass(LexicalEntriesTextarea, [{
    key: "onKeyUp",
    value: function onKeyUp(keyUpHandler) {
      this.on('keyUp', keyUpHandler);
    }
  }, {
    key: "getLexicalEntries",
    value: function getLexicalEntries() {
      var value = this.getValue(),
          lexicalEntries = JSON.parse(value);
      return lexicalEntries;
    }
  }, {
    key: "setLexicalEntries",
    value: function setLexicalEntries(lexicalEntries) {
      var value = JSON.stringify(lexicalEntries, null, '  ');
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getLexicalEntries = this.getLexicalEntries.bind(this),
          setLexicalEntries = this.setLexicalEntries.bind(this);
      return {
        getLexicalEntries: getLexicalEntries,
        setLexicalEntries: setLexicalEntries
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _easy.InputElement.fromProperties(LexicalEntriesTextarea, properties);
    }
  }]);

  return LexicalEntriesTextarea;
}(_easy.InputElement);

exports["default"] = LexicalEntriesTextarea;

_defineProperty(LexicalEntriesTextarea, "tagName", 'textarea');

_defineProperty(LexicalEntriesTextarea, "defaultProperties", {
  className: 'lexical-entries',
  spellCheck: 'false'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxleGljYWxFbnRyaWVzLmpzIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJzZWxlY3RvciIsImNoYW5nZUhhbmRsZXIiLCJrZXlVcEhhbmRsZXIiLCJvbktleVVwIiwib24iLCJ2YWx1ZSIsImdldFZhbHVlIiwibGV4aWNhbEVudHJpZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsImdldExleGljYWxFbnRyaWVzIiwiYmluZCIsInNldExleGljYWxFbnRyaWVzIiwicHJvcGVydGllcyIsIklucHV0RWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLHNCOzs7OztBQUNuQixrQ0FBWUMsUUFBWixFQUFzQkMsYUFBdEIsRUFBcUNDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUE7O0FBQ2pELDhCQUFNRixRQUFOLEVBQWdCQyxhQUFoQjs7QUFFQSxRQUFJQyxZQUFKLEVBQWtCO0FBQ2hCLFlBQUtDLE9BQUwsQ0FBYUQsWUFBYjtBQUNEOztBQUxnRDtBQU1sRDs7Ozs0QkFFT0EsWSxFQUFjO0FBQ3BCLFdBQUtFLEVBQUwsQ0FBUSxPQUFSLEVBQWlCRixZQUFqQjtBQUNEOzs7d0NBRW1CO0FBQ2xCLFVBQU1HLEtBQUssR0FBRyxLQUFLQyxRQUFMLEVBQWQ7QUFBQSxVQUNNQyxjQUFjLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixLQUFYLENBRHZCO0FBR0EsYUFBT0UsY0FBUDtBQUNEOzs7c0NBRWlCQSxjLEVBQWdCO0FBQ2hDLFVBQU1GLEtBQUssR0FBR0csSUFBSSxDQUFDRSxTQUFMLENBQWVILGNBQWYsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBZDtBQUVBLFdBQUtJLFFBQUwsQ0FBY04sS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNTyxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBMUI7QUFBQSxVQUNNQyxpQkFBaUIsR0FBRyxLQUFLQSxpQkFBTCxDQUF1QkQsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FEMUI7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLGlCQUFpQixFQUFqQkEsaUJBRE07QUFFTkUsUUFBQUEsaUJBQWlCLEVBQWpCQTtBQUZNLE9BQVI7QUFJRDs7O21DQVNxQkMsVSxFQUFZO0FBQUUsYUFBT0MsbUJBQWFDLGNBQWIsQ0FBNEJsQixzQkFBNUIsRUFBb0RnQixVQUFwRCxDQUFQO0FBQXlFOzs7O0VBM0MzREMsa0I7Ozs7Z0JBQS9CakIsc0IsYUFvQ0YsVTs7Z0JBcENFQSxzQix1QkFzQ1E7QUFDekJtQixFQUFBQSxTQUFTLEVBQUUsaUJBRGM7QUFFekJDLEVBQUFBLFVBQVUsRUFBRTtBQUZhLEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gJ2Vhc3knO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXhpY2FsRW50cmllc1RleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIsIGtleVVwSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKTtcblxuICAgIGlmIChrZXlVcEhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25LZXlVcChrZXlVcEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5VXAoa2V5VXBIYW5kbGVyKSB7XG4gICAgdGhpcy5vbigna2V5VXAnLCBrZXlVcEhhbmRsZXIpO1xuICB9XG5cbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgJyAgJyk7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0TGV4aWNhbEVudHJpZXMgPSB0aGlzLnNldExleGljYWxFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldExleGljYWxFbnRyaWVzLFxuICAgICAgc2V0TGV4aWNhbEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gJ3RleHRhcmVhJztcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGV4aWNhbC1lbnRyaWVzJyxcbiAgICBzcGVsbENoZWNrOiAnZmFsc2UnXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhMZXhpY2FsRW50cmllc1RleHRhcmVhLCBwcm9wZXJ0aWVzKTsgfVxufVxuIl19