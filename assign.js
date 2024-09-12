// Use assign when you want to create a reference to another object, but you don't want to mutate the original object if you change the other
let obj = {name: 'rose'}
let obj2 = Object.assign({}, obj)

console.log("obj2: ", obj2)

obj2.name = 'bubbles'

console.log("obj2 after changing name: ", obj2)
console.log("obj after changing obj2: ", obj)
