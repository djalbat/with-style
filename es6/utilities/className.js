"use strict";

import uuidV4 from "uuid/v4";
import randomSeed from "random-seed";

import { CHARACTERS, CLASS_NAME_LENGTH } from "../constants";

const uuid = uuidV4(), ///
      random = randomSeed.create(uuid),
      length = CLASS_NAME_LENGTH,
      characters = CHARACTERS,
      charactersLength = characters.length;

export function generateClassName() {
  let className = "";

  for (let count = 0; count < length; count++) {
    const index = random(charactersLength),
          character = characters[index];

    className += character;
  }

  return className;
}

export function retrieveClassName(element) {
  const { className } = element.reactFunction || element.reactComponent.constructor;

  return className;
}

export default {
  generateClassName,
  retrieveClassName
};
