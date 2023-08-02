// https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841

class Cat {
    public readonly name: string = 'cat'
    @readonly
    meow() { return `${this.name} says Meow!`}
}

/*
    Evaluating this class results in installing the meow function onto `Cat.prototype`, roughly like this

    Object.defineProperty(Cat.prototype, 'meow', {
        value: () => { return `${this.name} says Meow!`},
        enumerable: false,
        configurable: true,
        writable: true,
    })
*/

function readonly(target, key, descriptor) {
    descriptor.writable = false
    return descriptor
}

/**
 *
 * let descriptor = {
 *     value: specifiedFunction,
 *     enumerable: false,
 *     configurable: true,
 *     writable: true
 * }
 *
 * descriptor = readonly(Cat.prototype, 'meow', descriptor) || descriptor
 * Object.defineProperty(Cat.prototype, 'meow', descriptor)
 *
 */

var garfield = new Cat();
garfield.meow = function() {
    console.log("I want lasagne!")
    return 'lasagne!'
}

console.log(garfield.meow())

// Exception: Attempted to assign to readonly property <-- wrong

function superhero(target) {
    target.isSuperhero = true
    target.power = 'flight'
}

@superhero
class MySuperHero {
}


// // @ts-ignore
// console.log(MySuperHero.isSuperHero)

function mixin(behaviour, sharedBehaviour = {}) {
    const instanceKeys = Reflect.ownKeys(behaviour)
    const sharedKeys = Reflect.ownKeys(sharedBehaviour)
    const typeTag = Symbol('isa')

    function _mixin(clazz) {
        for (let property of instanceKeys) {
            Object.defineProperty(clazz.prototype, property, {value: behaviour[property]})
        }
        Object.defineProperty(clazz.prototype, typeTag, {value: true})
        return clazz
    }

    for (let property of sharedKeys) {
        Object.defineProperty(_mixin, property, {
            value: sharedBehaviour[property],
            enumerable: sharedBehaviour.propertyIsEnumerable(property)
        })
    }
    Object.defineProperty(_mixin, Symbol.hasInstance, {
        value: i => !!i[typeTag]
    })
    return _mixin
}
