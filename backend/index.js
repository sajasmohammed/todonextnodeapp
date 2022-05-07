const express=require('express');
const dotnev=require('dotenv');
const route=require('./routes/routes');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const connectDB=require('./database/connection');

app=express();

// URI of Database AND PORT
dotnev.config();

const PORT = process.env.PORT || 5000

// database connection 
connectDB();

app.use(cookieParser())

app.use(cors({
    credentials:true,
    origin: true
}));

app.use(express.json())

// route
app.use('/api', route);

app.listen(PORT);