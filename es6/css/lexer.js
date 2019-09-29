'use strict';

const lexers = require('occam-lexers');

const entries = require('./entries');

const { CommonLexer, EndOfLineSignificantToken } = lexers;

class CSSLexer extends CommonLexer {
  tokeniseEndOfLines(content) { return super.tokeniseEndOfLines(content, EndOfLineSignificantToken); }

  tokeniseRegularExpressions(tokensOrContents) {}

  static fromEntries(entries) { return CommonLexer.fromEntries(CSSLexer, entries); }

  static fromNothing() { return CommonLexer.fromNothing(CSSLexer); }
}

Object.assign(CSSLexer, {
  entries
});

module.exports = CSSLexer;
