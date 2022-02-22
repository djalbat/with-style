"use strict";

import { CommonLexer, WhitespaceToken, EndOfLineNonSignificantToken, DoublyQuotedStringLiteralToken } from "occam-lexers";

import entries from "./entries";

export default class CSSLexer extends CommonLexer {
  static entries = entries;

  static EndOfLineToken = EndOfLineNonSignificantToken; ///

  static WhitespaceToken = WhitespaceToken;

  static EndOfLineCommentToken = null; ///

  static RegularExpressionToken = null;

  static SingleLineCommentToken = null; ///

  static EndOfMultiLineCommentToken = null; ///

  static StartOfMultiLineCommentToken = null; ///

  static MiddleOfMultiLineCommentToken = null; ///

  static SinglyQuotedStringLiteralToken = null;

  static DoublyQuotedStringLiteralToken = DoublyQuotedStringLiteralToken;

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }

  static fromRules(rules) { return CommonLexer.fromRules(CSSLexer, rules); }

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }
}
