const Application = require("./src/brain");

function application() {
  return new Application().props(
    "6e647a636774686c7873",
    {
      id: "6e647a636774686c7873",
      name: "John Doe",
      email: "john.doe@example.com",
      city: "Thane",
      country: "USA",
      occupation: "Software Developer",
      hobby: "Reading",
      favorite_food: "Pizza",
      music_genre: "Rock,pop",
      language: "English, Hindi",
      timezone: "GMT-5",
    },
    "phone"
  );
}

console.log(application());
