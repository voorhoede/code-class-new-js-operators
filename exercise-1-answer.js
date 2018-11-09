// @ts-nocheck


// ANSWER FOR EXERCISE A
const actions = ['megablast', 'uberfly', 'awesomejump']
const head = x => x[0]
const toUpper = s => s.toUpperCase()
const shout = s => `${s}!`
const firstActionUpper = actions 
	|> head 
	|> toUpper 
	|> shout 
	|> console.log



// ANSWER FOR EXERCISE B
const content = '{"user": "dax234", "score": "23098"}'
const items = JSON.parse(content)
	|> (x => Array.isArray(x) ? x : [x])
	|> (x => x.map(y => ({ ...y, scoreBonus: 500 })))
	|> console.log



// ANSWER FOR EXERCISE C
const double = x => x + x
const add = (x, y) => x + y
let person = { score: 250 }
let newScore = person.score
	|> double
	|> (x => add(x, 7))
	|> console.log