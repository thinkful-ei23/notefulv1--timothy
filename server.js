'use strict';

// Load array of notes
const data = require('./db/notes');

console.log('Hello Noteful!');

// INSERT EXPRESS APP CODE HERE...
const express = require('express');



const app = express();

// ADD STATIC SERVER HERE
app.use(express.static('public'));

app.listen(8000, function () {
  console.info(`Server listening on ${this.address().port}`);
}).on('error', err => {
  console.error(err);
});

app.get('/api/notes', (req, res) => {
    res.json(data);
    const searchTerm = req.query.searchTerm;
    if(searchTerm){
        let filteredList = data.filter(function(item){
            return item.title.includes(searchTerm);
        });
        res.json(filteredList);
    } else{
        res.json(data);
    }
    res.json(data);
  });
  app.get('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    res.json(data.find(item => item.id === Number(id)));
  });
