/**
 * Method decorators is declared just before a method declaration. The decorator is applied to the Property Descriptor
 * for the method, and can be used to observe, modify, or replace a method definition. A method decorator cannot be
 * used in a declaration file, on an overload, or in any other ambient context (such as in a declare class).
 *
 * The expression for the method decorator will be called as a function at runtime, with the following three arguments:
 * 1. Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
 * 2. The name of the member.
 * 3. The Property Descriptor for the member.
 */

export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`target: ${JSON.stringify(target)}`)
        console.log(`propertyKey: ${propertyKey}`)
        console.log(`descriptor: ${JSON.stringify(descriptor)}`)
        descriptor.enumerable = value;
    };
}
