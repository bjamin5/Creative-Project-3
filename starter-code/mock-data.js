let mock = [{
    id: 1,
    name: "Toilet Paper",
    price: "$29.99",
    country: "Supplies",
    image: 'tp.jpg'
  },
  {
    id: 2,
    name: "Hand Sanitizer",
    price: "$5.99",
    country: "Supplies",
    image: "handSanitizer.jpg"
  },
  {
    id: 3,
    name: "Browning Carbon Folding Knife",
    price: "$53.99",
    country: "Knives",
    image: 'carbonKnife.jpg'
  },
  {
    id: 4,
    name: "Stormproof Match Case",
    price: "$11.69",
    country: "Supplies",
    image: 'matchCase.jpg'
  },
  {
    id: 5,
    name: "U.S. Military MRE Entrees, 12 Pack",
    price: "$44.99",
    country: "Food",
    image: 'mre.jpg'

  },
  {
    id: 6,
    name: "Solar Powered Weather Radio",
    price: "$44.99",
    country: "Supplies",
    image: 'radio.jpg'
  },
  {
    id: 7,
    name: "Elite First Aid Surgical Kit",
    price: "$26.99",
    country: "Supplies",
    image: 'eliteFirstAidKit.jpg'
  },
  {
    id: 8,
    name: "Magnesium Fire Starter Kit",
    price: "$17.99",
    country: "Supplies",
    image: 'magnesium.jpg'
  },
  {
    id: 9,
    name: "Peak Refuel Adventure Pack",
    price: "$121.49",
    country: "Food",
    image: 'peakfuel.jpg'

  },
  {
    id: 10,
    name: "Cold Steel Finn Wolf Folding Knife",
    price: "$58.49",
    country: "Knives",
    image: 'coldsteel.jpg'
  },
  {
    id: 11,
    name: "Cold Steel Bush Ranger Folding Knife",
    price: "$170.99",
    country: "Knives",
    image: "coldSteel2.jpg"
  },
  {
    id: 12,
    name: "Cold Steel Chaos Bowie Trench Knife",
    price: "$89.99",
    country: "Knives",
    image: "bowie.jpg"
  },
  {
    id: 13,
    name: "CRKT M40-03 Folding Knife",
    price: "$109.99",
    country: "Knives",
    image: "m40.jpg"
  },
  {
    id: 14,
    name: "CRKT Provoke First Responder Folding Knife",
    price: "$225.00",
    country: "Knives",
    image: "firstResponder.jpg"
  },
  {
    id: 15,
    name: "15009-ORG Steep Country Fixed Blade Knife with Gut Hook",
    price: "$114.75",
    country: "Knives",
    image: "hook.jpg"
  },
  {
    id: 16,
    name: "20 Pounds of Rice",
    price: "$20.00",
    country: "Food",
    image: "rice.jpg"
  },
  {
    id: 17,
    name: "Augason Farm's Deluxe Emergency 1-Year Food Supply(4 person)",
    price: "$4,348.36",
    country: "Food",
    image: "1yearsupply.jpg"
  },
  {
    id: 18,
    name: "Month Supply of Canned Ground Beef",
    price: "$50.16",
    country: "Food",
    image: "groundBeef.png"
  },
  {
    id: 19,
    name: "Sweet Potato Crackers",
    price: "$6.81",
    country: "Food",
    image: "crackers.jpg"
  },
  {
    id: 20,
    name: "Tang Orange Powdered Drink Mix",
    price: "$3.62",
    country: "Food",
    image: "tang.jpg"
  },
  {
    id: 21,
    name: "Bisquick Pancake Mix",
    price: "$4.16",
    country: "Food",
    image: "pancakes.jpg"
  },
  {
    id: 22,
    name: "Leather Leaf Fern",
    price: "$9.41",
    country: "Supplies",
    image: "leather-leaf.jpg"
  },
  {
    id: 23,
    name: "Dried Apricots",
    price: "$7.42",
    country: "Food",
    image: "dried-apricots.jpg"
  },
  {
    id: 24,
    name: "Orville Redenbacher Popcorn Kernals",
    price: "$5.53",
    country: "Food",
    image: "popcorn.jpg"
  },
  {
    id: 25,
    name: "50 Face Masks",
    price: "$60.00",
    country: "Supplies",
    image: "facemask.jpg"
  }

  // {
  //   id: 26,
  //   name: "Black Turtle Beans",
  //   price: "$4.67",
  //   country: "Canada",
  //   image: "turtle-beans.jpg"
  // },
  // {
  //   id: 27,
  //   name: "Bananas",
  //   price: "$2.64",
  //   country: "Canada",
  //   image: "bananas.jpg"
  //
  // },
  // {
  //   id: 28,
  //   name: "Salami",
  //   price: "$8.72",
  //   country: "Brazil",
  //   image: "salami.jpg"
  // },
  // {
  //   id: 29,
  //   name: "Proscuitto",
  //   price: "$9.86",
  //   country: "Brazil",
  //   image: "proscuitto.jpg"
  // },
  // {
  //   id: 30,
  //   name: "Cranberries",
  //   price: "$5.85",
  //   country: "United States",
  //   image: "cranberries.jpg"
  //
  // },
  // {
  //   id: 31,
  //   name: "Canteloupe",
  //   price: "$4.49",
  //   country: "United States",
  //   image: "canteloupe.jpg"
  // },
  // {
  //   id: 32,
  //   name: "Lemon",
  //   price: "$2.8Lemon5",
  //   country: "United States",
  //   image: "lemon.jpg"
  // },
  // {
  //   id: 33,
  //   name: "Pesto",
  //   price: "$2.67",
  //   country: "Brazil",
  //   image: "pesto.jpg"
  // },
  // {
  //   id: 34,
  //   name: "Grapefruit Juice",
  //   price: "$4.88",
  //   country: "Brazil",
  //   image: "grapefruit-juice.jpg"
  //
  // },
  // {
  //   id: 35,
  //   name: "Curry Paste",
  //   price: "$2.02",
  //   country: "Brazil",
  //   image: "curry-paste.jpg"
  // },
  // {
  //   id: 36,
  //   name: "Avocado Oil",
  //   price: "$4.45",
  //   country: "Canada",
  //   image: "avocado-oil.jpg"
  // },
  // {
  //   id: 37,
  //   name: "Queso Fresco",
  //   price: "$9.24",
  //   country: "Canada",
  //   image: "queso-fresco.jpg"
  // },
  // {
  //   id: 38,
  //   name: "Key Lime Pie",
  //   price: "$5.32",
  //   country: "Mexico",
  //   image: "key-lime-pie.jpg"
  // },
  // {
  //   id: 39,
  //   name: "Granny Smith Apple",
  //   price: "$2.12",
  //   country: "United States",
  //   image: "granny-smith.jpg"
  // },
  // {
  //   id: 40,
  //   name: "Morning Glory Muffin Mix",
  //   price: "$9.22",
  //   country: "Brazil",
  //   image: "muffin-mix.jpg"
  // },
  // {
  //   id: 41,
  //   name: "Heavy Whipping Cream",
  //   price: "$8.78",
  //   country: "Brazil",
  //   image: 'heavy-cream.jpg'
  // },
  // {
  //   id: 42,
  //   name: "Red Bell Pepper",
  //   price: "$9.03",
  //   country: "Brazil",
  //   image: 'red-bell-pepper.jpg'
  // },
  // {
  //   id: 43,
  //   name: "Perrier",
  //   price: "$9.36",
  //   country: "United States",
  //   image: 'perrier.jpg'
  // },
  // {
  //   id: 44,
  //   name: "Yukon Gold Potatoes",
  //   price: "$8.76",
  //   country: "Mexico",
  //   image: 'yukon-potatoes.jpg'
  // },
  // {
  //   id: 45,
  //   name: "Salmon Fillets",
  //   price: "$6.21",
  //   country: "United States",
  //   image: 'salmon-fillets.jpg'
  // },
  // {
  //   id: 46,
  //   name: "Tilapia Fillets",
  //   price: "$4.37",
  //   country: "Mexico",
  //   image: 'tilapia.jpg'
  // },
  // {
  //   id: 47,
  //   name: "Tomato Pesto",
  //   price: "$9.70",
  //   country: "Brazil",
  //   image: 'tomato-pesto.jpg'
  // },
  // {
  //   id: 48,
  //   name: "Oil - Olive Bertolli",
  //   price: "$8.92",
  //   country: "Brazil",
  //   image: 'olive-oil.jpg'
  // },
  // {
  //   id: 49,
  //   name: "Tear Drop Yellow Tomatoes",
  //   price: "$3.32",
  //   country: "Mexico",
  //   image: 'yellow-tomatoes.jpg'
  // },
  // {
  //   id: 50,
  //   name: "Smoked Paprika",
  //   price: "$8.31",
  //   country: "Brazil",
  //   image: 'smoked-paprika.jpg'
  // }
]

export default mock;
