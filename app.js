import express from "express"

const app = express()
const port = 3000

//Ejs template engine
app.set('view engine','ejs');

//static files middleware
app.use(express.static('public'));


app.get("/",(req,res) => {
    res.render('index');
})
app.get("/about",(req,res) => {
    res.render('about');
})
app.get("/",(req,res) => {
    res.render('index');
})

app.listen(port, ()=> {
    console.log(`Application running on port : ${port}`)
})