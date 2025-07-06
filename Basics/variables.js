const accountId = 144553   
let accountEmail = "shatnanud430@gmail.com"
var accountPass = "1234"
accountCity = "Pune"

//accountId = 2
// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functioal scope 
*/
accountEmail = "sdnick.com"
accountPass = "1212121212"
accountCity = "Pune"
let Name;
console.table([accountEmail,accountId,accountPass,Name]);