const express =require('express')
const app=express();
require('dotenv').config()
require('./db/connection')
const cors=require('cors')
const cookieParser=require('cookie-parser')
const path = require('path');

//middleware
app.use(express.json());
app.use(cookieParser())
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/uploads',express.static(__dirname+'/uploads'));

app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
));

app.get('/test',(req,res)=>{
    res.json("test is ok");
})
// go and check at localhost:4000/test ---->test is ok


const userRoute=require('./routes/userRoute')
const placeRoute=require('./routes/placeRoute')


//
app.use('/api',userRoute)
app.use('/api',placeRoute)



const port= process.env.PORT || 50000
app.listen(port,()=>{
    console.log(`server started on port ${port}`)
});
