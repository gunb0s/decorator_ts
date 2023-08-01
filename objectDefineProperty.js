// const obj = {}
//
// const descriptor = Object.create(null)
// descriptor.value = "static"
// Object.defineProperty(obj, "key", descriptor)
//
// // Being explicit by using a throw-away object literal with all attributes present
// Object.defineProperty(obj, "key2", {
//     enumerable:false,
//     configurable: false,
//     writable: false,
//     value: "static"
// })
//
// function withValue(value) {
//     const d =
//         withValue.d ||
//         (withValue.d = {
//             enumerable: false,
//             writable: false,
//             configurable: false,
//             value
//         })
//
//     if (d.value != value) d.value = value
//
//     return d
// }
//
// Object.defineProperty(obj, "key", withValue("static"))
//
// (Object.freeze || Object)(Object.prototype)


const obj = {}
const descriptor = Object.create(null)

// Object.defineProperty(obj, 'key', {
//     configurable: false,
//     enumerable: true,
//     value: '1',
//     writable: true
// })

// Object.defineProperty(obj, 'key', {
//     value: '2'
// })

let keyValue = 25
Object.defineProperty(obj, 'key', {
    enumerable: true,
    get() {
        return keyValue
    },
    set(value) {
        keyValue = value
    }
})

obj['key'] = 2
console.log(obj['key'])

const pattern = {
    get() {
        return "I always return this string, whatever you have assigned";
    },
    set() {
        this.myname = "this is my name string";
    },
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string

function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
    get() {
        return value;
    },
    set(x) {
        value = x;
    },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1


function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
    get() {
        return this.storedX;
    },
    set(x) {
        this.storedX = x;
    },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined

function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
    writable: false,
    value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1


