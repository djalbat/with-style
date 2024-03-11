"use strict";

import { Query } from "occam-query";

import RuleSets from "./ruleSets";
import Declarations from "./declarations";

import { trim } from "../utilities/string";
import { TWO_SPACES, EMPTY_STRING } from "../constants";
import { contentFromQueryNodeAndTokens } from "../utilities/content";

const queriesQuery = Query.fromExpression("/media/mediaQueries"); ///

export default class Media {
  constructor(declarations, ruleSets, queries) {
    this.declarations = declarations;
    this.ruleSets = ruleSets;
    this.queries = queries;
  }

  getDeclarations() {
    return this.declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getQueries() {
    return this.queries;
  }

  asCSS(className, indent) {
    indent = indent + TWO_SPACES;

    let css = EMPTY_STRING;

    const ruleSetsCSS = this.ruleSets.asCSS(className, indent),
          declarationsCSS = this.declarations.asCSS(className, indent);

    let ruleSetsDeclarationsCSS = `${declarationsCSS}${ruleSetsCSS}`;

    if (ruleSetsDeclarationsCSS !== EMPTY_STRING) {
      ruleSetsDeclarationsCSS = trim(ruleSetsDeclarationsCSS);

      css = `@media ${this.queries} {
${ruleSetsDeclarationsCSS}}

`;
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          queries = queriesFromNodeAndTokens(node, tokens),
          media = new Media(declarations, ruleSets, queries);

    return media;
  }
}

function queriesFromNodeAndTokens(node, tokens) {
  const queriesNodeContent = contentFromQueryNodeAndTokens(queriesQuery, node, tokens),
        queries = `${queriesNodeContent}`;

  return queries;
}
