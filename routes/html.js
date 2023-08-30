const route = require('express').Router();
const path = require('path');

route.get('/notes', (req,res)=>{
  const file = path.join(__dirname, "../public/notes.html")
  res.sendFile(file)
})

route.get('*', (req,res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"))
});


module.exports = route;