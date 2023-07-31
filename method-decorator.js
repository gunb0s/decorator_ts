"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = void 0;
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
exports.Greeter = Greeter;
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        console.log(`target: ${JSON.stringify(target)}`);
        console.log(`propertyKey: ${propertyKey}`);
        console.log(`descriptor: ${JSON.stringify(descriptor)}`);
        descriptor.enumerable = value;
    };
}
//# sourceMappingURL=method-decorator.js.map