'use strict';

// get each store element by id

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

function randomCustomerPerHour () {
  // get the randomCustomerPerHour
}

let seattle = {
  name: 'Seattle',
  // The min number of customers per hour
  minimumCustomerEachHour: 23,
  // The max number of customers per hour
  maximumCustomerEachHour: 65,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 6.3,
  // Will hold the calculated number of cookies sold each hour
  cookiesSoldPerHourArray: [],
  // Will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  // Docs used: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    // console.log('Im in randomCustomerEachHour');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function () {
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
    console.log('I am inside of calCookiesSoldEachHour');
    // Do something maybe use a for loop
    // Multiply customer number by average
    // Handle the number, do some rounding
    // Proof of life
    // Push into the cookiesSoldPerHourArray
  },
  // A method to render the list items
  render: funcation (){
    this.calcCookiesSoldEachHour();
    console.log('I am in the render method');
    // Do something
  }
};

let paris = {
  
}