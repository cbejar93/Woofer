const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express();





const PORT = process.env.PORT || 3000; 

app.listen(PORT, err => {
    if(err) throw err; 
    console.log('Server listening on port:', PORT);
});