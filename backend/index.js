const express=require('express');
const dotnev=require('dotenv');
app=express();
const connectDB=require('./database/connection');

dotnev.config();
const PORT = process.env.PORT || 4000

connectDB();

app.get('/', (req, res)=>{
    res.send("hello worlds");
});
app.listen(PORT);