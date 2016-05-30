const express = require('express');
const app = express();

app.use(express.static("./"));

let server = app.listen(8080, function() {
   let host = server.address().address;
   let port = server.address().port;
   
   console.log("Example app listene", host, port); 
});