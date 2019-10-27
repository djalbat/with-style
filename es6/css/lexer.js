'use strict';

const lexers = require('occam-lexers');

const entries = require('./entries');

const { CommonLexer, EndOfLineSignificantToken } = lexers;

class CSSLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return super.tokeniseEndOfLines(content, EndOfLineSignificantToken); }

  matchBrokenComment(content, inComment) { return null; }

  matchSingleLineComment(content, inComment) { return null; }

  matchMultiLineCommentInComment(content, inComment) { return null; }

  matchMultiLineCommentNotInComment(content, inComment) { return null; }

  matchRegularExpression(content) { return null; }

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }
}

Object.assign(CSSLexer, {
  entries
});

module.exports = CSSLexer;
