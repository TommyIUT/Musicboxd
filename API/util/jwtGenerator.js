const jwt = require("jsonwebtoken")
require("dotenv").config()

function jwtGenerator(userbox_id) {
    const payload =  {
        userbox: userbox_id
    }

    return jwt.sign(payload, process.env.jwtSecret, {expiresIn: "1hr"})
}

module.exports = jwtGenerator