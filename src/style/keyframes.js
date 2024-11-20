"use strict";

import { Query } from "occam-query";

import Keyframe from "./keyframe";

import { EMPTY_STRING, TWO_SPACES } from "../constants";
import { contentFromQueryNodeAndTokens } from "../utilities/content";

const keyframeQuery = Query.fromExpressionString("/keyframes/keyframe"),
      identifierQuery = Query.fromExpressionString("/keyframes/@identifier");

export default class Keyframes {
  constructor(array, identifier) {
    this.array = array;
    this.identifier = identifier;
  }

  getIdentifier() {
    return this.identifier;
  }

  asCSS(indent) {
    indent = indent + TWO_SPACES;

    const keyframesCSS = this.array.reduce((keyframesCSS, keyframe) => {
            const keyframeCSS = keyframe.asCSS(indent);

            keyframesCSS += keyframeCSS;

            return keyframesCSS;
          }, EMPTY_STRING),
          css = `@keyframes ${this.identifier} {
${keyframesCSS}}

`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const keyframeNodes = keyframeQuery.execute(node),
          array = keyframeNodes.map((keyframeNode) => {
            const node = keyframeNode, ///
                  keyframe = Keyframe.fromNodeAndTokens(node, tokens);

            return keyframe;
          }),
          identifierContent = contentFromQueryNodeAndTokens(identifierQuery, node, tokens),
          identifier = identifierContent, ///
          keyframes = new Keyframes(array, identifier);

    return keyframes;
  }
}
