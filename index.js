const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const userRouter = require('./routes/userroute');
const buildingRouter = require('./routes/buildingroute');


app.use(express.json());


app.use('/user', userRouter); 
app.use('/building', buildingRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main().then(()=>console.log("connected to mongo db")).catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://edwinrj1975:123@cluster0.fqtmh3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

}




