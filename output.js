var _user$info, _user$info$courses, _user$info$address, _user$info2, _user$info2$courses, _user$info2$courses$i, _user$info3, _ref, _user$say, _user$say$call;

const user = {
  id: 5218,
  email: 'john@doe.com',
  info: {
    name: 'John Doe',
    accountType: 'premium',
    paymentDetails: {},
    address: null,
    courses: {
      items: [{
        title: 'How frontend works',
        payed: true
      }, {
        title: 'Design for the web',
        payed: false
      }, {
        title: 'Performance master class',
        payed: false
      }]
    }
  },

  say() {
    return {
      greet: 'Hey Johnny boy',
      confused: 'You\'re weird John',
      love: 'I hate you John'
    };
  }

}; // Exercise 2A
// Log all the courses with optional chaining

console.log(user === null || user === void 0 ? void 0 : (_user$info = user.info) === null || _user$info === void 0 ? void 0 : (_user$info$courses = _user$info.courses) === null || _user$info$courses === void 0 ? void 0 : _user$info$courses.items); // Log the non existing property 'city' of address with as less optional chaining as possible

console.log((_user$info$address = user.info.address) === null || _user$info$address === void 0 ? void 0 : _user$info$address.city); // Exercise 2B
// Get the first course via dynamic property access

console.log(user === null || user === void 0 ? void 0 : (_user$info2 = user.info) === null || _user$info2 === void 0 ? void 0 : (_user$info2$courses = _user$info2.courses) === null || _user$info2$courses === void 0 ? void 0 : (_user$info2$courses$i = _user$info2$courses.items) === null || _user$info2$courses$i === void 0 ? void 0 : _user$info2$courses$i[0]); // Get the accountType via dynamic property access

console.log(user === null || user === void 0 ? void 0 : (_user$info3 = user.info) === null || _user$info3 === void 0 ? void 0 : _user$info3['accountType']); // Exercise 2C
// Log the confused text of the say function

_ref = user === null || user === void 0 ? void 0 : (_user$say = user.say) === null || _user$say === void 0 ? void 0 : (_user$say$call = _user$say.call(user)) === null || _user$say$call === void 0 ? void 0 : _user$say$call['confused'], console.log(_ref);
