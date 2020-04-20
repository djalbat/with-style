'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _easyLayout = require("easy-layout");

var _bnf = _interopRequireDefault(require("../css/bnf"));

var _lexer = _interopRequireDefault(require("../css/lexer"));

var _parser = _interopRequireDefault(require("../css/parser"));

var _entries = _interopRequireDefault(require("../css/entries"));

var _bnf2 = _interopRequireDefault(require("./textarea/bnf"));

var _content = _interopRequireDefault(require("./textarea/content"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

var _main = _interopRequireDefault(require("./verticalSplitter/main"));

var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "getParseTree",
    value: function getParseTree() {
      var parseTree = null;

      var bnf = this.getBNF(),
          content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      cssLexer = _lexer["default"].fromEntries(entries),
          cssParser = _parser["default"].fromBNF(bnf),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var parseTree = this.getParseTree();
        this.hideError();
        this.setParseTree(parseTree);
      } catch (error) {
        this.showError();
        this.clearParseTree();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [/*#__PURE__*/React.createElement("h1", null, "CSS example"), /*#__PURE__*/React.createElement("div", {
        className: "columns"
      }, /*#__PURE__*/React.createElement(_easyLayout.SizeableElement, null, /*#__PURE__*/React.createElement("h2", null, "Lexical entries"), /*#__PURE__*/React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }), /*#__PURE__*/React.createElement("h2", null, "BNF"), /*#__PURE__*/React.createElement(_bnf2["default"], {
        onKeyUp: keyUpHandler
      })), /*#__PURE__*/React.createElement(_main["default"], null), /*#__PURE__*/React.createElement("div", {
        className: "column"
      }, /*#__PURE__*/React.createElement("h2", null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null), /*#__PURE__*/React.createElement("h2", null, "Content"), /*#__PURE__*/React.createElement(_content["default"], {
        onKeyUp: keyUpHandler
      })))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var initialContent = '',
          entries = _entries["default"],
          ///
      bnf = _bnf["default"],
          ///
      content = initialContent,
          ///
      lexicalEntries = entries; ///

      this.setBNF(bnf);
      this.setContent(content);
      this.setLexicalEntries(lexicalEntries);
      this.keyUpHandler();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = _easy.Element.fromProperties(View, properties);

      view.initialise();
      return view;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", 'div');

_defineProperty(View, "defaultProperties", {
  className: 'view'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNzc0VudHJpZXMiLCJjc3NCTkYiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7OzttQ0FDSjtBQUNiLFVBQUlDLFNBQVMsR0FBRyxJQUFoQjs7QUFFQSxVQUFNQyxHQUFHLEdBQUcsS0FBS0MsTUFBTCxFQUFaO0FBQUEsVUFDTUMsT0FBTyxHQUFHLEtBQUtDLFVBQUwsRUFEaEI7QUFBQSxVQUVNQyxjQUFjLEdBQUcsS0FBS0MsaUJBQUwsRUFGdkI7QUFBQSxVQUdNQyxPQUFPLEdBQUdGLGNBSGhCO0FBQUEsVUFHZ0M7QUFDMUJHLE1BQUFBLFFBQVEsR0FBR0Msa0JBQVNDLFdBQVQsQ0FBcUJILE9BQXJCLENBSmpCO0FBQUEsVUFLTUksU0FBUyxHQUFHQyxtQkFBVUMsT0FBVixDQUFrQlosR0FBbEIsQ0FMbEI7QUFBQSxVQU1NYSxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQlosT0FBbEIsQ0FOZjtBQUFBLFVBT01hLElBQUksR0FBR0wsU0FBUyxDQUFDTSxLQUFWLENBQWdCSCxNQUFoQixDQVBiOztBQVNBLFVBQUlFLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCaEIsUUFBQUEsU0FBUyxHQUFHZ0IsSUFBSSxDQUFDRSxXQUFMLENBQWlCSixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT2QsU0FBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJO0FBQ0YsWUFBTUEsU0FBUyxHQUFHLEtBQUttQixZQUFMLEVBQWxCO0FBRUEsYUFBS0MsU0FBTDtBQUVBLGFBQUtDLFlBQUwsQ0FBa0JyQixTQUFsQjtBQUNELE9BTkQsQ0FNRSxPQUFPc0IsS0FBUCxFQUFjO0FBQ2QsYUFBS0MsU0FBTDtBQUVBLGFBQUtDLGNBQUw7QUFDRDtBQUNGOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixVQUFNQyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFFQSxhQUFRLGNBRU4sOENBRk0sZUFLTjtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0Usb0JBQUMsMkJBQUQscUJBQ0Usa0RBREYsZUFJRSxvQkFBQywwQkFBRDtBQUF3QixRQUFBLE9BQU8sRUFBRUQ7QUFBakMsUUFKRixlQUtFLHNDQUxGLGVBUUUsb0JBQUMsZ0JBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRUE7QUFBdEIsUUFSRixDQURGLGVBV0Usb0JBQUMsZ0JBQUQsT0FYRixlQVlFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixzQkFDRSw2Q0FERixlQUlFLG9CQUFDLHFCQUFELE9BSkYsZUFLRSwwQ0FMRixlQVFFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQVJGLENBWkYsQ0FMTSxDQUFSO0FBOEJEOzs7aUNBRVk7QUFDWCxXQUFLRSxhQUFMO0FBRUEsVUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQUEsVUFDTXRCLE9BQU8sR0FBR3VCLG1CQURoQjtBQUFBLFVBQzRCO0FBQ3RCN0IsTUFBQUEsR0FBRyxHQUFHOEIsZUFGWjtBQUFBLFVBRW9CO0FBQ2Q1QixNQUFBQSxPQUFPLEdBQUcwQixjQUhoQjtBQUFBLFVBR2dDO0FBQzFCeEIsTUFBQUEsY0FBYyxHQUFHRSxPQUp2QixDQUhXLENBT3FCOztBQUVoQyxXQUFLeUIsTUFBTCxDQUFZL0IsR0FBWjtBQUNBLFdBQUtnQyxVQUFMLENBQWdCOUIsT0FBaEI7QUFDQSxXQUFLK0IsaUJBQUwsQ0FBdUI3QixjQUF2QjtBQUVBLFdBQUtxQixZQUFMO0FBQ0Q7OzttQ0FRcUJELFUsRUFBWTtBQUNoQyxVQUFNVSxJQUFJLEdBQUdDLGNBQVFDLGNBQVIsQ0FBdUJ0QyxJQUF2QixFQUE2QjBCLFVBQTdCLENBQWI7O0FBRUFVLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQWpHK0JDLGE7Ozs7Z0JBQWJyQyxJLGFBcUZGLEs7O2dCQXJGRUEsSSx1QkF1RlE7QUFDekJ3QyxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnZWFzeSc7XG5pbXBvcnQgeyBTaXplYWJsZUVsZW1lbnQgfSBmcm9tICdlYXN5LWxheW91dCc7XG5cbmltcG9ydCBjc3NCTkYgZnJvbSAnLi4vY3NzL2JuZic7XG5pbXBvcnQgQ1NTTGV4ZXIgZnJvbSAnLi4vY3NzL2xleGVyJztcbmltcG9ydCBDU1NQYXJzZXIgZnJvbSAnLi4vY3NzL3BhcnNlcic7XG5pbXBvcnQgY3NzRW50cmllcyBmcm9tICcuLi9jc3MvZW50cmllcyc7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS9ibmYnO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhL2NvbnRlbnQnO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEvcGFyc2VUcmVlJztcbmltcG9ydCBNYWluVmVydGljYWxTcGxpdHRlciBmcm9tICcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbic7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxoMT5cbiAgICAgICAgQ1NTIGV4YW1wbGVcbiAgICAgIDwvaDE+LFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQk5GXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPGgyPlxuICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcnLFxuICAgICAgICAgIGVudHJpZXMgPSBjc3NFbnRyaWVzLCAvLy9cbiAgICAgICAgICBibmYgPSBjc3NCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gJ2Rpdic7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuIl19