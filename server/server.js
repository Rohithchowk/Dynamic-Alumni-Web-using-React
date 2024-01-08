// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const Connection = async () => {
  const URL = "mongodb+srv://miniproject1729:HYB5wx96QHQSwrDk@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
}

Connection();

const formDataSchema = new mongoose.Schema({
  name: String,
  age: String,
  image: String,
  vision:String,
  affiliation:String,
  awards:String,
   placement:String,
   instHighlights :String, 
   infrastructure :String
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submitForm', async (req, res) => {
  const { name, age, image,vision, affiliation,awards, placement, instHighlights, infrastructure } = req.body;
  const formData = new FormData({ name, age, image,vision, affiliation,awards, placement, instHighlights, infrastructure });

  try {
    await formData.save();
    res.status(201).json({ message: 'Data successfully inserted!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/fetchUserData', async (req, res) => {
  try {
    const userData = await FormData.findOne(); // Assuming you have only one user data entry
    res.json(userData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
