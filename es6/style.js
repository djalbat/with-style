"use strict";

import Medias from "./style/medias";
import RuleSets from "./style/ruleSets";
import Declarations from "./style/declarations";

export default class Style {
  constructor(declarations, ruleSets, medias) {
    this.declarations = declarations;
    this.ruleSets = ruleSets;
    this.medias = medias;
  }

  getDeclarations() {
    return this.declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getMedias() {
    return this.medias;
  }

  extends(superStyle) {
    const declarations = superStyle.getDeclarations(),
          ruleSets = superStyle.getRuleSets(),
          medias = superStyle.getMedias();

    this.unshift(declarations, ruleSets, medias);
  }

  unshift(declarations, ruleSets, medias) {
    this.declarations.unshift(declarations);
    this.ruleSets.unshift(ruleSets);
    this.medias.unshift(medias);
  }

  asCSS(className) {
    const declarationsCSS = this.declarations.asCSS(className, "  "),
          ruleSetsCSS = this.ruleSets.asCSS(className, ""),
          mediasCSS = this.medias.asCSS(className),
          css = `${declarationsCSS}${ruleSetsCSS}${mediasCSS}`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          medias = Medias.fromNodeAndTokens(node, tokens),
          style = new Style(declarations, ruleSets, medias);

    return style;
  }
}
