// import jsonwebtoken
import jwt from "jsonwebtoken";

import configAuth from "../config/auth.js"

export const getToken = (req, res) => {

    const { username, password } = req.body

    if (!username || !password || configAuth.users[username] !== password) {
        return res.status(401).end()
    }

    const token = jwt.sign({ username }, configAuth.jwtKey, {
        algorithm: "HS256",
        expiresIn: configAuth.jwtExpirySeconds,
    })
    console.log("token:", token)

    res.json({'token': token})
}

export const refreshToken = (req, res) => {
    res.status(201);
}
