const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
