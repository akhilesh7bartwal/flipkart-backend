const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

//routes
const userRoutes= require("./routes/user.js");

//enviorment vaiables or you can say constants
env.config();

//mongodb connection
//mongodb+srv://akhilesh:<password>@cluster0.ma5a9.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://akhilesh:${process.env.MONGO_DB_PASSWORD}@cluster0.ma5a9.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }
).then(()=>{
    console.log("database connected.");
});


app.use(bodyParser());
app.use('/api', userRoutes);

//console.log(userRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server in running on port ${process.env.PORT}`);
})

  