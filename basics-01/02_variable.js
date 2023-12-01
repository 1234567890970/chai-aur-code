const accountId = 123456;
var accountPassword = "23456" ;
let accountEmail = "dheeraj@gogl.com";
accountCity = "raighar";
let accountState;

// accountId = 3 ;// Not allowed

accountPassword = "987654";
accountEmail = "hero@hc.com";
accountCity = "heydrabad"

console.log(accountId);

/*
prefer not to use {var}
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState] )