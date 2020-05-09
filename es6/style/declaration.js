"use strict";

import { asContent } from "../utilities/node";

export default class Declaration {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  asCSS(indent, last) {
    const css = last ?
                `${indent}${this.content}` :
                  `${indent}${this.content}\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const content = asContent(node, tokens),
          declaration = new Declaration(content);

    return declaration;
  }
}
