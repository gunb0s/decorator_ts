"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_factories_1 = require("./decorator-factories");
const class_decorator_1 = require("./class-decorator");
const reportable_class_decorator_1 = require("./reportable-class-decorator");
const method_decorator_1 = require("./method-decorator");
const log = console.log;
function main() {
    const exampleClass = new decorator_factories_1.ExampleClass().method();
    const bugReport = new class_decorator_1.BugReport("test");
    const reportableBugReport = new reportable_class_decorator_1.ReportableBugReport("test");
    const greeting = new method_decorator_1.Greeter("greeting");
    greeting.greet();
    log(Reflect.ownKeys(reportableBugReport));
    log(Reflect.get(reportableBugReport, "reportingURL"));
    log(Object.getOwnPropertyDescriptor(reportableBugReport, "reportingURL"));
}
main();
//# sourceMappingURL=index.js.map