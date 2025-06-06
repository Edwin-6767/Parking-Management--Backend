// const express = require('express')
// const app = express()
// const port = 3000
// const mongoose = require('mongoose');
// const userRouter = require('./routes/userroute');
// const buildingRouter = require('./routes/buildingroute');


// app.use(express.json());


// app.use('/user', userRouter); 
// app.use('/building', buildingRouter);


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// main().then(()=>console.log("connected to mongo db")).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb+srv://edwinrj1975:123@cluster0.fqtmh3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// }


const express = require('express');
const mongoose = require('mongoose');
const app = express();

const userRouter = require('./routes/userroute');
const buildingRouter = require('./routes/buildingroute');

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URL;

app.use(express.json());

app.use('/user', userRouter);
app.use('/building', buildingRouter);

async function startServer() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

startServer();


