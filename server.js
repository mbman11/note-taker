const express = require('express');
const api = require('./routes/api');
const html = require('./routes/html');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


