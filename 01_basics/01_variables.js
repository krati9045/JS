const accountId = 144553
let accountEmail= "krati672@gmail.com"
var accountPassword="1234"
accountCity = "Jaipur"

//accountId = 2      // not allowed (const cant be changed)

console.log(accountId);

accountEmail = "hhbdh@gmail.com"
accountPassword ="776"
accountCity="Bengaluru"
let accountState;

console.table([accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to  use var because of issue in block scope and function scope
*/
