const dotenv = require('dotenv');
dotenv.config();

// console.log(`Your API key is ${process.env.API_KEY}`);
// const mockAPIResponse = require('./mockAPI.js')
var path = require('path')
const express = require('express')
var cors = require('cors')
var FormData = require('form-data');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express()
app.use(express.json());
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


app.post('/NLP', (req, res)=> {
    const formdata = new FormData();
    formdata.append("key","68026594a4a5205e45709879a77f7229");
    formdata.append("url", req.body.url);
    formdata.append("lang", "auto"); 
    console.log(req.body)

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
        .then(response => ({
          status: response.status, 
          body: response.json()
        }))
        .then(({ status, body }) => {
            body.then(data => {console.log(data);res.send(data)})
        })
        .catch(error => console.log('error', error));

    
})
