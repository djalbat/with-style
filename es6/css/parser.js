'use strict';

import { BNFLexer } from 'occam-lexers';
import { BNFParser, CommonParser } from 'occam-parsers';

import bnf from './bnf';

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class CSSParser extends CommonParser {
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
