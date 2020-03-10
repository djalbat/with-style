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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYmluZCIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImNzc0VudHJpZXMiLCJjc3NCTkYiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJ2aWV3IiwiRWxlbWVudCIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7bUNBQ0o7QUFDYixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBRnZCO0FBQUEsVUFHTUMsT0FBTyxHQUFHRixjQUhoQjtBQUFBLFVBR2dDO0FBQzdCRyxNQUFBQSxRQUFRLEdBQUdDLGtCQUFTQyxXQUFULENBQXFCSCxPQUFyQixDQUpkO0FBQUEsVUFLTUksU0FBUyxHQUFHQyxtQkFBVUMsT0FBVixDQUFrQlosR0FBbEIsQ0FMbEI7QUFBQSxVQU1NYSxNQUFNLEdBQUdOLFFBQVEsQ0FBQ08sUUFBVCxDQUFrQlosT0FBbEIsQ0FOZjtBQUFBLFVBT01hLElBQUksR0FBR0wsU0FBUyxDQUFDTSxLQUFWLENBQWdCSCxNQUFoQixDQVBiOztBQVNBLFVBQUlFLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCaEIsUUFBQUEsU0FBUyxHQUFHZ0IsSUFBSSxDQUFDRSxXQUFMLENBQWlCSixNQUFqQixDQUFaO0FBQ0Q7O0FBRUQsYUFBT2QsU0FBUDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJO0FBQ0YsWUFBTUEsU0FBUyxHQUFHLEtBQUttQixZQUFMLEVBQWxCO0FBRUEsYUFBS0MsU0FBTDtBQUVBLGFBQUtDLFlBQUwsQ0FBa0JyQixTQUFsQjtBQUNELE9BTkQsQ0FNRSxPQUFPc0IsS0FBUCxFQUFjO0FBQ2QsYUFBS0MsU0FBTDtBQUVBLGFBQUtDLGNBQUw7QUFDRDtBQUNGOzs7a0NBRWFDLFUsRUFBWTtBQUN4QixVQUFNQyxZQUFZLEdBQUcsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7QUFFQSxhQUFRLENBRU4sOENBRk0sRUFLTjtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSxvQkFBQywyQkFBRCxRQUNFLGtEQURGLEVBRUUsb0JBQUMsMEJBQUQ7QUFBd0IsUUFBQSxPQUFPLEVBQUVEO0FBQWpDLFFBRkYsRUFHRSxzQ0FIRixFQUlFLG9CQUFDLGdCQUFEO0FBQWEsUUFBQSxPQUFPLEVBQUVBO0FBQXRCLFFBSkYsQ0FERixFQU9FLG9CQUFDLGdCQUFELE9BUEYsRUFRRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDRSw2Q0FERixFQUVFLG9CQUFDLHFCQUFELE9BRkYsRUFHRSwwQ0FIRixFQUlFLG9CQUFDLG1CQUFEO0FBQWlCLFFBQUEsT0FBTyxFQUFFQTtBQUExQixRQUpGLENBUkYsQ0FMTSxDQUFSO0FBc0JEOzs7aUNBRVk7QUFDWCxXQUFLRSxhQUFMO0FBRUEsVUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQUEsVUFDTXRCLE9BQU8sR0FBR3VCLG1CQURoQjtBQUFBLFVBQzRCO0FBQ3RCN0IsTUFBQUEsR0FBRyxHQUFHOEIsZUFGWjtBQUFBLFVBRW9CO0FBQ2Q1QixNQUFBQSxPQUFPLEdBQUcwQixjQUhoQjtBQUFBLFVBR2dDO0FBQzFCeEIsTUFBQUEsY0FBYyxHQUFHRSxPQUp2QixDQUhXLENBT3FCOztBQUVoQyxXQUFLeUIsTUFBTCxDQUFZL0IsR0FBWjtBQUNBLFdBQUtnQyxVQUFMLENBQWdCOUIsT0FBaEI7QUFDQSxXQUFLK0IsaUJBQUwsQ0FBdUI3QixjQUF2QjtBQUVBLFdBQUtxQixZQUFMO0FBQ0Q7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNVSxJQUFJLEdBQUdDLGNBQVFDLGNBQVIsQ0FBdUJ0QyxJQUF2QixFQUE2QjBCLFVBQTdCLENBQWI7O0FBRUFVLE1BQUFBLElBQUksQ0FBQ0csVUFBTDtBQUVBLGFBQU9ILElBQVA7QUFDRDs7OztFQW5GK0JDLGE7OztBQXNGbENHLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjekMsSUFBZCxFQUFvQjtBQUNsQjBDLEVBQUFBLE9BQU8sRUFBRSxLQURTO0FBRWxCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRCxDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJ2Vhc3knO1xuaW1wb3J0IHsgU2l6ZWFibGVFbGVtZW50IH0gZnJvbSAnZWFzeS1sYXlvdXQnO1xuXG5pbXBvcnQgY3NzQk5GIGZyb20gJy4uL2Nzcy9ibmYnO1xuaW1wb3J0IENTU0xleGVyIGZyb20gJy4uL2Nzcy9sZXhlcic7XG5pbXBvcnQgQ1NTUGFyc2VyIGZyb20gJy4uL2Nzcy9wYXJzZXInO1xuaW1wb3J0IGNzc0VudHJpZXMgZnJvbSAnLi4vY3NzL2VudHJpZXMnO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEvYm5mJztcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS9jb250ZW50JztcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhL3BhcnNlVHJlZSc7XG5pbXBvcnQgTWFpblZlcnRpY2FsU3BsaXR0ZXIgZnJvbSAnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cblx0XHRcdCAgICBjc3NMZXhlciA9IENTU0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+XG4gICAgICAgIENTUyBleGFtcGxlXG4gICAgICA8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJycsXG4gICAgICAgICAgZW50cmllcyA9IGNzc0VudHJpZXMsIC8vL1xuICAgICAgICAgIGJuZiA9IGNzc0JORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG4iXX0=