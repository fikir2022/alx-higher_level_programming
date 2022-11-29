#!/usr/bin/node
const m = process.argv[2];
const n = process.argv[3];
function add (m, n) {
  if (isNaN(m) || isNaN(n)) {
    return (NaN);
  } else {
    return (parseInt(m) + parseInt(n));
  }
}
console.log(add(m, n));
