const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//enviorment vaiables or you can say constants
env.config();

//mongodb connection
//mongodb+srv://akhilesh:<password>@cluster0.ma5a9.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://akhilesh:${process.env.MONGO_DB_PASSWORD}@cluster0.ma5a9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{
    console.log("database connected.");
});


app.use(bodyParser());

app.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Hello from Server',
    })
})

app.post('/data',(req,res,next) =>{
    res.status(200).json({
        message: req.body
    });
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server in running on port ${process.env.PORT}`);
})
<<<<<<< HEAD
=======
//hihihi
>>>>>>> origin/main
