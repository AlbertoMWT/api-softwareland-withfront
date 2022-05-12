//express
const express = require('express');
const cors = require('cors');
//Mongo
const bodyParser = require('body-parser');

//Models and routes
const Task = require('./api/models/todoList.model'); //Created model loading here
const routes = require('./api/routes/todoList.routes');


//dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
app.use(cors());

//Mongoose instance connection url connection
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.bmx50.mongodb.net/${process.env.NAME}?retryWrites=true&w=majority`;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

//Spin up server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`todo list RESTful API server started on ${PORT}`);
});
