const obj = {}

const descriptor = Object.create(null)
console.log(descriptor)
descriptor.value = "static"
console.log(descriptor)
Object.defineProperty(obj, "key", descriptor)
console.log(obj)

// Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
    enumerable:false,
    configurable: false,
    writable: false,
    value: "static"
})
console.log(obj)

function withValue(value) {
    const d =
        withValue.d ||
        (withValue.d = {
            enumerable: false,
            writable: false,
            configurable: false,
            value
        })

    if (d.value != value) d.value = value

    return d
}

Object.defineProperty(obj, "key", withValue("static"))

(Object.freeze || Object)(Object.prototype)