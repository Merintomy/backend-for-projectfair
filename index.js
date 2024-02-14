require('dotenv').config()


const express = require('express')

const cors = require('cors')
const db = require("./DB/connection")
const router = require('./Routes/router')
const appMiddleware = require("./Middlewares/appMiddleware")
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(appMiddleware)
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads')) //image exporting to frontend

const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log("listening on port" + PORT);
})

pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server Started</h1>`)
})