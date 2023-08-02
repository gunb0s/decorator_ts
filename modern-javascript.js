'use strict'

const obj = {}

Object.defineProperties(obj, {
    name: { value: "John" },
    surname: { value: "Smith" }
})

console.log(obj.name)