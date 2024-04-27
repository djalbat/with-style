"use strict";

import { Query } from "occam-query";
import { arrayUtilities } from "necessary";

import Declaration from "./declaration";

import { contentFromQueryNodeAndTokens } from "../utilities/content";

const percentageQuery = Query.fromExpression("/*/@percentage"),
      declarationQuery = Query.fromExpression("/*/declaration");

const { first } = arrayUtilities;

export default class Keyframe {
  constructor(percentage, declaration) {
    this.percentage = percentage;
    this.declaration = declaration;
  }

  getPercentage() {
    return this.percentage;
  }

  getDeclaration() {
    return this.declaration;
  }

  asCSS(indent) {
    const declarationCSS = this.declaration.asCSS(indent),
          css = `${indent}${this.percentage} { 
${declarationCSS}${indent}}\n`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const percentageContent = contentFromQueryNodeAndTokens(percentageQuery, node, tokens),
          percentage = percentageContent, ///
          declarationNodes = declarationQuery.execute(node),
          firstDeclarationNode = first(declarationNodes),
          declarationNode = firstDeclarationNode; ///

    node = declarationNode; ///

    const declaration = Declaration.fromNodeAndTokens(node, tokens),
          keyframe = new Keyframe(percentage, declaration);

    return keyframe;
  }
}
