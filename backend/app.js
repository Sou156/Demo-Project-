const path= require('path')

const express= require('express')
const bodyParser= require('body-parser')
const Post= require('./models/post')
const mongoose= require('mongoose')
const app= express();

const postsRoutes= require('./routes/posts')
mongoose.connect("mongodb+srv://sou:91fiE9Yrc1tBirQr@cluster0.9ewtg.mongodb.net/tacto?retryWrites=true&w=majority").then(()=>{
  console.log('Connected to database!')
}).catch((err)=>{
  console.log(err);
})

app.use(bodyParser.json())
app.use("/images", express.static(path.join("backend/images")))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,DELETE,OPTIONS")
  next();
})

app.use("/api/posts", postsRoutes)
module.exports=app;