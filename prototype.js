'use strict';

const log = console.log

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

log(admin.fullName)

admin.fullName = "Alice Cooper"

log(admin.fullName)
log(user.fullName)