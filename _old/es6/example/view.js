"use strict";

import { Element } from "easy";
import { SizeableElement } from "easy-layout";

import cssBNF from "../css/bnf";
import CSSLexer from "../css/lexer";
import CSSParser from "../css/parser";
import cssEntries from "../css/entries";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import MainVerticalSplitter from "./verticalSplitter/main";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

export default class View extends Element {
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
          <h2>
            Lexical entries
          </h2>
          <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
          <h2>
            BNF
          </h2>
          <BNFTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>
            Parse tree
          </h2>
          <ParseTreeTextarea />
          <h2>
            Content
          </h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </div>
      </div>

    ]);
  }

  initialise() {
    this.assignContext();

    const initialContent = "",
          entries = cssEntries, ///
          bnf = cssBNF, ///
          content = initialContent, ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}
