const User = require('../models/UserModel')
const bycrypt = require('bcryptjs')
const secret = '58ghgfhfhfirretrotieywqdf'
const JWT = require('jsonwebtoken')
const salt = bycrypt.genSaltSync(10)
const Register = async (req, res) => {
    const { email, username, pass } = await req.body
    const found = await User.findOne({ email })
    if (found) {
        res.json(' account is already in use')
    } else {
        const userDoc = await User.create({ email, pass: bycrypt.hashSync(pass, salt), username })
        res.json('REGISTERATED')
    }
}
const Login = async (req, res) => {
    const { email, pass } = req.body
    try {
        const found = await User.findOne({ email })
        if (found) {
            const passOk = bycrypt.compareSync(pass, found.pass)
            if (passOk) {
                JWT.sign({ email: found.email, username: found.username, id: found._id }, secret, {}, (err, token) => {
                    if (err) throw err
                    res.cookie('token', token).json({ found })
                })
            } else {
                res.json('pass not ok')
            }
        } else {
            res.json('account not here')
        }
    } catch (err) {
        res.json(err)
    }
}

module.exports = { Register, Login }
