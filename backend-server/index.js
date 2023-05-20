import express from "express";
import bodyParser  from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

// import routes
import userRoutes from './routes/user.js';
import serviceRoutes from './routes/service.js';

// connection for the express
const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true})); // it returns middleware that only parses JSON
app.use(bodyParser.urlencoded({limit:"30mb", extended: true})); // it parses incoming requests 
// app.use(cors());

// Allow access from the dashboard domain
var whitelist = ['https://webaccessify.com', 'https://dashboard.webaccessify.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors({ origin: '*', credentials: true }));

// middlewares for allowing files for requests
app.use('/wafy.css', express.static('wafy/css/wafy.css'))
app.use('/images', express.static('wafy/images'));

// Every route in the postRoutes will be start from /posts
app.use('/user/api/v1/', userRoutes);

// Routes convention for service APIs
app.use('/wafy/', serviceRoutes);
app.get('/', (req, res, next) => {
  res.send("You've hit the jackpot! 🎉 Your prize is a virtual pat on the back 👏. Good job! 👍")
});

// Now, its time to connect real database 
const CONNECTION_URL = 'mongodb+srv://wa-admin:nasmuetcs@wacluster.gungqps.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(PORT, ()=>{
        console.log(`Server running on the PORT ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error.message);
})