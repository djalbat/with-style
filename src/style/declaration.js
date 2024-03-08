"use strict";

import { Query } from "occam-query";

import { EMPTY_STRING } from "../constants";
import { contentFromQueryNodeAndTokens } from "../utilities/content";

const importantQuery = Query.fromExpression("/*/important"),
      propertyNameQuery = Query.fromExpression("/*/propertyName"),
      propertyValuesQuery = Query.fromExpression("/*/propertyValues");

export default class Declaration {
  constructor(propertyValues, propertyName, important) {
    this.propertyValues = propertyValues;
    this.propertyName = propertyName;
    this.important = important;
  }

  getPropertyValues() {
    return this.propertyValues;
  }

  getNameProperty() {
    return this.propertyName;
  }

  getImportant() {
    return this.important;
  }

  matchPropertyName(propertyName) {
    const matches = (this.propertyName === propertyName);

    return matches;
  }

  matchDeclaration(declaration) {
    const propertyName = declaration.getPropertyName(),
          matches = this.matchPropertyName(propertyName); ///

    return matches;
  }

  matchDeclarations(declarations) {
    const matches = declarations.someDeclaration((declaration) => {
      const matches = this.matchDeclaration(declaration);

      if (matches) {
        return true;
      }
    });

    return matches;
  }

  asCSS(indent, last) {
    const css = last ?
                  `${indent}${this.propertyName}: ${this.propertyValues}${this.important};` :
                    `${indent}${this.propertyName}: ${this.propertyValues}${this.important};\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const propertyValuesContent = contentFromQueryNodeAndTokens(propertyValuesQuery, node, tokens),
          propertyNameContent = contentFromQueryNodeAndTokens(propertyNameQuery, node, tokens),
          importantContent = contentFromQueryNodeAndTokens(importantQuery, node, tokens),
          propertyValues = propertyValuesContent, ///
          propertyName = propertyNameContent, ///
          important = (importantContent === null) ?
                        EMPTY_STRING :
                         ` ${importantContent}`,
          declaration = new Declaration(propertyValues, propertyName, important);

    return declaration;
  }
}
