const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

try {
    mongoose.connect('mongodb+srv://derekwhittlle:avDmRb21xnp1HZ4B@Cluster0.wpyig8l.mongodb.net/?retryWrites=true&w=majority');
console.log('connected');
} catch (error) {
    console.log(error);
}


app.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/', async(req, res) => {
    const { email, firstName } = req.body
    const user = new User({ email, firstName })
    const ret = await user.save();
    res.json(ret);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
