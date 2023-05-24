const User   = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt  = require('bcrypt');
const JWT_SECRET = 'NEWTONSCHOOL'

const saltRounds = 10;

/*

Post request json file structure
    obj =  {
        name
        email
        password
        role
    }


You need to complete the controller for user signupUser.
you need to register the user.
If any user with given mail allready exist than throw error.
Complete the schema and to look the user schema look ../models/user.js
you should hash the password using bcrypt before saving it.



Response on different scenario

1. On success reg

200 Status code with 
json = {
    message: 'User signed up successfully',
    status: 'success'
}

2. if user with given email all ready exist.

409 Status code with 
json = {
    status: 'fail',
    message: 'User with the given email already registered'.
}

3. if something went wrong

500 Status code with 
json = {
    status: 'fail',
    message: 'Something went wrong'
}

*/

const signupUser = async (req, res) => {

    const {email, password, name, role} = req.body;

    //Write your code here.

}

/*
loginUser Controller

Get request json file structure
    obj =  {
        email,
        password
    }


You need to complete the controller for user loginUser.
you need to login the user.
To look the user schema look ../models/user.js
password is hashed using bcrypt while saving it so while matching you need to match the hashed password.


Response on different scenario

1. Invalid Password

401 Status code with 
json = {
        message: 'Invalid password. Try again!',
        status: 'fail'
    }


2. Email Doesnot Exist

404 Status code with 
json = {
        message: 'User with this email does not exist!',
        status: 'fail'
    }

3. Success Login

//JWT token that will contain payload containing { userId }
generate a JSON web token (JWT) with the user's { userId } as the payload,
sign it with a JWT_SECRET key, and set the expiration time to 1 hour
//Don't change JWT_SECRET Secret Key.

200 Status code with 
json = {
  status: 'success',
  token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ.eyJ1c2VySWQiOi'
}



*/

const loginUser =async (req, res) => {

    const email  = req.body.email;
    const password = req.body.password;

    //Write your code here.

}

/*
 You need to implement a logout controller which takes an token as input from req.body, verifies the token, clears the cookie and logs out the user.
 
 req.body = {
    "token": token
 }

 Instructions:
 
 If the token is missing, the controller should respond with a 401 Unauthorized status and a JSON object containing a 'message' field with value 'Authentication failed: Missing token.', and a 'status' field with value 'fail'.
  
 If the token is valid, the controller should clear the cookie and respond with a 200 OK status and a JSON object containing a 'message' field with value 'Logged out successfully.', and a 'status' field with value 'success'.
 
 If there is an error during the JWT verification process or clearing the cookie, the controller should respond with a 500 Internal Server Error status and a JSON object containing a 'message' field with value 'Something went wrong', a 'status' field with value 'fail', and an 'error' field with the error object.
 
 Input:
 Authorization Token, token is present in req.hearders.authorization
 
 Output:
 {
 "message": "Logged out successfully.",
 "status": "Success"
 }
 */

 const logoutUser = (req, res) => {
    const token = req.body.token;

   //Write your code here.
    
};

module.exports = { signupUser, loginUser, logoutUser };
