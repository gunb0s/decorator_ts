function Ultra() {}
Ultra.prototype.ultraProp = true;

function Super() {}
Super.prototype = new Ultra();

function Sub() {}
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2

const o = new Sub();
console.log(o.ultraProp)

console.log(Sub.prototype)
console.log(Super.prototype)
console.log(Ultra.prototype)
