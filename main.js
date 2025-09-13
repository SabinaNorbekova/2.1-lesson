import { getRandom } from "./random.js"
import { Person } from "./person.js"
import { sleep } from "./sleep.js"

const ms=getRandom()
console.log(`Kuting: ${ms} ms...`)

await sleep(ms)

let person1 = new Person("Ali", 1995)
console.log(person1.getInfo())