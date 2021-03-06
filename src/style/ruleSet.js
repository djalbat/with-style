"use strict";

import { Query } from "occam-dom";

import Declarations from "./declarations";

import { contentFromQueryNodeAndTokens } from "../utilities/content";

const selectorsQuery = Query.fromExpression("//selectors");

export default class RuleSet {
  constructor(selectors, declarations) {
    this.selectors = selectors;
    this.declarations = declarations;
  }

  getSelectors() {
    return this.selectors;
  }

  getDeclarations() {
    return this.declarations;
  }

  unshift(ruleSet) {
    const declarations = ruleSet.getDeclarations();

    this.declarations.unshift(declarations);
  }

  findMatchingRuleSet(ruleSets) {
    const matchingRuleSet = ruleSets.find((ruleSet) => {
      const selectors = ruleSet.getSelectors(),
            selectorsMatch = (selectors === this.selectors),
            ruleSetsMatch = selectorsMatch; ///

      if (ruleSetsMatch) {
        return true;
      }
    }) || null; ///

    return matchingRuleSet;
  }

  asCSS(className, indent) {
    let css = "";

    const declarationsCSS = this.declarations.asCSS(`  ${indent}`);

    if (declarationsCSS !== "") {
       css = `${indent}.${className}${this.selectors} {
${declarationsCSS}
${indent}}

`;
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

    return media;
  }
}

function selectorsFromNodeAndTokens(node, tokens) {
  const selectorsNodeContent = contentFromQueryNodeAndTokens(selectorsQuery, node, tokens),
        selectors = `${selectorsNodeContent}`;

  return selectors;
}
