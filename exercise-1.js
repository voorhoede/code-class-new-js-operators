// @ts-nocheck


/** 
 * EXERCISE A
 * Rewrite using the pipeline operator
 */
const actions = ['megablast', 'bbqpunch', 'roastkick']
const head = x => x[0]
const toUpper = s => s.toUpperCase()
const shout = s => `${s}!`
const firstActionUpper = toUpper(head(actions))
console.log(firstActionUpper)


/** 
 * EXERCISE B
 * Rewrite using the pipeline operator
 */
const content = '{"user": "dax234", "score": "23098"}'
let items = JSON.parse(content)
items = Array.isArray(items) ? items : [items]
const extraScore = items.map(item => ({ ...item, scoreBonus: 500}))
console.log(extraScore)


/**
 * Exercise C
 * Rewrite using the pipeline operator
 */
const double = x => x + x
const add = (x, y) => x + y
let person = { score: 250 }
let newScore = add(double(person.score), 7)
