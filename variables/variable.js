const accountId = 548;
let accountEmail = "gauri@javascript.com";
var accountPassword = "gauri@123";
accountCity = "mumbai";
let accountState ;


// accountId = 123; // here const varibale is reassigned 
console.log(accountId);
// TypeError: Assignment to constant variable.

accountEmail = "saurabh@dneg.com";
accountPassword = "GauriPalyekar@123";
accountCity = "delhi";


console.table([accountEmail,accountPassword,accountCity , accountState]);
/*┌─────────┬─────────────────────┐
  │ (index) │ Values              │
  ├─────────┼─────────────────────┤
  │ 0       │ 'saurabh@dneg.com'  │
  │ 1       │ 'GauriPalyekar@123' │
  │ 2       │ 'delhi'             │
  │ 3       │ undefined           │
  └─────────┴─────────────────────┘
*/

// Note : variable declaired with const keyword can not be reassigned or redeclaired
// variable declaired with var can be reassigned or redeclaired
// variable declaired with let can be reassigned but can not be redeclaired

/*
Prefer Not to use Var because of issue in block scope and functional scope
*/


