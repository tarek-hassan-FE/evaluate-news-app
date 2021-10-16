const dotenv = require('dotenv');
dotenv.config();

// console.log(`Your API key is ${process.env.API_KEY}`);
const path = require('path')
const express = require('express')
const cors = require('cors')
const https = require('follow-redirects').https;
const fs = require('fs');


const app = express()
app.use(express.json());
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})


app.post('/NLP', (req, res)=> {
   
    let options = {
      'method': 'POST',
      'hostname': 'api.meaningcloud.com',
      'path': `/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=${req.body.url}`,
      'headers': {
      },
      'maxRedirects': 20
    };

    let requ = https.request(options, function (response) {
      let chunks = [];
  
      response.on("data", function (chunk) {
        chunks.push(chunk);
      });
  
      response.on("end", function (chunk) {
        let body = Buffer.concat(chunks);
        res.send(body.toString());
      });
  
      response.on("error", function (error) {
        console.error(error);
      });
    });
  
    requ.end();
})
