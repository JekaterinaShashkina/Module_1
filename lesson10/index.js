"use strict";
import { listIPv4 } from "./ipv4.js";

const ipv4Size = (list) => {
  const set = new Set(list);
  return set.size;
};
console.log(ipv4Size(listIPv4));
