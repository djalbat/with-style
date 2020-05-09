"use strict";

import { Query } from "occam-dom";

import { contentFromQueryNodeAndTokens } from "../utilities/content";

const propertyQuery = Query.fromExpression("/*/property"),
      expressionQuery = Query.fromExpression("/*/expression");

export default class Declaration {
  constructor(property, expression) {
    this.property = property;
    this.expression = expression;
  }

  getProperty() {
    return this.property;
  }

  getExpression() {
    return this.expression;
  }

  checkMatches(declarations) {
    const matches = declarations.some((declaration) => {
      const property = declaration.getProperty(),
            propertiesMatch = checkPropertiesMatch(property, this.property);

      if (propertiesMatch) {
        return true;
      }
    });

    return matches;
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

function checkPropertiesMatch(propertyA, propertyB) {
  const propertiesMatch = (propertyA === propertyB);

  return propertiesMatch;
}
