"use strict";

import { EMPTY_STRING } from "../constants";

export function trim(string) {
  string = string.replace(/[\n\r]$/g, EMPTY_STRING);  ///

  return string;
}
