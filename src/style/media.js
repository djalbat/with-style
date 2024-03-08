"use strict";

import { Query } from "occam-query";

import RuleSets from "./ruleSets";
import Declarations from "./declarations";

import { TWO_SPACES, FOUR_SPACES } from "../constants";
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

  asCSS(className) {
    let css = "";

    const ruleSetsCSS = this.ruleSets.asCSS(className, TWO_SPACES),
          declarationsCSS = this.declarations.asCSS(className, FOUR_SPACES);

    if ((ruleSetsCSS !== null) || (declarationsCSS !== null)) {
      css = `@media ${this.queries} {
${declarationsCSS}${ruleSetsCSS}
}

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
