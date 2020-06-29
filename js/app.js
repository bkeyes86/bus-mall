'use strict';
console.log('app.js is connected.');


var imageElements = document.getElementsByTagName('img');

var itemIndex1  = 0;
var itemIndex2  = 1;
var itemIndex3 = 2;
var rounds = 25;
var allItems = [];

function Items(name, imagePath){
  this.name = name;
  this.imagePath = imagePath;
  this.timesClicked = 0;
  allItems.push(this);
}

new Item('bag','images/bag.jpg');
new Item('banana', 'images/banana.jpg');
new Item('bathroom', 'images/bathroom.jpg');
new Item('boots.jpg', 'images/boots.jpg');
new Item('breakfast', 'images/breakfast.jpg');
new Item('bubblegum', 'images/bubblegum.jpg');
new Item('chair', 'images/chair.jpg');
new Item('cthulhu', 'images/cthulhu.jpg');
new Item('dog-duck', 'images/dog-duck.jpg');
new Item('dragon', 'images/dragon.jpg');
new Item('pen', 'images/pen.jpg');
new Item('pet-sweep', 'images/pet-sweep.jpg');
new Item('scissors', 'images/scissors.jpg');
new Item('shark', 'images/shark.jpg');
new Item('sweep', 'images/sweep.jpg');
new Item('tauntaun', 'images/tauntaun.jpg');
new Item('unicorn', 'images/unicorn.jpg');
new Item('usb', 'images/usb.gif');
new Item('water-can', 'images/water-can.jpg');
new Item('wine-glass', 'images/wine-glass.jpg');

var totalClicks = 0;
function itemClicked(event){
  totalClicks++;
  if(event.srcElement.id === '1'){
    allItems[itemIndex1].timesClicked++
  } else if(event.srcElement.id ==='2'){
    allItems[itemIndex2].timesClicked++
  } else(event.srcElement.id ==='3'){
    allItems[itemIndex3].timesClicked++
  }
}

var nextItemIndex1 = Math.floor(Math.random() * allItems.length);
while ((nextItemIndex1 === itemIndex1) || (nextItemIndex2 === nextItemIndex1)){
  nextItemIndex1 = Math.floor(Math.random() * allItems.length);

}

var nextItemIndex2 = Math.floor(Math.random() * allItems.length);
while ((nextItemIndex2 === itemIndex2) || (nextItemIndex3 === nextItemIndex2)){
  nextItemIndex2 = Math.floor(Math.random() * allItems.length);

}

var nextItemIndex3 = Math.floor(Math.random() * allItems.length);
while ((nextItemIndex3 === itemIndex3) || (nextItemIndex3 === nextItemIndex1)){
  nextItemIndex3 = Math.floor(Math.random() * allItems.length);
}