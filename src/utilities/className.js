"use strict";

import { CHARACTERS, EMPTY_STRING, CLASS_NAME_LENGTH } from "../constants";

const length = CLASS_NAME_LENGTH,
      characters = CHARACTERS,
      charactersLength = characters.length;

const classNames = [];

export function generateClassName() {
  let className = EMPTY_STRING;

  for (let index = 0; index < length; index++) {
    const characterIndex = Math.floor(Math.random() * charactersLength),
          character = characters[characterIndex];

    className += character;
  }

  const classNamesIncludesClassName = classNames.includes(className);

  if (!classNamesIncludesClassName) {
    classNames.push(className);
  } else {
    className = generateClassName();
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
