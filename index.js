const express = require('express')
const app = express()
const path=require('path')
const port = 3000

const srijanmiddleware = (req,res,next) => {
    console.log(req)
    next()
}


app.use(express.static(path.join(__dirname,'public')))
app.use(srijanmiddleware)

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
    res.json({"harry":34})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})