'use strict';

const log = console.log

let animal = {
    walk() {
        if (!this.isSleeping) {
            log(`동물이 걸어갑니다`)
        }
    },
    sleep() {
        this.isSleeping = true
    }
}

let rabbit = {
    name: "하얀 토끼",
    __proto__: animal
}

console.dir(rabbit)