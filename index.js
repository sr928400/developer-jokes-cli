const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
  .then((response) => {
    const jokes = response.data.jokes;
    const joke = jokes[Math.floor(Math.random() * jokes.length)];

    console.log("Here's a developer joke for today:");
    console.log();
    console.log("Q:", joke.question);
    console.log("A:", joke.answer);
  })
  .catch(() => {
    console.log("Could not fetch a joke. Try again later.");
  });