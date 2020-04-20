"use strict";

import { Query } from "occam-dom";
import { arrayUtilities } from "necessary";

import Media from "./media";

const { unshift } = arrayUtilities;

const mediaQuery = Query.fromExpression("/stylesheet/media");

export default class Medias {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(medias) {
    const array = medias.getArray();

    unshift(this.array, array);
  }

  asCSS(className) {
    const css = this.array.reduce((css, media) => {
      const mediaCSS = media.asCSS(className);

      css += mediaCSS;

      return css;
    }, "");

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaNodes = mediaQuery.execute(node),
          array = mediaNodes.map((mediaNode) => {
            const node = mediaNode, ///
                  media = Media.fromNodeAndTokens(node, tokens);

            return media;
          }),
          medias = new Medias(array);

    return medias;
  }
}
