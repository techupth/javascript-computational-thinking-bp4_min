let orders = [
  {
    id: 1,
    customerName: "Brenn Hugk",
    productName: "Chocolate - Milk, Callets",
    productPrice: 94690,
    productQuantity: 35,
    creditCardType: "solo",
  },
  {
    id: 2,
    customerName: "Celia Dary",
    productName: "Bread - Pumpernickle, Rounds",
    productPrice: 10746,
    productQuantity: 87,
    creditCardType: "jcb",
  },
  {
    id: 3,
    customerName: "Toinette Blindermann",
    productName: "Bar - Granola Trail Mix Fruit Nut",
    productPrice: 94191,
    productQuantity: 31,
    creditCardType: "switch",
  },
  {
    id: 4,
    customerName: "Anjela Joannet",
    productName: "Cheese - Parmesan Cubes",
    productPrice: 5131,
    productQuantity: 96,
    creditCardType: "diners-club-carte-blanche",
  },
  {
    id: 5,
    customerName: "Kennith Bussons",
    productName: "Wine - White, Pinot Grigio",
    productPrice: 94432,
    productQuantity: 75,
    creditCardType: "jcb",
  },
  {
    id: 6,
    customerName: "Birdie Shepland",
    productName: "Tomato Paste",
    productPrice: 5845,
    productQuantity: 65,
    creditCardType: "visa-electron",
  },
  {
    id: 7,
    customerName: "Willyt Helks",
    productName: "Asparagus - Green, Fresh",
    productPrice: 89253,
    productQuantity: 26,
    creditCardType: "laser",
  },
  {
    id: 8,
    customerName: "Bill Champion",
    productName: "Wine - Red, Harrow Estates, Cab",
    productPrice: 922100,
    productQuantity: 40,
    creditCardType: "china-unionpay",
  },
  {
    id: 9,
    customerName: "Cris Druce",
    productName: "Bar Mix - Lemon",
    productPrice: 83104,
    productQuantity: 6,
    creditCardType: "jcb",
  },
  {
    id: 10,
    customerName: "Darnell O'Currine",
    productName: "Lime Cordial - Roses",
    productPrice: 99041,
    productQuantity: 75,
    creditCardType: "visa-electron",
  },
];

let scoreTest = [
  {
    name: "James",
    point: 40,
  },
  {
    name: "Ann",
    point: 80,
  },
  {
    name: "Joe",
    point: 52,
  },
  {
    name: "Ball",
    point: 67,
  },
  {
    name: "Mick",
    point: 89,
  },
  {
    name: "Ole",
    point: 10,
  }
]
let avgScore = 0
let totalScore = 0
for(let i=0; i < scoreTest.length; i++){
  totalScore = totalScore + scoreTest[i].point 
  avgScore = totalScore/scoreTest.length
}
console.log(`Average score is ${avgScore.toLocaleString()}`)

let mostScore =0
let mostScoreName
for(let i=0; i< scoreTest.length; i++){
   let score = scoreTest[i].point
  if(score > mostScore){
    mostScore = score
    mostScoreName = scoreTest[i].name
  }
}
console.log(`${mostScoreName} has the highest score, which is ${mostScore} points`)

let minScore =100
let minScoreName
for(let i=0; i< scoreTest.length; i++){
   let scores = scoreTest[i].point
  if(scores < minScore){
    minScore = scores
    minScoreName = scoreTest[i].name
  }
}
console.log(`${minScoreName} has the Lowest score, which is ${minScore} points`)