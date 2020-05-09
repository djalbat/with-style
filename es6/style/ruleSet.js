"use strict";

import { Query } from "occam-dom";
import { arrayUtilities } from "necessary";

import Declarations from "./declarations";

import { asContent } from "../utilities/node";

const { first } = arrayUtilities;

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
  const selectorsNodes = selectorsQuery.execute(node),
        firstSelectorsNode = first(selectorsNodes),
        selectorsNode = firstSelectorsNode, ///
        selectorsNodeContent = asContent(selectorsNode, tokens),
        selectors = `${selectorsNodeContent}`;

  return selectors;
}
