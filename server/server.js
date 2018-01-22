const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(),
    port = 3001,
    libraryCtrl = require('./podcasts');

app.use(bodyParser.json());

app.get('/api/podcasts', libraryCtrl.read);
app.post('/api/podcasts', libraryCtrl.create);
app.put('/api/podcasts', libraryCtrl.update);
app.delete('/api/podcasts/:_id', libraryCtrl.delete);

app.listen(port, () => 
console.log(`Listening on port ${port}`
));