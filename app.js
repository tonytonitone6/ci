const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Mao');
});

app.listen(PORT, () => console.log(`Listen PORT: ${PORT}`));
