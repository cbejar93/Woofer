const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
var serveStatic = require('serve-static');
//  Import controllers
const renter = require('./controllers/renter.js');
const rentee = require('./controllers/rentee.js');
const props = require('./controllers/proposals.js');
const user = require('./controllers/users.js');
const msg = require('./controllers/threads.js')
// const picture = require('./controllers/pictures.js');

var db = require('./models');

app.use(cors());


app.use(bodyParser.json());
// Use controllers

// app.use('/',serveStatic(__dirname + "/dist"));

app.use('/api/renter', renter);
app.use('/api/rentee', rentee);
app.use('/api/props', props);
app.use('/api/msg', msg ); 
app.use('/api/user', user );
// app.use('api/upload', picture);
  


app.get('/', (req, res) => {
    res.send('Go away')
})

const PORT = process.env.PORT || 3000;
db.sequelize.sync({ force:false }).then (function(){
    app.listen(PORT, err => {
        if(err) throw err;
        console.log('Server listening on port:', PORT);
    });
});
