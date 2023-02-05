const { request } = require('express');
const express = require('express')
const cors = require('cors');
const conn = require('./db')
const User = require('./models/user')
const product = require('./models/addproduct');
const user = require('./models/user');
const multer = require('multer');
const userData = require('./models/userData');
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

// images upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'E:/Crud_with_React-Node/crud/src/Image')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})
const upload = multer({ storage: storage })

app.use('/public', express.static('public'))

app.post('/product', upload.single('pimage'), async (req, res) => {
  try {
    // let pimage = (req.file) ? req.file.fieldname : null;
    console.log(req.file)
    var prod = await product.create({
      pimage: req.file.filename,
      pname: req.body.pname,
      price: req.body.price,
      desc: req.body.desc
    })
    if (!prod) {
      res.status(500).send({ success: false, error: "internal server error" })
    }
    res.status(200).send({ success: true, msg: "product added successfully" })

  } catch (error) {
    console.log(error)
    res.status(500).send({ success: false, error: error })
  }
})

app.post('/fetchproduct', async (req, res) => {
  // res.status(200).send("hello")
  try {
    const productdetail = await product.find()
    if (!productdetail) {
      return res.status(500).send("data not founde");
    }
    res.send(productdetail)
  } catch (e) {
    console.log('error', e)
    res.status(500).send({ status: false, error: e })
  }
})

app.post('/adddetails', async (req, res) => {
  try {
    const getdata = req.body
    if (!getdata) return res.status(500).send({ msg: "Data is empty" })
    var prod = await userData.create(getdata)
    if (!prod) {
      res.status(500).send({ success: false, error: "internal server error" })
    }
    res.status(200).send({ success: true, msg: "data added successfully" })
  } catch (error) {
    console.log(error)
    res.status(501).send({ success: false, error: error })
  }
})

// delete details

app.delete('/deleteuser/:id', async (req, res) => {
  try {
    let result = await userData.findById(req.params.id);
    console.log(result)
    if (!result) {
      res.status(500).send({ success: false, msg: 'internal server error' })
    }
    result = await userData.findByIdAndDelete(req.params.id)
    res.status(200).send({ success: true, msg: "data deleted successfully" })
  } catch (error) {
    res.status(500).send({ error, msg: 'internal server error' })
  }

})

// update data
app.put('/updateuser/:id', async (req, res) => {
  try {
    // console.log(req.params.id)
    const { fname, email, phone, city, state, pin, address, role } = req.body
    let result = await userData.findById({ _id: req.params.id })
    // console.log(result)
    if (!result) return res.status(500).send({ success: false, msg: 'internal server error' })
    const newuser = {
      fname: fname.trim(),
      email: email.trim(),
      phone: phone,
      city: city.trim(),
      state: state.trim(),
      pin: pin,
      address: address.trim(),
      role: role.trim()
    }
    const response = await userData.findByIdAndUpdate(req.params.id, { $set: newuser }, { new: true })
    if (!response) return res.status(500).send({ success: false, msg: "internal server error" })
    res.status(200).send({ success: true, mag: "data Updated Successfully" })
  } catch (error) {
    res.status(500).send({ error: error, msg: 'internal server error' })
    console.log(error)
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
      if (query[0].password === req.body.password)
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

app.get('/fetchdata', async (req, res) => {
  try {
    const mydata = await userData.find();
    if (!mydata) {
      return res.status(500).send("data not founde");
    }
    res.send(mydata)
  } catch (error) {
    res.status(500).send({ error, msg: 'internal server error' })
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