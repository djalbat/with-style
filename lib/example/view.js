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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
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
      return [React.createElement("h1", null, "CSS example"), React.createElement("div", {
        className: "columns"
      }, React.createElement(_easyLayout.SizeableElement, null, React.createElement("h2", null, "Lexical entries"), React.createElement(_lexicalEntries["default"], {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(_bnf2["default"], {
        onKeyUp: keyUpHandler
      })), React.createElement(_main["default"], null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(_parseTree["default"], null), React.createElement("h2", null, "Content"), React.createElement(_content["default"], {
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
Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNzc0VudHJpZXMiLCJjc3NCTkYiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7bUNBQ0o7QUFDYixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBRnZCO0FBQUEsVUFHTUMsT0FBTyxHQUFHRixjQUhoQjtBQUFBLFVBR2dDO0FBQzFCRyxNQUFBQSxRQUFRLEdBQUdDLGtCQUFTQyxXQUFULENBQXFCSCxPQUFyQixDQUpqQjtBQUFBLFVBS01JLFNBQVMsR0FBR0MsbUJBQVVDLE9BQVYsQ0FBa0JaLEdBQWxCLENBTGxCO0FBQUEsVUFNTWEsTUFBTSxHQUFHTixRQUFRLENBQUNPLFFBQVQsQ0FBa0JaLE9BQWxCLENBTmY7QUFBQSxVQU9NYSxJQUFJLEdBQUdMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkgsTUFBaEIsQ0FQYjs7QUFTQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQmhCLFFBQUFBLFNBQVMsR0FBR2dCLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkosTUFBakIsQ0FBWjtBQUNEOztBQUVELGFBQU9kLFNBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLFNBQVMsR0FBRyxLQUFLbUIsWUFBTCxFQUFsQjtBQUVBLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxZQUFMLENBQWtCckIsU0FBbEI7QUFDRCxPQU5ELENBTUUsT0FBT3NCLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxjQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsVUFBTUMsWUFBWSxHQUFHLEtBQUtBLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQXJCO0FBRUEsYUFBUSxDQUVOLDhDQUZNLEVBS047QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0Usb0JBQUMsMkJBQUQsUUFDRSxrREFERixFQUlFLG9CQUFDLDBCQUFEO0FBQXdCLFFBQUEsT0FBTyxFQUFFRDtBQUFqQyxRQUpGLEVBS0Usc0NBTEYsRUFRRSxvQkFBQyxnQkFBRDtBQUFhLFFBQUEsT0FBTyxFQUFFQTtBQUF0QixRQVJGLENBREYsRUFXRSxvQkFBQyxnQkFBRCxPQVhGLEVBWUU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0UsNkNBREYsRUFJRSxvQkFBQyxxQkFBRCxPQUpGLEVBS0UsMENBTEYsRUFRRSxvQkFBQyxtQkFBRDtBQUFpQixRQUFBLE9BQU8sRUFBRUE7QUFBMUIsUUFSRixDQVpGLENBTE0sQ0FBUjtBQThCRDs7O2lDQUVZO0FBQ1gsV0FBS0UsYUFBTDtBQUVBLFVBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUFBLFVBQ010QixPQUFPLEdBQUd1QixtQkFEaEI7QUFBQSxVQUM0QjtBQUN0QjdCLE1BQUFBLEdBQUcsR0FBRzhCLGVBRlo7QUFBQSxVQUVvQjtBQUNkNUIsTUFBQUEsT0FBTyxHQUFHMEIsY0FIaEI7QUFBQSxVQUdnQztBQUMxQnhCLE1BQUFBLGNBQWMsR0FBR0UsT0FKdkIsQ0FIVyxDQU9xQjs7QUFFaEMsV0FBS3lCLE1BQUwsQ0FBWS9CLEdBQVo7QUFDQSxXQUFLZ0MsVUFBTCxDQUFnQjlCLE9BQWhCO0FBQ0EsV0FBSytCLGlCQUFMLENBQXVCN0IsY0FBdkI7QUFFQSxXQUFLcUIsWUFBTDtBQUNEOzs7bUNBRXFCRCxVLEVBQVk7QUFDaEMsVUFBTVUsSUFBSSxHQUFHQyxjQUFRQyxjQUFSLENBQXVCdEMsSUFBdkIsRUFBNkIwQixVQUE3QixDQUFiOztBQUVBVSxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUEzRitCQyxhOzs7QUE4RmxDRyxNQUFNLENBQUNDLE1BQVAsQ0FBY3pDLElBQWQsRUFBb0I7QUFDbEIwQyxFQUFBQSxPQUFPLEVBQUUsS0FEUztBQUVsQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRkQsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICdlYXN5JztcbmltcG9ydCB7IFNpemVhYmxlRWxlbWVudCB9IGZyb20gJ2Vhc3ktbGF5b3V0JztcblxuaW1wb3J0IGNzc0JORiBmcm9tICcuLi9jc3MvYm5mJztcbmltcG9ydCBDU1NMZXhlciBmcm9tICcuLi9jc3MvbGV4ZXInO1xuaW1wb3J0IENTU1BhcnNlciBmcm9tICcuLi9jc3MvcGFyc2VyJztcbmltcG9ydCBjc3NFbnRyaWVzIGZyb20gJy4uL2Nzcy9lbnRyaWVzJztcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhL2JuZic7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEvY29udGVudCc7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS9wYXJzZVRyZWUnO1xuaW1wb3J0IE1haW5WZXJ0aWNhbFNwbGl0dGVyIGZyb20gJy4vdmVydGljYWxTcGxpdHRlci9tYWluJztcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zaG93RXJyb3IoKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPlxuICAgICAgICBDU1MgZXhhbXBsZVxuICAgICAgPC9oMT4sXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvU2l6ZWFibGVFbGVtZW50PlxuICAgICAgICA8TWFpblZlcnRpY2FsU3BsaXR0ZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJycsXG4gICAgICAgICAgZW50cmllcyA9IGNzc0VudHJpZXMsIC8vL1xuICAgICAgICAgIGJuZiA9IGNzc0JORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG4iXX0=