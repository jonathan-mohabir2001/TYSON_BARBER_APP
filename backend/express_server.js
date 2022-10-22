const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 8000; 
/*
Server created and PORT numbers set. 
App set to express methods. 
*/
app.get('/', (req,res) => {
  res.send('Express server side home created.')
})
app.listen(PORT, () => {
  console.log( `The server has started onto ${PORT}`)
})