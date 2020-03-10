'use strict';

import uuidV4 from 'uuid/v4';
import Hashids from 'hashids';
import randomSeed from 'random-seed';

import { ALPHABET, CLASSNAME_LENGTH, RANDOM_NUMBER_MAXIMUM } from '../constants';

const uuid = uuidV4(), ///
      random = randomSeed.create(uuid),
      length = CLASSNAME_LENGTH,
      alphabet = ALPHABET,
      hashids = new Hashids('', length, alphabet),
      randomNumberMaximum = RANDOM_NUMBER_MAXIMUM;

let randomNumber = random(randomNumberMaximum);

export function generateClassName() {
  const hash = hashids.encode(randomNumber++),
        className = hash; ///

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
