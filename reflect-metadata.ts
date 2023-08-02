class Point {
    constructor(private readonly x: number, private readonly y: number) {
    }
}

class Line {
    private _start: Point = new Point(0, 0);
    private _end: Point = new Point(0, 0);

    @validate
    @Reflect.metadata("design:type", Point)
    set start(value: Point) {
        this._start = value;
    }
    get start() {
        return this._start;
    }
    @validate
    @Reflect.metadata("design:type", Point)
    set end(value: Point) {
        this._end = value;
    }
    get end() {
        return this._end;
    }
}

function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
    let set = descriptor.set!;

    descriptor.set = function (value: T) {
        let type = Reflect.getMetadata("design:type", target, propertyKey);

        if (!(value instanceof type)) {
            throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
        }

        set.call(this, value);
    };
}
