const user = {
	id: 5218,
	email: 'john@doe.com',
	info: {
		name: 'John Doe',
		accountType: 'premium',
		paymentDetails: {},
		address: null,
		courses: {
			items: [
				{ title: 'How frontend works', payed: true },
				{ title: 'Design for the web', payed: false },
				{ title: 'Performance master class', payed: false }
			]
		},
	},
	say() {
		return {
			greet: 'Hey Johnny boy',
			confused: 'You\'re weird John',
			love: 'I hate you John'
		}
	},
}


 // Exercise 2A
 // Log all the courses with optional chaining


 // Log the non existing property 'city' of address with as less optional chaining as possible



// Exercise 2B
// Get the first course via dynamic property access


// Get the accountType via dynamic property access


// Exercise 2C
// Log the confused text of the say function

