'use strict';

const lexers = require('occam-lexers'),
      parsers = require('occam-parsers');

const bnf = require('./bnf');

const { BNFLexer } = lexers,
      { BNFParser, CommonParser } = parsers;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

class CSSParser extends CommonParser {
  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          cssParser = new CSSParser(rules);

    return cssParser;
  }

  static fromNothing() {
    const cssParser = CSSParser.fromBNF(bnf);

    return cssParser;
  }
}

Object.assign(CSSParser, {
  bnf
});

module.exports = CSSParser;
