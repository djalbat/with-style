'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'getParseTree',
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
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      // try {
      var parseTree = this.getParseTree();

      this.hideError();

      this.setParseTree(parseTree);
      // } catch (error) {
      //   this.showError();
      //
      //   this.clearParseTree();
      // }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

      return [React.createElement(
        'h1',
        null,
        'CSS example'
      ), React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'Lexical entries'
          ),
          React.createElement(LexicalEntriesTextarea, { onKeyUp: keyUpHandler }),
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Parse tree'
          ),
          React.createElement(ParseTreeTextarea, null),
          React.createElement(
            'h2',
            null,
            'Content'
          ),
          React.createElement(ContentTextarea, { onKeyUp: keyUpHandler })
        )
      )];
    }
  }, {
    key: 'initialise',
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
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJlYXN5TGF5b3V0IiwiY3NzQk5GIiwiQ1NTTGV4ZXIiLCJDU1NQYXJzZXIiLCJjc3NFbnRyaWVzIiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIkVsZW1lbnQiLCJTaXplYWJsZUVsZW1lbnQiLCJWaWV3IiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImNzc0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsImluaXRpYWxDb250ZW50Iiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwidmlldyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFBQSxJQUNNQyxhQUFhRCxRQUFRLGFBQVIsQ0FEbkI7O0FBR0EsSUFBTUUsU0FBU0YsUUFBUSxZQUFSLENBQWY7QUFBQSxJQUNNRyxXQUFXSCxRQUFRLGNBQVIsQ0FEakI7QUFBQSxJQUVN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LFVBQUw7O0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBbkZnQi9CLE87O0FBc0ZuQmtDLE9BQU9DLE1BQVAsQ0FBY2pDLElBQWQsRUFBb0I7QUFDbEJrQyxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJ0QyxJQUFqQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpLFxuICAgICAgZWFzeUxheW91dCA9IHJlcXVpcmUoJ2Vhc3ktbGF5b3V0Jyk7XG5cbmNvbnN0IGNzc0JORiA9IHJlcXVpcmUoJy4uL2Nzcy9ibmYnKSxcbiAgICAgIENTU0xleGVyID0gcmVxdWlyZSgnLi4vY3NzL2xleGVyJyksXG4gICAgICBDU1NQYXJzZXIgPSByZXF1aXJlKCcuLi9jc3MvcGFyc2VyJyksXG4gICAgICBjc3NFbnRyaWVzID0gcmVxdWlyZSgnLi4vY3NzL2VudHJpZXMnKSxcbiAgICAgIEJORlRleHRhcmVhID0gcmVxdWlyZSgnLi90ZXh0YXJlYS9ibmYnKSxcbiAgICAgIENvbnRlbnRUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvY29udGVudCcpLFxuICAgICAgUGFyc2VUcmVlVGV4dGFyZWEgPSByZXF1aXJlKCcuL3RleHRhcmVhL3BhcnNlVHJlZScpLFxuICAgICAgTWFpblZlcnRpY2FsU3BsaXR0ZXIgPSByZXF1aXJlKCcuL3ZlcnRpY2FsU3BsaXR0ZXIvbWFpbicpLFxuICAgICAgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXMnKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5LFxuICAgICAgeyBTaXplYWJsZUVsZW1lbnQgfSA9IGVhc3lMYXlvdXQ7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCksXG4gICAgICAgICAgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cblx0XHRcdCAgICBjc3NMZXhlciA9IENTU0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGNzc1BhcnNlciA9IENTU1BhcnNlci5mcm9tQk5GKGJuZiksXG4gICAgICAgICAgdG9rZW5zID0gY3NzTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGNzc1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKCkge1xuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmhpZGVFcnJvcigpO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICB0aGlzLnNob3dFcnJvcigpO1xuICAgIC8vXG4gICAgLy8gICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8aDE+XG4gICAgICAgIENTUyBleGFtcGxlXG4gICAgICA8L2gxPixcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICA8U2l6ZWFibGVFbGVtZW50PlxuICAgICAgICAgIDxoMj5MZXhpY2FsIGVudHJpZXM8L2gyPlxuICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICA8aDI+Qk5GPC9oMj5cbiAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRWxlbWVudD5cbiAgICAgICAgPE1haW5WZXJ0aWNhbFNwbGl0dGVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGgyPlBhcnNlIHRyZWU8L2gyPlxuICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDxoMj5Db250ZW50PC9oMj5cbiAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGluaXRpYWxDb250ZW50ID0gJycsXG4gICAgICAgICAgZW50cmllcyA9IGNzc0VudHJpZXMsIC8vL1xuICAgICAgICAgIGJuZiA9IGNzc0JORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGVudHJpZXM7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXdcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==