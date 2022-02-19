const express = require('express');
const apiMocker = require('connect-api-mocker');
var app = express();
const cors = require('cors');
app.use(cors());



app.get('/', (req,res) =>{
    res.send("Hello, Please enter any genre after /book/ in url");
});

app.use('/book', apiMocker('Mockserver')); 

app.listen(4000, () => {
    console.log("Server is up!!")
});

