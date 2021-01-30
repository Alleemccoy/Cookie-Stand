'use strict';

// get each store element by id

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  generateRandomCustomerInAnHour: function () {

    console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    let randomNumberOfCustomers = Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    return randomNumberOfCustomers;
  },

  // A method to calculate and populate our number of cookies sold per hour array
  generateCookiesSoldInAnHour: function () {

    console.log('Here we are getting the total cookies for this hour!');
    // getting the number of customers for this hour
    let randomCustomerForOneHour = this.generateRandomCustomerInAnHour();

    console.log(`Random customer per hour: ${randomCustomerForOneHour}`);

    // Getting number of cookies sold this hour
    let totalCookiesThisHour = randomCustomerForOneHour * this.averageCookiesSoldPerCustomer;

    console.log(`Total cookies this hour: ${totalCookiesThisHour}`);

    return Math.round(totalCookiesThisHour);
  },

  generateCookieSales: function () {
    console.log('About to start generating cookie sales!!');

    // Refactoring code to generate cookies for each hour
    for(var i = 0; i < hours.length; i++){
      let totalCookiesThisHour = this.generateCookiesSoldInAnHour();
      this.cookiesSoldPerHourArray.push(totalCookiesThisHour);
      console.log(`total cookies this hour: ${totalCookiesThisHour}`);
      console.log(this.cookiesSoldPerHourArray);

      // console.log(i)
      // console.log(hours[i]);
    }

  },

  // A method to render the list items
  render: function(){
    let ul = document.getElementById('seattle');
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${seattle.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(listItem);

    }

    console.log('I am in the render method');
  },

};


seattle.generateCookieSales();
seattle.render();

// TODO: Need two elements by ID for the 5 lists


// Write 5 object literals - will finish the first one first, then do the others based on THAT


// Executable Code
// seattle.render();
