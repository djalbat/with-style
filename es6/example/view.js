'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const cssBNF = require('../css/bnf'),
      CSSLexer = require('../css/lexer'),
      CSSParser = require('../css/parser'),
      cssEntries = require('../css/entries'),
      BNFTextarea = require('./textarea/bnf'),
      ContentTextarea = require('./textarea/content'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      MainVerticalSplitter = require('./verticalSplitter/main'),
      LexicalEntriesTextarea = require('./textarea/lexicalEntries');

const { Element } = easy,
      { SizeableElement } = easyLayout;

class View extends Element {
  getParseTree() {
    let parseTree = null;

    const bnf = this.getBNF(),
          content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
			    cssLexer = CSSLexer.fromEntries(entries),
          cssParser = CSSParser.fromBNF(bnf),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

    if (node !== null) {
      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler() {
    try {
      const parseTree = this.getParseTree();

      this.hideError();

      this.setParseTree(parseTree);
    } catch (error) {
      this.showError();

      this.clearParseTree();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <h1>
        CSS example
      </h1>,
      <div className="columns">
        <SizeableElement>
          <h2>Lexical entries</h2>
          <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
          <h2>BNF</h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>Parse tree</h2>
          <ParseTreeTextarea />
          <h2>Content</h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();

    const initialContent = '',
          entries = cssEntries, ///
          bnf = cssBNF, ///
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
