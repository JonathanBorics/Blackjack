const stwo = `  {
    _____ 
   |2    | 
   |  ^  |
   |     |
   |  ^  |
   |____Z|

}`;

const sthree = `  {
  _____ 
 |3    | 
 | ^ ^ |
 |     |
 |  ^  |
 |____E|

}`;

const sfour = `  {
    _____ 
   |4    | 
   | ^ ^ |
   |     |
   | ^ ^ |
   |____h|

}`;

const sfive = `  {
    _____ 
   |5    | 
   | ^ ^ |
   |  ^  |
   | ^ ^ |
   |____S|

}`;
const ssix = `  {
    _____ 
   |6    | 
   | ^ ^ |
   | ^ ^ |
   | ^ ^ |
   |____9|

}`;

const sseven = `  {
    _____ 
   |7    | 
   | ^ ^ |
   |^ ^ ^|
   | ^ ^ |
   |____L|

}`;

const seight = `  {
    _____ 
   |8    | 
   |^ ^ ^|
   | ^ ^ |
   |^ ^ ^|
   |____8|

}`;
const snine = `  {
    _____ 
   |9    | 
   |^ ^ ^|
   |^ ^ ^|
   |^ ^ ^|
   |____6|

}`;
const sten = `  {
    _____ 
   |10 ^ |
   |^ ^ ^|
   |^ ^ ^|
   |^ ^ ^|
   |___0I| 

}`;
const sJ = `  {
    _____  
   |J  ww| 
   | ^ {)| 
   |(.)% | 
   | | % | 
   |__%%[| 

}`;
const sQ = `  {
    _____  
   |Q  ww| 
   | ^ {(| 
   |(.)%%| 
   | |%%%| 
   |_%%%O| 

}`;

const sK = `  {
    _____ 
   |K  WW|
   | ^ {)|
   |(.)%%|
   | |%%%|
   |_%%%>|

}`;
const sA = `  {
    _____
   |A .  |
   | /.\ |
   |(_._)|
   |  |  |
   |____V|

}`;
/*
console.log(stwo);
console.log(sthree);
console.log(sfour);
console.log(sfive);
console.log(ssix);
console.log(sseven);
console.log(seight);
console.log(snine);
console.log(sten);
console.log(sK);
console.log(sJ);
console.log(sQ);
console.log(sA);
*/
const deckofcards = [
  stwo,
  sthree,
  sfour,
  sfive,
  ssix,
  sseven,
  seight,
  snine,
  sten,
  sA,
  sJ,
  sK,
  sQ,
];

const player1Card = [];

const cardIndex = randomIntFromInterval(0, 12);
const drawnCard = deckofcards[cardIndex];
//console.log(deckofcards.join(""));
console.log("-------------");
console.log(drawnCard);

function randomIntFromInterval(min, max) {
  // min and max included
  drawnCard.push(player1Card);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log("++++++++++++++");
console.log(player1Card);
const rndInt = randomIntFromInterval(1, 52);
console.log(rndInt);
