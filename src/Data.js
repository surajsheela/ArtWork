import guitarIsland from "./Images/guitar-island-sunset.jpg";
import sunsetCastle from "./Images/sunset-castle.jpg";
import riversideScenery from "./Images/riverside-scenery.jpg";
import waterfallScenary from "./Images/waterfall-scenary.jpg";
import santaClaus from "./Images/santa-claus.jpg";
import vinayakaChavithi from "./Images/vinayaka-chavithi.jpg";
import valentinesDay from "./Images/valentines-day.jpg";
import budhaPainting from "./Images/budha-painting.jpg";
import dasaraDurgadevi from "./Images/dasara-durgadevi.jpg";
import jokerCharacter from "./Images/joker-character.jpg";
import minionCartoon from "./Images/minion-cartoon.jpg";

// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Guitar Island Sunset",
    category: "Nature",
    price: 40,
    description:
      "Trees arranged in a shape of a guitar on a sunset background. Music Island with a guitar reflection in the water.",
    popular: true,
    imageUrls: [
      guitarIsland
    ]
  },
  {
    id: 2,
    name: "Sunset Castle Landscape scene",
    category: "Nature",
    price: 101,
    description:
      "Sunset at the beautiful Castle, this piece is sure to be a welcome addition to your home",

    popular: false,
    imageUrls: [
      sunsetCastle
    ]
  },
  {
    id: 3,
    name: "Riverside Scenery",
    category: "Nature",
    price: 200,
    description:
      "Beautiful Riverside Scenary Painting with house beside a beautiful lake/pond",
    popular: false,
    imageUrls: [
      riversideScenery
    ]
  },
  {
    id: 4,
    name: "Budha Painting",
    category: "Character",
    price: 102,
    description:
      "Harry Potter is an ordinary boy who lives in a cupboard under the stairs at his Aunt Petunia" +
      "and Uncle Vernon's house, which he thinks is normal for someone like him who's parents have been killed in" +
      "a 'car crash'. He is bullied by them and his fat, spoilt cousin Dudley, and lives a very unremarkable life" +
      "with only the odd hiccup (like his hair growing back overnight!) to cause him much to think about. That is" +
      "until an owl turns up with a letter addressed to Harry and all hell breaks loose! He is literally rescued by a world where nothing is as it seems and magic lessons are the order of the day. Read and find out how Harry discovers his true heritage at Hogwarts School of Wizardry and Witchcraft, the reason behind his parents mysterious death, who is out to kill him, and how he uncovers the most amazing secret of all time, the fabled Philosopher's Stone! All this and muggles too. Now, what are they?",

    popular: true,
    imageUrls: [
      budhaPainting
    ]
  },
  {
    id: 5,
    name: "Dasara Durgadevi",
    category: "Occassion",
    price: 102,
    description:
      "Dasara Durgadevi" ,

    popular: true,
    imageUrls: [
      dasaraDurgadevi
    ]
  },

  {
    id: 7,
    name: "Santa Claus",
    category: "Occassion",
    price: 200,
    description: "",
    popular: false,
    imageUrls: [
      santaClaus
    ]
  },
  {
    id: 8,
    name: "Waterfall Scenary",
    category: "Nature",
    price: 55,
    description: "Waterfall scenary with frame",
    popular: false,
    imageUrls: [
      waterfallScenary
    ]
  },
  {
    id: 9,
    name: "Joker Character",
    category: "Character",
    price: 55,
    description: "Joker Character",
    popular: false,
    imageUrls: [
      jokerCharacter
    ]
  },
  {
    id: 10,
    name: "Vinayaka Chavithi",
    category: "Occassion",
    price: 120,
    description: "",

    popular: false,
    imageUrls: [
      vinayakaChavithi
    ]
  },
  {
    id: 11,
    name: "Minion Cartoon",
    category: "Character",
    price: 220,
    description:
      "Minion Cartoon",
    popular: false,
    imageUrls: [
      minionCartoon
    ]
  },
  {
    id: 12,
    name: "valentines Day",
    category: "Occassion",
    price: 130,
    description:
      "valentinesDay",

    popular: false,
    imageUrls: [
      valentinesDay
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "All paintings",
    icon: "list"
  },
  {
    name: "Nature",
    icon: "nature"
  },
  {
    name: "Occassion",
    icon: "watch"
  },
  {
    name: "Character",
    icon: "menu_book"
  },
  {
    name: "Pouring",
    icon: "computer"
  }
];

// Data for rendering menu.
const dataForTheMenu = [
  { name: "Home page", url: "/", icon: "home", id: 0 },
  {
    name: "Product categories",
    id: 1,
    children: categories.map((x, i) => {
      return {
        name: x.name,
        id: i,
        url: "/?category=" + x.name,
        icon: x.icon
      };
    })
  }
];

export { sampleProducts, categories, dataForTheMenu };
