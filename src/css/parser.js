"use strict";

import { BNFLexer } from "occam-lexers";
import { BNFParser, CommonParser } from "occam-parsers";

import bnf from "./bnf";

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing();

export default class CSSParser extends CommonParser {
  static bnf = bnf;

  static fromBNF(bnf) {
    const tokens = bnfLexer.tokensFromBNF(bnf),
          rules = bnfParser.rulesFromTokens(tokens),
          cssParser = CSSParser.fromRules(rules);

    return cssParser;
  }

  static fromRules(rules) { return CommonParser.fromRules(CSSParser, rules); }

  static fromNothing() { return CSSParser.fromBNF(bnf); }
}
