const express = require('express')
const app = express()
const port = 3000

app.get('/chat', function(req, res){
  res.send('Hi there go to another route => /html')
})

app.get('/html',function(req,res){
    res.send('<html><body><h1 style="color:red">Hi Again</h1></body></html>')
})

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
})