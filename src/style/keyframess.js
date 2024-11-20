"use strict";

import { Query } from "occam-query";

import Keyframes from "./keyframes";

import { EMPTY_STRING } from "../constants";

const keyframesQuery = Query.fromExpressionString("/stylesheet/keyframes");

export default class Keyframess {
  constructor(array) {
    this.array = array;
  }

  unshift(keyframess) {
    ///
  }

  forEach(callback) {
    this.array.forEach(callback);
  }

  asCSS(className, indent) {
    const css = this.array.reduce((css, keyframes) => {
      const keyframesCSS = keyframes.asCSS(indent);

      css += keyframesCSS;

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const keyframesNodes = keyframesQuery.execute(node),
          array = keyframesNodes.map((keyframesNode) => {
            const node = keyframesNode, ///
                  keyframes = Keyframes.fromNodeAndTokens(node, tokens);

            return keyframes;
          }),
          keyframess = new Keyframess(array);

    return keyframess;
  }
}
