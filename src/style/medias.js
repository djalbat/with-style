"use strict";

import { Query } from "occam-query";

import Media from "./media";

import { EMPTY_STRING } from "../constants";

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

  asCSS(className, indent) {
    const css = this.array.reduce((css, media) => {
      const mediaCSS = media.asCSS(className, indent);

      css += mediaCSS;

      return css;
    }, EMPTY_STRING);

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
