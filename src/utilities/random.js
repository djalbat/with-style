"use strict";

import { CHARACTERS, EMPTY_STRING, CLASS_NAME_LENGTH } from "../constants";

export function generateClassName() {
  let className = EMPTY_STRING;

  const length = CLASS_NAME_LENGTH, ///
        characters = CHARACTERS,
        charactersLength = characters.length;

  for (let index = 0; index < length; index++) {
    const index = Math.floor(Math.random() * charactersLength),
          character = characters[index];

    className += character;
  }

  return className;
}
