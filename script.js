// E5/E6 Examples before and after implementation:


// let + const:

// Before:
var m = 'Margaret';
var project: 'Apollo11';
a = 'Margaret Hamilton';

// After:
let m = 'Margaret';
const engineer = 08171936;
a = 'Margaret Hamilton';



// Destructuring:

// Before:
const dreamTeamReserve = {
    firstName : "Isiah",
    lastName  : "Thomas",
    jerseyNum       : 11,
    HOF  : true
};

// After:
const {firstName, lastName, jerseyNum, HOF} = dreamTeamReserve;



// Object Properties:

// Basis:
const hansonAI1 = 'Xiao';
const operational = false;
const modelNum = 0101999;

// After:
const ai1 = {hansonAI1, operational, modelNum};



// Template Strings:

// Basis:
const accountPrompt = `Hello ${chaseUser} your account is currently overdrawn in the amount of ${negBalance}. Please contact us at your earliest convenience`;

// After:
  // new:
    // Default Arguments.
    // Minimum Balance = 1000.
  const posBalance = (balance = 1000) => balance;



// Symbol:

// Basis:
const symKemet = Symbol('Ankh');



// Arrow Functions:

// Basis:
const grantAccess = (username, password) => {
  if (username && location) {
      return "Access Granted";
  } else {
      retun "Access Denied";
  }
}

