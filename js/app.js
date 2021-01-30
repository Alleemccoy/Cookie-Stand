'use strict';

// get each store element by id
// Seattle

const seattleHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
    for(var i = 0; i < seattleHours.length; i++){
      let totalCookiesThisHour = this.generateCookiesSoldInAnHour();
      this.cookiesSoldPerHourArray.push(totalCookiesThisHour);
      console.log(`total cookies this hour: ${totalCookiesThisHour}`);
      console.log(this.cookiesSoldPerHourArray);

      // console.log(i)
      // console.log(seattleHours[i]);
    }

  },

  // A method to render the list items
  render: function(){
    let ul = document.getElementById('seattle');
    for(let i = 0; i < seattleHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${seattleHours[i]} : ${seattle.cookiesSoldPerHourArray[i]}`;
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


// Tokyo

const tokyoHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let tokyo = {
  name: 'Tokyo',
  // The min number of customers per hour
  minimumCustomerEachHour: 3,
  // The max number of customers per hour
  maximumCustomerEachHour: 24,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 1.2,
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
    for(var i = 0; i < tokyoHours.length; i++){
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
    let ul = document.getElementById('tokyo');
    for(let i = 0; i < tokyoHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${tokyoHours[i]} : ${tokyo.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(listItem);

    }

    console.log('I am in the render method');
  },

};


tokyo.generateCookieSales();
tokyo.render();

// TODO: Need two elements by ID for the 5 lists


// Write 5 object literals - will finish the first one first, then do the others based on THAT


// Executable Code
// tokyo.render();


// Dubai

const dubaiHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let dubai = {
  name: 'Dubai',
  // The min number of customers per hour
  minimumCustomerEachHour: 11,
  // The max number of customers per hour
  maximumCustomerEachHour: 38,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 3.7,
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
    for(var i = 0; i < tokyoHours.length; i++){
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
    let ul = document.getElementById('dubai');
    for(let i = 0; i < dubaiHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${dubaiHours[i]} : ${tokyo.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(listItem);

    }

    console.log('I am in the render method');
  },

};


dubai.generateCookieSales();
dubai.render();

// TODO: Need two elements by ID for the 5 lists


// Write 5 object literals - will finish the first one first, then do the others based on THAT


// Executable Code
// dubai.render();


// Paris

const parisHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let paris = {
  name: 'Paris',
  // The min number of customers per hour
  minimumCustomerEachHour: 20,
  // The max number of customers per hour
  maximumCustomerEachHour: 38,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 2.3,
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
    for(var i = 0; i < tokyoHours.length; i++){
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
    let ul = document.getElementById('paris');
    for(let i = 0; i < parisHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${parisHours[i]} : ${tokyo.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(listItem);

    }

    console.log('I am in the render method');
  },

};


paris.generateCookieSales();
paris.render();

// TODO: Need two elements by ID for the 5 lists


// Write 5 object literals - will finish the first one first, then do the others based on THAT


// Executable Code
// paris.render();


// Lima

const limaHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let lima = {
  name: 'Lima',
  // The min number of customers per hour
  minimumCustomerEachHour: 2,
  // The max number of customers per hour
  maximumCustomerEachHour: 16,
  // The average number of cookies purchased per customer
  averageCookiesSoldPerCustomer: 4.6,
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
    for(var i = 0; i < tokyoHours.length; i++){
      let totalCookiesThisHour = this.generateCookiesSoldInAnHour();
      this.cookiesSoldPerHourArray.push(totalCookiesThisHour);
      console.log(`total cookies this hour: ${totalCookiesThisHour}`);
      console.log(this.cookiesSoldPerHourArray);

      // console.log(i)
      // console.log(limaHours[i]);
    }

  },

  // A method to render the list items
  render: function(){
    let ul = document.getElementById('lima');
    for(let i = 0; i < limaHours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = `${limaHours[i]} : ${tokyo.cookiesSoldPerHourArray[i]}`;
      ul.appendChild(listItem);

    }

    console.log('I am in the render method');
  },

};


lima.generateCookieSales();
lima.render();

// TODO: Need two elements by ID for the 5 lists


// Write 5 object literals - will finish the first one first, then do the others based on THAT


// Executable Code
// lima.render();