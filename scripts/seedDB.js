const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio");

const projectSeed = [
  {
    name: "Trowell",
    blurb_main:
      "An App for landscapers to look up valuable plant information and organize gardens by their clients.",
    blurb_spotlight:
      "An app intended for professional gardeners to organize plants and vital information by their clients.",
    contribution: [
      "Logo Design",
      "Front End Development",
      "Back End Development",
    ],
    stack: ["React", "Node.Js", "MongoDb", "Cheerio"],
    websiteUrl: "https://trowel-app.herokuapp.com/",
    githubUrl: "github.com/benrgross/trowel",
    img: "/img/trowel-snapshot-2.png",
    why: "I built trowel as the culminating project for my bootcamp. Coming from owning a landscaping company, I wanted to create an app to help my day to day operations. While there are a lot of gardening apps out there, there aren't any specifically directed at professionals with the key information about plants we want to have on hand. The app aims to let the user generate a client list, go into each client and view, add or edit the plants in that garden. This is particuleary useful when you have new employees who are not familiar with a clients garden or the plants within them.",
    future:
      "Trowel is far from done, and in my spare time I intend to keep adding to its functionality and quality of data. I plan to integrate weather data to help manage watering schedules and forecast plant care. The end product will be a marketable organization and information application for professional gardening and landscaping companies that will relieve the all to familiar stress of keeping all the accounts and plant needs within the gardeners head.",
  },
  {
    name: "Pipe Cleaner",
    blurb_main:
      "An App to help dieters track the ingredients in their meals, to better identify their effect on their digestive system.",
    blurb_spotlight:
      "Pipe Cleaner is intended to help the user track ingredients to better understand the effect on their personal digestive system.",
    stack: ["jQuery", "Node.Js", "Handlebars", "Bulma", "Express"],
    webstieUrl: "http://four-top.herokuapp.com/",
    githubUrl: "https://github.com/benrgross/Party-Of-Four",
    img: "/img/pipe-cleaner.png",
    why: "The inspiration behind Pipe Cleaner was that my fiance was struggleing with a gastrointestinal disease. She had to maticulously track all the ingredients in the meals she was eating in order to identify the foods that were causing her distress. One of the issues was that it was becoming hard for her to remember what she ate without writing it down, and it was inconvenient for her to cary around a journal or search through notes in her phone. I wanted to build an app that gave her an easy to use dashboard for logging and refferencing ingredients in her meals.",
    future:
      "This is a rough bare bones functionality for this project. It really demonstrates my ability to build a full stack CRUD application. I want to keep moving forward and make the design more polished. Mostly though, I wasn't to set up functionality that highlights inflamatory foods and helps guide the user to avoid by firstly, informing them that it is inflamatory and secondly, offering them an alternative. I would also like to transform this application into a Next.Js app and remove the use of jQuery.",
  },
];

db.Project.deleteMany({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then((data) => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
