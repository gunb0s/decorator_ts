function first() {
    console.log("first(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`target: ${JSON.stringify(target)}`)
        console.log(`propertyKey: ${propertyKey}`)
        console.log(`descriptor: ${JSON.stringify(descriptor)}`)
        console.log("first(): called");
    };
}

function second() {
    console.log("second(): factory evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`target: ${JSON.stringify(target)}`)
        console.log(`propertyKey: ${propertyKey}`)
        console.log(`descriptor: ${JSON.stringify(descriptor)}`)
        console.log("second(): called");
    };
}

export class ExampleClass {
    @first()
    @second()
    method() {}
}