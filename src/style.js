"use strict";

import Medias from "./style/medias";
import RuleSets from "./style/ruleSets";
import Keyframess from "./style/keyframess";
import Declarations from "./style/declarations";

import { EMPTY_STRING } from "./constants";

export default class Style {
  constructor(declarations, keyframess, ruleSets, medias) {
    this.declarations = declarations;
    this.keyframess = keyframess;
    this.ruleSets = ruleSets;
    this.medias = medias;
  }

  getDeclarations() {
    return this.declarations;
  }

  getKeyframess() {
    return this.keyframess;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getMedias() {
    return this.medias;
  }

  extends(superStyle) {
    const declarations = superStyle.getDeclarations(),
          keyframess = superStyle.getKeyframess(),
          ruleSets = superStyle.getRuleSets(),
          medias = superStyle.getMedias();

    this.unshift(declarations, keyframess, ruleSets, medias);
  }

  unshift(declarations, keyframess, ruleSets, medias) {
    this.declarations.unshift(declarations);
    this.keyframess.unshift(keyframess);
    this.ruleSets.unshift(ruleSets);
    this.medias.unshift(medias);
  }

  asCSS(className) {
    const indent = EMPTY_STRING,
          declarationsCSS = this.declarations.asCSS(className, indent),
          keyframessCSS = this.keyframess.asCSS(className, indent),
          ruleSetsCSS = this.ruleSets.asCSS(className, indent),
          mediasCSS = this.medias.asCSS(className, indent),
          css = `${declarationsCSS}${keyframessCSS}${ruleSetsCSS}${mediasCSS}`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          keyframess = Keyframess.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          medias = Medias.fromNodeAndTokens(node, tokens),
          style = new Style(declarations, keyframess, ruleSets, medias);

    return style;
  }
}
