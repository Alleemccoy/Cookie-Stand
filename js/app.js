'use strict';


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

renderHeaderRow ();


let renderStoreRow = function () {
  let body = document.getElementById('body');
  for (let i = 0; i < locationNames.length; i++) {
    let trElement = document.createElement('tr');
    let thElement = document.createElement('th');
    thElement.textContent = locationNames[i].location;
    trElement.appendChild(thElement);
    for (let j = 0; j < locationNames[i].cookieSoldPerHr.length; j++) {
      let tdElement = document.createElement('td');
      tdElement.textContent = locationNames[i].cookieSoldPerHr[j];
      trElement.appendChild(tdElement);
    }
    let tdElement = document.createElement('td');
    tdElement.textContent = locationNames[i].dailySoldTotal;
    trElement.appendChild(tdElement);
    body.appendChild(trElement);
  }
};

renderStoreRow();

let renderFooterRow = function () {
  let footer = document.getElementById('foot-row');
  let thElement = document.createElement('th');
  thElement.textContent = 'Grand Total';
  footer.appendChild(thElement);
  // console.log(grandTotals);
  for (let i = 0; i < grandTotals.length; i++) {
    let tdElement = document.createElement('td');
    tdElement.textContent = grandTotals[i];
    footer.appendChild(tdElement);
  }
};

renderFooterRow();