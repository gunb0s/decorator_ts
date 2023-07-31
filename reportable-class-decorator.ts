function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
export class ReportableBugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}


// Note that the decorator _does not_ change the TypeScript type
// and so the new property `reportingURL` is not known
// to the type system