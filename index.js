const express = require("express")
const cors = require("cors")
const {router}= require("./auth.js")
const bodyParser = require('body-parser');
const news = require("./news.js")
//const dom = require("./search.js")
const app = express()
//const reloader = require("./reload.js")



// Increase the limit for JSON payloads
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

// For URL-encoded payloads
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(router)
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' })); 
app.use(express.urlencoded({extended : true}), bodyParser.urlencoded({ limit: '50mb', extended: true }) )
app.use(news)

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))


app.listen(5000, ()=>{
	console.log("server is loading on port 5000")
})
