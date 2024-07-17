import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

export const signup = async (req, res) => {
    try {
        const {fullname, username, password, confirmPassword, gender} = req.body
        if (password !== confirmPassword)
            return res.status(400).send({error: "Password do not match"})
 
        const user = await User.findOne({username})

        if (user)
            return res.status(400).send({error: "Username already exists"})

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilepic
        })

        if (newUser){
            generateToken(newUser._id, res)
            await newUser.save()
            
            res.status(201).send({
                _id: newUser._id,
                fullName: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(400).send({error: "Invalid user data"})
        }

    } catch (error) {
        res.status(400).send({error: "Internal Server Error" + error})
    }
}

export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect)
            return res.status(400).send({error: "Invalid credentials"})

        generateToken(user._id, res)

        console.log(req.cookies)

        res.status(200).send({
            _id: user._id,
            fullName: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        res.status(400).send({error: "Internal Server Error" + error})
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        res.status(400).json({error: "Internal Server Error" + error})    
    }
}