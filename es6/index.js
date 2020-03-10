'use strict';

import tagNames from './tagNames';

import { isClass } from './utilities/class';
import { generateClassName, retrieveClassName } from './utilities/className';
import { renderStyles, generateStyle, retrieveStyle } from './utilities/styles';

const classUtilities = {
  isClass
};

const stylesUtilities = {
  renderStyles,
  generateStyle,
  retrieveStyle
};

const classNameUtilities = {
  generateClassName, retrieveClassName
};

export default {
  tagNames,
  classUtilities,
  stylesUtilities,
  classNameUtilities
};
