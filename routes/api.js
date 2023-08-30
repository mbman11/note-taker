const route = require('express').Router();
const { readFile, writeFile } = require('fs/promises');

route.get("/notes", (req,res) => {
  readFile("db/db.json")
  .then(data => {
    res.send(data)
  })
});

route.post('/notes', (req,res)=>{
  const newNote = req.body
  readFile('db/db.json')
  .then(data => {
    const parsedData = JSON.parse(data)
    parsedData.push(newNote);
    return writeFile("db/db.json", JSON.stringify(parsedData))
    .then(data => {
      res.json('jobs done');
    })
  })
});

