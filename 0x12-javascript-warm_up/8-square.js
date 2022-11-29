#!/usr/bin/node
const x = process.argv[2];
if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (let m = 0; m < x; m++) {
    console.log('X'.repeat(x));
  }
}
