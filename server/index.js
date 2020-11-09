const express = require('express')

const app = express()

app.get('/', (_, res) => {
  res.send('Hello!')
})

app.listen(8080, () => console.log('App listening at port 8080'))