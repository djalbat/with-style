'use strict';

import tagNames from './tagNames';

export { isClass } from './utilities/class';
export { generateClassName, retrieveClassName } from './utilities/className';
export { renderStyles, generateStyle, retrieveStyle } from './utilities/styles';

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
