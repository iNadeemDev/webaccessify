import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();
//const secret = process.env.ACCESS_TOKEN_SECRET;
const secret = '9b19ffbeba547012d35f41f145cec1cab419ea750470906d2fdb801c41f75d258c7d9292d9f484521a78621ef002037bceb61fc32e4482b74f8fa1678923d126';

import UserModal from "../models/Users.js";
import ConfigModal from "../models/Configs.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await UserModal.findOne({ email });

    if (!userExist) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, userExist.password);

    if (!isPasswordCorrect) return res.status(401).json({ message: "Invalid credentials" });

    console.log(secret)
    const token = jwt.sign({ email: userExist.email }, secret, { expiresIn: "1h" });
    // Set the token as cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })

    // token to the web
    res.json({ token });

  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { name, email, companyName, password, website } = req.body;
  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 12);
      var key = generateRandomString(10);
      var keyExist = await UserModal.findOne({ clientKey: key });

      while (keyExist) {
        key = generateRandomString(10);
        keyExist = await UserModal.findOne({ clientKey: key });
      }

      const result = await UserModal.create({ name, email, password: hashedPassword, companyName, website, clientKey: key });

      res.status(201).json({ result });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const userdata = async (req, res) => {
  // Extract the JWT token from the request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If the token is not provided, return an error response
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Verify the token and decode the payload
  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.status(403).send('Forbidden');
    }

    try {
      // Getting user's data from the DB with email from the decoded token
      let userData = await UserModal.findOne({ email: decoded.email });
      let { name, email, website, companyName, clientKey } = userData;
      let respData = { name, email, website, companyName, clientKey }
      console.log(respData)
      return res.status(200).send(respData);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
}

export const getConfigs = async (req, res) => {
  // Extract the JWT token from the request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If the token is not provided, return an error response
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  // Verify the token and decode the payload
  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.status(403).send('Forbidden');
    }

    try {
      // Getting user's data from the DB with email from the decoded token
      let user = await UserModal.findOne({ email: decoded.email }).populate("config");

      // Get the Configs documents with the specified IDs
      const configs = user.config;
      let { btn_color, headings_color, primary_color, secondary_color, text_color, widStatus, wid_location, wid_size } = configs;
      let respData = { btn_color, headings_color, primary_color, secondary_color, text_color, widStatus, wid_location, wid_size }
      return res.status(200).send(respData);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
}

export const configs = async (req, res) => {
  // Extract the JWT token from the request headers
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // console.log(req.body)

  // If the token is not provided, return an error response
  if (!token) {
    return res.status(401).send('Unauthorized');
  }

  const { widStatus, btnColor, widPrimColor, widSecColor, headColor, textColor, widSize, widPosition } = req.body;

  const newConfigValues = { widStatus: widStatus, btn_color: btnColor, primary_color: widPrimColor, secondary_color: widSecColor, headings_color: headColor, text_color: textColor, wid_size: widSize, wid_location: widPosition };
  // console.log(newConfigValues)
  // Verify the token and decode the payload
  jwt.verify(token, secret, async (err, decoded) => {
    if (err) {
      return res.status(403).send('Forbidden');
    }

    try {
      // Getting user's data from the DB with email from the decoded token
      let user = await UserModal.findOne({ email: decoded.email }).populate("config");

      if (!user) {
        // user with given email not found
        return res.status(410);
      }

      const configId = user.config._id;

      // Update the desired properties of the config document
      const updatedConfig = await ConfigModal.findByIdAndUpdate(configId, {
        widStatus: newConfigValues.widStatus,
        btn_color: newConfigValues.btn_color,
        primary_color: newConfigValues.primary_color,
        secondary_color: newConfigValues.secondary_color,
        headings_color: newConfigValues.headings_color,
        text_color: newConfigValues.text_color,
        wid_size: newConfigValues.wid_size,
        wid_location: newConfigValues.wid_location,
        modifiedAt: new Date()
      },
        { new: true });
      return res.status(200).send(updatedConfig);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
  });
}


function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}