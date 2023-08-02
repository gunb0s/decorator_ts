import "reflect-metadata";


class Greeter {
    @format("Hello, %s")
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        return formatString.replace("%s", this.greeting);
    }
}


/**
 * The expression for the property decorator will be called as a function at runtime, with the following two arguments:
 *
 *     Either the constructor function of the class for a static member, or the prototype of the class for an instance member.
 *     The name of the member.
 */

const formatMetadataKey = Symbol("format");
function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}