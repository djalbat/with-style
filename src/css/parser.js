"use strict";

import { CommonParser } from "occam-parsers";

import bnf from "./bnf";

export default class CSSParser extends CommonParser {
  static bnf = bnf;

  static fromNothing() { return CommonParser.fromNothing(CSSParser); }

  static fromBNF(bnf) { return CommonParser.fromBNF(CSSParser, bnf); }

  static fromRules(rules) { return CommonParser.fromRules(CSSParser, rules); }
}
