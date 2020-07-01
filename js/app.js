'use strict';
console.log('app.js is connected.');


var imageElements = document.getElementsByTagName('img');
var footerElement

var itemIndex1 = 0;
var itemIndex2 = 1;
var itemIndex3 = 2;
var rounds = 25;
var allItems = [];

function Item(name, imageUrl) {
  this.name = name;
  this.imageUrl = imageUrl;
  this.timesClicked = 0;
  this.timesShown = 0;
  allItems.push(this);
}
//Create function for the chart render so that we can access the object properties.
function getChartArray(nameOfThePropertyIWant){
  var answer = [];
  for(var j = 0; j < allItems.length; j++){
    answer[j] = allItems[j][nameOfThePropertyIWant];
  }
  console.log(answer);
  return answer;
}





var bag = new Item('bag', 'images/bag.jpg');
var banana = new Item('banana', 'images/banana.jpg');
var bathroom = new Item('bathroom', 'images/bathroom.jpg');
var boots = new Item('boots.jpg', 'images/boots.jpg');
var breakfast = new Item('breakfast', 'images/breakfast.jpg');
var bubblegum = new Item('bubblegum', 'images/bubblegum.jpg');
var chair = new Item('chair', 'images/chair.jpg');
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
function imageWasClicked(event) {
  totalClicks++;
  if (event.srcElement.id === '1') {
    allItems[itemIndex1].timesClicked++;
    console.log('hit 1')
  } else if (event.srcElement.id === '2') {
    allItems[itemIndex2].timesClicked++;
    console.log('hit 2')
  } else if (event.srcElement.id === '3') {
    allItems[itemIndex3].timesClicked++;
    console.log('hit 3')
  }




  var nextItemIndex1 = Math.floor(Math.random() * allItems.length);
  while ((nextItemIndex1 === itemIndex1) || (nextItemIndex2 === nextItemIndex1)) {
    nextItemIndex1 = Math.floor(Math.random() * allItems.length);

  }

  var nextItemIndex2 = Math.floor(Math.random() * allItems.length);
  while ((nextItemIndex2 === itemIndex2) || (nextItemIndex3 === nextItemIndex2)) {
    nextItemIndex2 = Math.floor(Math.random() * allItems.length);

  }

  var nextItemIndex3 = Math.floor(Math.random() * allItems.length);
  while ((nextItemIndex3 === itemIndex3) || (nextItemIndex3 === nextItemIndex1)) {
    nextItemIndex3 = Math.floor(Math.random() * allItems.length);
  }

  itemIndex1 = nextItemIndex1;
  itemIndex2 = nextItemIndex2;
  itemIndex3 = nextItemIndex3;


  imageElements[0].src = allItems[itemIndex1].imageUrl;
  allItems[itemIndex1].timesShown++;
  imageElements[1].src = allItems[itemIndex2].imageUrl;
  allItems[itemIndex2].timesShown++;
  imageElements[2].src = allItems[itemIndex3].imageUrl;
  allItems[itemIndex3].timesShown++;



if (totalClicks >= rounds) {
  console.log('done')
  var footerElement = document.getElementsByTagName('footer');
  if (footerElement.firstElementChild) {
    footerElement.firstElementChild.remove();
  }
  // footerElement.textContent = 'Wow You Picked a bunch of items!';

  var asideUl = document.getElementById('itemResults')
  console.log('calling aside in html')
  for (var x = 0; x < allItems.length; x++) {
    var itemResultsListItem = document.createElement('li');
    itemResultsListItem.textContent = `${allItems[x].name} was clicked on ${allItems[x].timesClicked} times shown ${allItems[x].timesShown} times.`;
    asideUl.appendChild(itemResultsListItem);

    var percentageListItem = document.createElement('li');
    if (allItems[x].timesClicked === 0) {
      var math = `ZERO clicks and shown ${allItems[x].timesShown} time.`;
    } else {
      math = Math.round(((allItems[x]['timesClicked'] / allItems[x]['timesShown']).toFixed(2) * 100)) + '%';
    }
    percentageListItem.textContent = `${allItems[x].name} percentage of clicked on Items times shown is` + math;
    asideUl.appendChild(percentageListItem)
  }

  for (var i = 0; i < imageElements.length; i++) {
    imageElements[i].removeEventListener('click', imageWasClicked);
  }//that closes for loop
  runMyChartNow();
}// closes your if conditional for 25 clicks
}//closes the function

// var arrayLabels = [];
// var arrayData = [];


// function createLabels(){
//   for(var i = 0; i < allItems.length; i++){
//     arrayLabels.push(allItems[i].name)
//   }
// }
// function createData(){
//   for(var i = 0; i < allItems.length; i++){
//     arrayData.push(allItems[i].timesClicked)
//   }
// }

function runMyChartNow() {

  var ctx = document.getElementById('itemCanvas').getContext('2d');


  var itemChart = new Chart(ctx, {
    type: 'bar',
    data: {
      
      labels: getChartArray('name'),
      datasets: [{
        label: '# of Clicks',
      
        data: getChartArray('timesClicked'),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

}
for (var i = 0; i < imageElements.length; i++) {
  imageElements[i].addEventListener('click', imageWasClicked);
}

