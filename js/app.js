'use strict';
console.log('app.js is connected.');


var imageElements = document.getElementsByTagName('img');

var itemIndex1  = 0;
var itemIndex2  = 1;
var itemIndex3 = 2;
var rounds = 25;
var allItems = [];

function Item(name, imageUrl){
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  allItems.push(this);
}


var bag = new Item('bag','images/bag.jpg');
var banana = new Item('banana', 'images/banana.jpg');
var bathroom = new Item('bathroom', 'images/bathroom.jpg');
var boots = new Item('boots.jpg', 'images/boots.jpg');
var breakfast = new Item('breakfast', 'images/breakfast.jpg');
var bubblegum = new Item('bubblegum', 'images/bubblegum.jpg');
var  chair = new Item('chair', 'images/chair.jpg');
var cthulhu = new Item('cthulhu', 'images/cthulhu.jpg');
var dogDuck = new Item('dog-duck', 'images/dog-duck.jpg');
var dragon = new Item('dragon', 'images/dragon.jpg');
var pen = new Item('pen', 'images/pen.jpg');
var petSweep = new Item('pet-sweep', 'images/pet-sweep.jpg');
var scissors = new Item('scissors', 'images/scissors.jpg');
var shark = new Item('shark', 'images/shark.jpg');
var sweep = new Item('sweep', 'images/sweep.png');
var tauntaun = new Item('tauntaun', 'images/tauntaun.jpg');
var unicorn = new Item('unicorn', 'images/unicorn.jpg');
var usb = new Item('usb', 'images/usb.gif');
var waterCan = new Item('water-can', 'images/water-can.jpg');
var wineGlass = new Item('wine-glass', 'images/wine-glass.jpg');

var totalClicks = 0;
function imageWasClicked(event){
  totalClicks++;
  if(event.srcElement.id === '1'){
    allItems[itemIndex1].timesClicked++;
    console.log('hit 1')
  } else if(event.srcElement.id ==='2'){
    allItems[itemIndex2].timesClicked++;
    console.log('hit 2')
  } else if(event.srcElement.id ==='3'){
    allItems[itemIndex3].timesClicked++;
    console.log('hit 3')
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

itemIndex1 = nextItemIndex1;
itemIndex2 = nextItemIndex2;
itemIndex3 = nextItemIndex3;

imageElements[0].src = allItems[itemIndex1].imageUrl;
imageElements[1].src = allItems[itemIndex2].imageUrl;
imageElements[2].src = allItems[itemIndex3].imageUrl;

}

if(totalClicks >=rounds){
  console.log('done')
  var footerElement = document.getElementsByTagName('footer')[0];
  if(footerElement.firstElementChild){
    footerElement.firstElementChild.remove();
  }
  footerElement.textContent = 'Wow You Picked a bunch of items!';
  }


for(var i = 0; i < imageElements.length; i++){
  console.log('okkkkk')
  imageElements[i].addEventListener('click', imageWasClicked, true);
}

