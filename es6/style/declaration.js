"use strict";

import { Query } from "occam-dom";
import { arrayUtilities } from "necessary";

import { asContent } from "../utilities/node";

const { first } = arrayUtilities;

const propertyQuery = Query.fromExpression("/*/property"),
      expressionQuery = Query.fromExpression("/*/expression");

export default class Declaration {
  constructor(property, expression) {
    this.property = property;
    this.expression = expression;
  }

  getContent() {
    return this.property;
  }

  getExpression() {
    return this.expression;
  }

  asCSS(indent, last) {
    const css = last ?
                `${indent}${this.property}: ${this.expression};` :
                  `${indent}${this.property}: ${this.expression};\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const propertyContent = contentFromQueryNodeAndTokens(propertyQuery, node, tokens),
          expressionContent = contentFromQueryNodeAndTokens(expressionQuery, node, tokens),
          property = propertyContent, ///
          expression = expressionContent, ///
          declaration = new Declaration(property, expression);

    return declaration;
  }
}

function contentFromQueryNodeAndTokens(query, node, tokens) {
  const nodes = query.execute(node),
        firstNode = first(nodes),
        content = asContent(firstNode, tokens);

  return content;
}
