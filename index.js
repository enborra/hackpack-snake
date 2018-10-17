const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.static(__dirname));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/index.htm');
});

// app.get('/asteroids', function(req,res){
//   res.sendFile(__dirname + '/asteroids.htm');
// });

app.listen(port, () => console.log('Example  app listening on port $(port)!'))
