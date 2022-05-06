const express=require('express');
const dotnev=require('dotenv');
const route=require('./routes/routes');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./database/connection');

app=express();

dotnev.config();

const PORT = process.env.PORT || 5000

connectDB();
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:['http://localhost:8080']
}));

app.use(express.json())

app.use('/api', route);

app.listen(PORT);