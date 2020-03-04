'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy'),
    easyLayout = require('easy-layout');

var cssBNF = require('../css/bnf'),
    CSSLexer = require('../css/lexer'),
    CSSParser = require('../css/parser'),
    cssEntries = require('../css/entries'),
    BNFTextarea = require('./textarea/bnf'),
    ContentTextarea = require('./textarea/content'),
    ParseTreeTextarea = require('./textarea/parseTree'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    LexicalEntriesTextarea = require('./textarea/lexicalEntries');

var Element = easy.Element,
    SizeableElement = easyLayout.SizeableElement;

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
      cssLexer = CSSLexer.fromEntries(entries),
          cssParser = CSSParser.fromBNF(bnf),
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
      // try {
      var parseTree = this.getParseTree();
      this.hideError();
      this.setParseTree(parseTree); // } catch (error) {
      //   this.showError();
      //
      //   this.clearParseTree();
      // }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);
      return [React.createElement("h1", null, "CSS example"), React.createElement("div", {
        className: "columns"
      }, React.createElement(SizeableElement, null, React.createElement("h2", null, "Lexical entries"), React.createElement(LexicalEntriesTextarea, {
        onKeyUp: keyUpHandler
      }), React.createElement("h2", null, "BNF"), React.createElement(BNFTextarea, {
        onKeyUp: keyUpHandler
      })), React.createElement(MainVerticalSplitter, null), React.createElement("div", {
        className: "column"
      }, React.createElement("h2", null, "Parse tree"), React.createElement(ParseTreeTextarea, null), React.createElement("h2", null, "Content"), React.createElement(ContentTextarea, {
        onKeyUp: keyUpHandler
      })))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var initialContent = '',
          entries = cssEntries,
          ///
      bnf = cssBNF,
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
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiY3NzQk5GIiwiQ1NTTGV4ZXIiLCJDU1NQYXJzZXIiLCJjc3NFbnRyaWVzIiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJWaWV3IiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImNzc0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7QUFBQSxJQUNNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFELENBRDFCOztBQUdBLElBQU1FLE1BQU0sR0FBR0YsT0FBTyxDQUFDLFlBQUQsQ0FBdEI7QUFBQSxJQUNNRyxRQUFRLEdB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LFVBQUwsQ0FBZ0J2QixPQUFoQjtBQUNBLFdBQUt3QixpQkFBTCxDQUF1QnRCLGNBQXZCO0FBRUEsV0FBS2dCLFlBQUw7QUFDRDs7O21DQUVxQkQsVSxFQUFZO0FBQ2hDLFVBQU1RLElBQUksR0FBRy9CLE9BQU8sQ0FBQ2dDLGNBQVIsQ0FBdUI5QixJQUF2QixFQUE2QnFCLFVBQTdCLENBQWI7QUFFQVEsTUFBQUEsSUFBSSxDQUFDRSxVQUFMO0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBbkZnQi9CLE87O0FBc0ZuQmtDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjakMsSUFBZCxFQUFvQjtBQUNsQmtDLEVBQUFBLE9BQU8sRUFBRSxLQURTO0FBRWxCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRCxDQUFwQjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ0QyxJQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKSxcbiAgICAgIGVhc3lMYXlvdXQgPSByZXF1aXJlKCdlYXN5LWxheW91dCcpO1xuXG5jb25zdCBjc3NCTkYgPSByZXF1aXJlKCcuLi9jc3MvYm5mJyksXG4gICAgICBDU1NMZXhlciA9IHJlcXVpcmUoJy4uL2Nzcy9sZXhlcicpLFxuICAgICAgQ1NTUGFyc2VyID0gcmVxdWlyZSgnLi4vY3NzL3BhcnNlcicpLFxuICAgICAgY3NzRW50cmllcyA9IHJlcXVpcmUoJy4uL2Nzcy9lbnRyaWVzJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBDb250ZW50VGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2NvbnRlbnQnKSxcbiAgICAgIFBhcnNlVHJlZVRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9wYXJzZVRyZWUnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIExleGljYWxFbnRyaWVzVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL2xleGljYWxFbnRyaWVzJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldFBhcnNlVHJlZSgpIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpLFxuICAgICAgICAgIGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG5cdFx0XHQgICAgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBjc3NQYXJzZXIgPSBDU1NQYXJzZXIuZnJvbUJORihibmYpLFxuICAgICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcigpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5oaWRlRXJyb3IoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgdGhpcy5zaG93RXJyb3IoKTtcbiAgICAvL1xuICAgIC8vICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMocHJvcGVydGllcykge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPGgxPlxuICAgICAgICBDU1MgZXhhbXBsZVxuICAgICAgPC9oMT4sXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnNcIj5cbiAgICAgICAgPFNpemVhYmxlRWxlbWVudD5cbiAgICAgICAgICA8aDI+TGV4aWNhbCBlbnRyaWVzPC9oMj5cbiAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5QYXJzZSB0cmVlPC9oMj5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8aDI+Q29udGVudDwvaDI+XG4gICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBpbml0aWFsQ29udGVudCA9ICcnLFxuICAgICAgICAgIGVudHJpZXMgPSBjc3NFbnRyaWVzLCAvLy9cbiAgICAgICAgICBibmYgPSBjc3NCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=