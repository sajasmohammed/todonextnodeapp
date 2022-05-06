const express=require('express');
const dotnev=require('dotenv');
const route=require('./routes/routes')
app=express();
const connectDB=require('./database/connection');

dotnev.config();

const PORT = process.env.PORT || 5000

app.use(express.json())

connectDB();

app.use('/api', route);

app.listen(PORT);