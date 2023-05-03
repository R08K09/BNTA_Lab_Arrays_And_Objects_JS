/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */
england = unitedKingdom[1];
england.touristAttractions = ["Big Ben", "London Eye", "Scafell Pike"];
console.log(england);


/**
 * Q2. Change the capital of Wales to "Cardiff"
 */
wales = unitedKingdom[2];
wales.capital = "Cardiff";
console.log(wales);


/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIrelandKeys = Object.keys(unitedKingdom[3]);
console.log(northernIrelandKeys);


/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */
let scotlandPopulation = unitedKingdom[0].population;
let englandPopulation = unitedKingdom[1].population;
let walesPopulation = unitedKingdom[2].population;
let northernIrelandPopulation = unitedKingdom[3].population;

// comparisons
if (scotlandPopulation > englandPopulation && scotlandPopulation > walesPopulation && scotlandPopulation > northernIrelandPopulation){
  console.log("Scotland has the biggest population in the UK.");
} else if (scotlandPopulation < englandPopulation && scotlandPopulation < walesPopulation && scotlandPopulation < northernIrelandPopulation) {
  console.log("Scotland has the smallest population in the UK.");
} else {
  console.log("Compared to the other countries in the UK, Scotland's population is somewhere in the middle.");
}

// alternative method to Q4
populations = [scotlandPopulation, englandPopulation, walesPopulation, northernIrelandPopulation]
populations = populations.sort(function(a, b){return a-b})

if(populations[0] === scotlandPopulation){
  console.log("smallest");
} else if (populations[3] === scotlandPopulation){
  console.log("biggest");
} else {
  console.log("in the middle");
}