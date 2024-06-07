const express = require('express');
const path = require('path');
const connectToMongoDB = require('./database.js');
const User = require('./Models/User.js');
const app = express();
const PORT = 5000;

connectToMongoDB();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'FrontEnd/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'FrontEnd', 'build', 'index.html'));
});

app.post('/auth/login', async (req, res) => {
  console.log('received');
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const curr_user = await User.find({ email, password });
    console.log(curr_user);
    if (curr_user.length === 0) {
      return res.json({ message: 'invalid credentials', bit: 0 });
    } else {
      return res.json({ message: 'login successful', user_1: curr_user, bit: 1 });
    }
  } catch (error) {
    console.error('error:', error);
    return res.json({ message: 'error' });
  }
});

app.post('/sign', async (req, res) => {
  const { email, password, name, age, gender } = req.body;

  if (!email) {
    return res.json({ message: 'email must be mentioned' });
  }
  if (password.length < 5) {
    return res.json({ message: 'password must be larger' });
  }

  try {
    const existingUser = await User.find({ email });

    if (existingUser.length > 0) {
      return res.json({ message: 'User already existed' });
    }

    await User.create({
      name,
      email,
      password,
      age,
      gender,
      photo: "https://th.bing.com/th/id/OIP.GHGGLYe7gDfZUzF_tElxiQHaHa?rs=1&pid=ImgDetMain0"
    });

    return res.json({ message: 'user created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/photo', async (req, res) => {
  const { email, photo } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.photo = photo;
    await user.save();

    return res.json({ message: 'Photo updated successfully' });
  } catch (error) {
    console.error('Error updating photo:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});