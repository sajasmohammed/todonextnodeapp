const express=require('express');
app=express();

app.get('/', (req, res)=>{
    res.send("hello worlds");
});
app.listen(5000);