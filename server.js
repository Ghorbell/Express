const express = require('express')
const path=require('path')
const app = express()
const port = 3000
const workinghours=require('./middleware/WorkingTime')

app.use(workinghours)
app.use(express.static(path.join(__dirname, "view")));
app.get('/', (req, res) => res.sendFile("./view/Home.html",{root:__dirname}))
app.get('/contactus', (req, res) => res.sendFile("./view/contact.html",{root:__dirname}))
app.get('/services', (req, res) => res.sendFile("./view/services.html",{root:__dirname}))

app.use((req,res)=>{
    res.status(400).sendFile("./view/notfound.html",{root:__dirname})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))