const User = require("../model/user");

const adduser = async (req, res) => {

const user=req.body;
const Userdetails=new User(user);

  await Userdetails.save();

  res.status(200).json({ message: 'User added successfully', user });
}


const getuser = async (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User found', user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
}

module.exports = {
  adduser,getuser
};  