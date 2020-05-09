"use strict";

import { Query } from "occam-dom";

import Media from "./media";

const mediaQuery = Query.fromExpression("/stylesheet/media");

export default class Medias {
  constructor(array) {
    this.array = array;
  }

  unshift(medias) {
    medias.forEach((media) => {
      this.array.unshift(media);
    });
  }

  forEach(callback) {
    this.array.forEach(callback);
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
