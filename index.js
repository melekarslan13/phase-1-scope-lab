// Write your solution in this file!
var customerName = 'bob'
const leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  
  //console.log(customerName.toUpperCase());
  //console.log(customerName)
}

function setBestCustomer() {
   bestCustomer = 'not bob'

}

function overwriteBestCustomer() {
    console.log(bestCustomer)
  bestCustomer = 'maybe bob'
  console.log(bestCustomer)
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy'
}
//upperCaseCustomerName()
//console.log(customerName)
//console.log(bestCustomer)
setBestCustomer();
console.log(bestCustomer)
overwriteBestCustomer();
