const express = require('express');

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.json(
    {
      "quote": "Why are you keeping the curiosity door locked?",
      "source" : "Stranger things",
      "author": "Dustin"
    }
  );
})

app.get('/about', (req, res) => {
  res.send('PAW 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})
