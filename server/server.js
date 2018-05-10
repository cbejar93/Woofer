const express = require('express'); 
const bodyParser = require('body-parser'); 
const app = express();

//  Import controllers 
const renter = require('./controllers/renter.js');
const rentee = require('./controllers/rentee.js');
const props = require('./controllers/proposals.js');

var db = require('./models');

app.use(bodyParser.json());
// Use controllers 

app.use('/api/renter', renter);
app.use('/api/rentee', rentee);
app.use('/api/props', props);



app.get('/', (req, res) => {
    res.send('Go away')
})

const PORT = process.env.PORT || 3000; 

app.listen(PORT, err => {
    if(err) throw err; 
    console.log('Server listening on port:', PORT);
});