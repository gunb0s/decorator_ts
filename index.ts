import {ExampleClass} from "./decorator-factories";
import {BugReport} from "./class-decorator";
import {ReportableBugReport} from "./reportable-class-decorator";
import {Greeter} from "./method-decorator";

const log = console.log

function main() {
    const exampleClass = new ExampleClass().method()
    const bugReport = new BugReport("test")
    const reportableBugReport = new ReportableBugReport("test")
    const greeting = new Greeter("greeting")
    greeting.greet()

    log(Reflect.ownKeys(reportableBugReport))
    log(Reflect.get(reportableBugReport, "reportingURL"))
    log(Object.getOwnPropertyDescriptor(reportableBugReport, "reportingURL"))
}

main()