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
