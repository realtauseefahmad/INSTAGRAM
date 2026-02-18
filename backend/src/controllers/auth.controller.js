const userModel = require('../models/user.model');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function registerController(req, res) {
    const { username, email, password, bio, profileImage ,isPrivate } = req.body;
    // Here you would typically add logic to save the user to the database

    //! check if user with the same Email & Username already exists
    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })
    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User already exists" + (isUserAlreadyExists.email == email ? "Email already Exists " : "Usename already Exists ")
        })
    }

    //? Hash the password before saving it to the database
    const hash = await bcrypt.hash(password, 10)

    //* Create the user in the database
    const user = await userModel.create({
        username,
        email,
        bio,
        profileImage,
        password: hash,
        isPrivate: isPrivate ?? false
    })

    //? Generate a JWT token for the user
    const token = jwt.sign({
        id: user._id,
        username : user.username
    }, process.env.JWT_SECRET, { expiresIn: "2d" })

    //? Set the token in an HTTP-only cookie
    res.cookie("token", token)

    //? Send a response back to the client
    res.status(201).json({
        message: "User Registered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

async function loginController(req, res) {
    const { username, email, password } = req.body

    //? Find the user in the database by username or email
    const user = await userModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })

    //? If the user is not found, return an error response
    if (!user) {
        return res.status(404).json({
            message: "user not found"
        })
    }

    //? Hash the provided password and compare it with the stored hash in the database

    const isPasswordValid = await bcrypt.compare(password, user.password)

    //? If the password is invalid, return an error response
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "password invalid"
        })
    }

    //? If the password is valid, generate a JWT token for the user
    const token = jwt.sign(
        { id: user._id , username : user.username},
        process.env.JWT_SECRET,
        { expiresIn: "2d" }
    )


    res.cookie("token", token)

    //? Send a response back to the client with the user information (excluding the password)
    res.status(200).json({
        message: "user loggedIn successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}