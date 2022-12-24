const { request } = require('express');
const express = require('express')
const cors = require('cors');
const conn = require('./db')
const User = require('./models/user')
const UserData = require('./models/userData');
const app = express()
app.use(cors());
app.use(express.json());
const port = 5000

conn();

// Add Data to DataBase
app.post('/addData', async (req, res) => {
  try {
    const myData = req.body;
    if (!myData) return res.status(501).send({ msg: "data is empty." })
    const result = await User.create(myData)
    if (!result) return res.status(501).send({ error: "Internal server error" })
    res.status(200).send({ msg: "success" });
  } catch (e) {
    console.log(e)
    res.status(501).send({ error: "Internal server error" })
  }
})

app.post('/loginData', async (req, res) => {
  try {
    // console.log("called!!", req.body.email)
    if (req && req.body && Object.keys(req.body).length && req.body.email && req.body.password) {
      console.log("called!!", req.body)

      const inputData = req.body;
      let query = await User.find({ email: inputData.email, password: inputData.password });
      console.log("query>>>>>>>>:", query);
      if (Object.keys(query).length)
        res.status(200).send({ status: "success", message: "Successfully login!" });
      else
        res.status(200).send({ status: "failed", message: "Failed to find user credentials!" })
    } else {
      res.status(200).send({ status: "failed", message: "Input data not found" })
    }
  } catch (err) {
    res.status(400).send({ error: "Server error", result: err })
  }
})

app.post('/userData', (req, res) => {
  try {
    if (req && req.body) {
      console.log("hey")
    }
  } catch (error) {
    res.status(400).send({ err: "server error" })
  }
})

// app.get('/showData', async (req, res) => {
//   try {
//     const mydata = await User.find();
//     if (!mydata) {
//       return res.send("data not founde");
//     }
//     res.send(mydata);
//     mydata.map((e) => {
//       console.log(e.name);
//     });
//     res.send(mydata);

//   } catch (err) {

//   }
// })

//listening port
app.listen(port, () => {
  console.log(`CRUD app listening on port ${port}`)
})