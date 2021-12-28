"use strict";

import { CommonLexer } from "occam-lexers";

import entries from "./entries";

export default class CSSLexer extends CommonLexer {
  static entries = entries;

  static RegularExpressionToken = null;

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }
}
