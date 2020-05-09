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

  checkMatches(ruleSets) {
    const matches = ruleSets.some((ruleSet) => {
      const selectors = ruleSet.getSelectors(),
            selectorsMatch = checkSelectorsMatch(selectors, this.selectors);

      if (selectorsMatch) {
        return true;
      }
    });

    return matches;
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

function checkSelectorsMatch(selectorsA, selectorsB) {
  const selectorsMatch = (selectorsA === selectorsB);

  // let selectorsMatch = true;
  //
  // if (selectorsMatch === true) {
  //   selectorsA.some((selectorA) => {
  //     const selectorsBIncludesSelectorA = selectorsB.includes(selectorA);
  //
  //     if (!selectorsBIncludesSelectorA) {
  //       selectorsMatch = false;
  //
  //       return true;
  //     }
  //   });
  // }
  //
  // if (selectorsMatch === true) {
  //   selectorsB.some((selectorB) => {
  //     const selectorsAIncludesSelectorB = selectorsA.includes(selectorB);
  //
  //     if (!selectorsAIncludesSelectorB) {
  //       selectorsMatch = false;
  //
  //       return true;
  //     }
  //   });
  // }

  return selectorsMatch;
}
