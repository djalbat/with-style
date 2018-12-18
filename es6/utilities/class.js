'use strict';

const reaction = require('reaction');

const { React } = reaction;

function isClass(argument) { return isSubclassOf(argument, React.Component); }  ///

module.exports = {
  isClass
};

function isSubclassOf(argument, Class) {
  let subclass = false;

  if (argument.name === Class.name) {   ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
