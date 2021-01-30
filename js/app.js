'use strict';

// get each store element by id
// Seattle
// let myContainer = document.getElementById('container');
// console.log(myContainer);
// let seattleList = document.getElementById('seattle');

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

    // console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    // console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    // return randomNumberOfCustomers;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateRandomCustomerInAnHour() * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailyStoreTotal += hourlyCookies;

    }
  },

  render: function () {
    this.calcCookiesPerHour();
    let seattleList = document.getElementById('seattle');
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${this.cookiesSoldPerHourArray[i]}`;
      seattleList.appendChild(listItem);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    seattleList.appendChild(li);
    // console.log('I am in the render method');
  },

};


seattle.render();

// Tokyo

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

    // console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    // console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    // return randomNumberOfCustomers;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateRandomCustomerInAnHour() * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailyStoreTotal += hourlyCookies;

    }
  },

  render: function () {
    this.calcCookiesPerHour();
    let tokyoList = document.getElementById('tokyo');
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${this.cookiesSoldPerHourArray[i]}`;
      tokyoList.appendChild(listItem);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    tokyoList.appendChild(li);
    // console.log('I am in the render method');
  },

};


tokyo.render();

// Paris

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

    // console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    // console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    // return randomNumberOfCustomers;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateRandomCustomerInAnHour() * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailyStoreTotal += hourlyCookies;

    }
  },

  render: function () {
    this.calcCookiesPerHour();
    let parisList = document.getElementById('paris');
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${this.cookiesSoldPerHourArray[i]}`;
      parisList.appendChild(listItem);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    parisList.appendChild(li);
    // console.log('I am in the render method');
  },

};


paris.render();

// Dubai

let dubai = {
  name: 'Dubai',
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

    // console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    // console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    // return randomNumberOfCustomers;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateRandomCustomerInAnHour() * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailyStoreTotal += hourlyCookies;

    }
  },

  render: function () {
    this.calcCookiesPerHour();
    let dubaiList = document.getElementById('dubai');
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${this.cookiesSoldPerHourArray[i]}`;
      dubaiList.appendChild(listItem);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    dubaiList.appendChild(li);
    // console.log('I am in the render method');
  },

};


dubai.render();

// Lima

let lima = {
  name: 'Lima',
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

    // console.log('getting random number of customers');
    // Generates a random number of customers inclusive of the min and the max
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);

    // console.log(`Random number of customers: ${randomNumberOfCustomers}`);
    // return randomNumberOfCustomers;
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let hourlyCookies = Math.ceil(this.generateRandomCustomerInAnHour() * this.averageCookiesSoldPerCustomer);
      this.cookiesSoldPerHourArray.push(hourlyCookies);
      this.dailyStoreTotal += hourlyCookies;

    }
  },

  render: function () {
    this.calcCookiesPerHour();
    let limaList = document.getElementById('lima');
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = `${hours[i]} : ${this.cookiesSoldPerHourArray[i]}`;
      limaList.appendChild(listItem);

    }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal}`;
    limaList.appendChild(li);
    // console.log('I am in the render method');
  },

};


lima.render();

