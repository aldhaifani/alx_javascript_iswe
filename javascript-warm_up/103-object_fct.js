#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
};
console.log(myObject);
Object.defineProperty(myObject, 'incr', {
  value: function incr () {
    this.value++;
  },
  enumerable: true,
});
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
