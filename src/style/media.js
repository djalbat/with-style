"use strict";

import { Query } from "occam-dom";

import RuleSets from "./ruleSets";
import Declarations from "./declarations";

import { contentFromQueryNodeAndTokens } from "../utilities/content";

const mediaQueriesQuery = Query.fromExpression("/media/mediaQueries");

export default class Media {
  constructor(mediaQueries, declarations, ruleSets) {
    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  getMediaQueries() {
    return this.mediaQueries;
  }

  getDeclarations() {
    return this.declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  asCSS(className) {
    let css = "";

    const ruleSetsCSS = this.ruleSets.asCSS(className, "  "),
          declarationsCSS = this.declarations.asCSS(className, "    ");

    if ((ruleSetsCSS !== null) || (declarationsCSS !== null)) {
      css = `@media ${this.mediaQueries} {
${declarationsCSS}${ruleSetsCSS}
}

`;
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations, ruleSets);

    return media;
  }
}

function mediaQueriesFromNodeAndTokens(node, tokens) {
  const mediaQueriesNodeContent = contentFromQueryNodeAndTokens(mediaQueriesQuery, node, tokens),
        mediaQueries = `${mediaQueriesNodeContent}`;

  return mediaQueries;
}
