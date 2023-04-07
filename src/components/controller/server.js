const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
var routes = require('./routes/routes')
mongoose.set('strictQuery', false)

app.use(cors(
  {
    origin: 'http://localhost:8080'
  }
))

app.listen(9992, function check (err) {
  if (err) { console.log('error!') } else { console.log('started!') }
})
mongoose.connect('mongodb://localhost:27017/account', {useNewUrlParser: true, useUnifiedTopology: true},
  function checkDb (error) {
    if (error) {
      console.log('error connecting to db')
    } else {
      console.log('successfully connected to DB')
    }
  })
app.use(express.json())
app.use(routes)
