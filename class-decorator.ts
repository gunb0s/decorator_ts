function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
export class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}