'use strict';

let myForm = document.querySelector('form');

const locationNames = [];

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const grandTotals = new Array(hours.length + 1).fill(0);

//Constructor Function:

function CookieStand(location, minCustPerHr, maxCustPerHr, avgCookieSold) {
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookieSold = avgCookieSold;
  this.dailySoldTotal = 0;
  this.cookieSoldPerHr = [];
  this.calCookiesSoldEachHour();
  this.grandTotalsCalc();
  this.renderStoreRow();
  locationNames.push(this);
}

CookieStand.prototype.grandTotalsCalc = function () {
  for (let i = 0; i < this.cookieSoldPerHr.length; i++) {
    grandTotals[i] += this.cookieSoldPerHr[i];
    grandTotals[grandTotals.length - 1] += this.cookieSoldPerHr[i];
  }
};

CookieStand.prototype.randomCustEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    return Math.floor(Math.random() * (this.maxCustPerHr - this.minCustPerHr + 1) + this.minCustPerHr);
  }
};


CookieStand.prototype.calCookiesSoldEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourlyCookies = Math.ceil(this.randomCustEachHour() * this.avgCookieSold);
    // console.log(hourlyCookies);
    this.cookieSoldPerHr.push(hourlyCookies);
    this.dailySoldTotal += hourlyCookies;
  }
  // console.log(this.dailySoldTotal);
};

CookieStand.prototype.renderStoreRow = function () {
  let body = document.getElementById('body');
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);
  for (let j = 0; j < this.cookieSoldPerHr.length; j++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = this.cookieSoldPerHr[j];
    trElement.appendChild(tdElement);
  }
  let tdElement = document.createElement('td');
  tdElement.textContent = this.dailySoldTotal;
  trElement.appendChild(tdElement);
  body.appendChild(trElement);
};

new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);


let renderHeaderRow = function () {
  let trElement = document.getElementById('row');
  // console.log(trElement);
  let thElement = document.createElement('th');
  thElement.textContent = 'Location';
  trElement.appendChild(thElement);
  for (let i = 0; i < hours.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = hours[i];
    trElement.appendChild(tdElement);
  }
  let tdElement = document.createElement('td');
  tdElement.textContent = 'Total';
  trElement.appendChild(tdElement);
};

renderHeaderRow();




// renderStoreRow();

let renderFooterRow = function () {
  let footer = document.getElementById('footer');
  let trElement = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = 'Grand Total';
  trElement.appendChild(thElement);
  // console.log(grandTotals);
  for (let i = 0; i < grandTotals.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = grandTotals[i];
    trElement.appendChild(tdElement);
  }
  footer.appendChild(trElement);
};

renderFooterRow();


function handleSubmit(event) {
  event.preventDefault();
  let location = event.target.addLocation.value;
  console.log(location);
  let miniCust = +event.target.miniCust.value;
  console.log(miniCust);
  let maxCust = +event.target.maxCust.value;
  console.log(maxCust);
  let avgCookies = +event.target.avgCookies.value;
  console.log(avgCookies);
  new CookieStand(location, miniCust, maxCust, avgCookies);
  let footer = document.getElementById('footer');
  footer.removeChild(footer.firstChild);
  renderFooterRow();
  // renderStoreRow();
}

myForm.addEventListener('submit', handleSubmit);