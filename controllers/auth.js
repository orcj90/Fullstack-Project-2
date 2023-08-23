const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/db')


exports.register = async (req, res) => {
    // const firstName = req.body.firstName;
    // const lastName = req.body.lastName;
    // const email = req.body.email;
    // const password = req.body.password
    // const confirmPassword = req.body.confirmPassword

    const { firstName, lastName, email, password, confirmPassword } = req.body;

    if (firstName && lastName && email) {
        if (password === confirmPassword) {

            const users = await User.find({})

            const user = users.find(user => user.email === email)

            if (!user) {
                await User.create({
                    id: users.length + 1,
                    firstName,
                    lastName,
                    email,
                    password: bcrypt.hashSync(String(password), 8)
                })

                res.json({ success: true, message: "User is registered successfully", user })
            } else {
                res.json({ success: false, message: "The user with this email already exists", user:null })
            }


        } else {

            res.json({ success: false, message: "password don't match!", user:null })
        }
    } else {
        res.json({ success: false, message: "either email or first name or last name are missing" })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user) {

        const validPassword = bcrypt.compareSync(String(password), user.password)

        if (!validPassword) {
            res.status(403).json({ success: false, message: 'wrong credentials', token: null, password: bcrypt.hashSync(String(password), 8) })
        }
        else {

            const { email, firstName, lastName } = user

            let loggedUser = {
                email,
                firstName,
                lastName
            }

            const token = jwt.sign({
                loggedUser
            }, config.secret, {
                algorithm: "HS256",
                expiresIn: 86400 // 24 hours
            })
            
            res.json({ success: true, message: 'logged in successfully', token })
        }


    } else {
        res.status(403).json({ success: false, message: 'wrong credentials' })
    }


}

exports.logout = (req, res) => {
    
}