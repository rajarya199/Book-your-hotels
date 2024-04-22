const express =require('express')
const app=express();

app.get('/test',(req,res)=>{
    res.json("test is ok");
})

// go and check at localhost:4000/test ---->test is ok
app.listen(4000);
