/*
Authenticate a User Login

Input:
  email: string,
  password: string

Output:
  boolean
*/

import bcrypt from 'react-native-bcrypt'
import Backend from './fetch.js'

module.exports.verify = async (email, password) => {
  //Get the hashed password for the given email
  let res = await Backend.post('user_hash', {"email": email});

  //return False if no password hash was found for the user email
  if(!res || !res.password)
    return false;

  //compare the given password to the hashed password
  let verified = await bcrypt.compare(password, res.password);
  return verified;
};
