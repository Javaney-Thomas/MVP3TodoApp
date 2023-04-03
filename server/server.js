const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); //pool allows us to write queries for postgres

//middleware  //to get data from the client side you must use the request.body object //remember to start server by "nodemon server"
app.use(cors());
app.use(express.json()); //this gets access to request.body and hgets you json data, next step is building your DB and table

app.listen(5000, () => {
  console.log("server has started on port 5000");
  console.log("server has started on port 5000");
});

//ROUTES


//Create a todo
app.post("/todos", async(req, res) => {
  try {
    console.log(req.body);
  }catch (err) {
    console.error(err.message)
  }
});


//GET ALL TODOS

//Update

//Delete