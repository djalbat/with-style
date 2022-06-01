"use strict";

import { Query } from "occam-dom";

import { EMPTY_STRING } from "../constants";
import { contentFromQueryNodeAndTokens } from "../utilities/content";

const priorityQuery = Query.fromExpression("/*/priority"),
      propertyQuery = Query.fromExpression("/*/property"),
      expressionQuery = Query.fromExpression("/*/expression");

export default class Declaration {
  constructor(property, expression, priority) {
    this.property = property;
    this.expression = expression;
    this.priority = priority;
  }

  getProperty() {
    return this.property;
  }

  getExpression() {
    return this.expression;
  }

  getPriority() {
    return this.priority;
  }

  checkMatches(declarations) {
    const matches = declarations.some((declaration) => {
      const property = declaration.getProperty(),
            propertiesMatch = (property === this.property);

      if (propertiesMatch) {
        return true;
      }
    });

    return matches;
  }

  asCSS(indent, last) {
    const css = last ?
                `${indent}${this.property}: ${this.expression}${this.priority};` :
                  `${indent}${this.property}: ${this.expression}${this.priority};\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const propertyContent = contentFromQueryNodeAndTokens(propertyQuery, node, tokens),
          expressionContent = contentFromQueryNodeAndTokens(expressionQuery, node, tokens),
          priorityContent = contentFromQueryNodeAndTokens(priorityQuery, node, tokens),
          property = propertyContent, ///
          expression = expressionContent, ///
          priority = (priorityContent === null) ?
                       EMPTY_STRING :
                        ` ${priorityContent}`,
          declaration = new Declaration(property, expression, priority);

    return declaration;
  }
}
