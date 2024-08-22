const express = require("express")
const mongoose = require("mongoose")

const bodyParser = require('body-parser');
const news = express.Router()
// Increase the limit for JSON payloads
news.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed

// For URL-encoded payloads
news.use(bodyParser.urlencoded({ limit: '1550mb', extended: true })); // Adjust the limit as needed


const news_schema = mongoose.Schema({


		time_stamp : {
			type : String
		},

		title : {
			type : String
		},

		cover_photo : {
			type : String
		},

		photo_album : [String],

		body : {
			type : String
		},
		author : {
			type : String
		},
		source : {
			type : String
		},
		 type : {

		 	type : String
		 },

		 player_id : String,
		 team_id : String,
		 league_id : String,

		 team_related : {
		 	type : String
		 },
		 player_related : {
		 	type : String
		 },
		 league_related : {
		 	type : String
		 },
		 notify : Boolean,
		 additonalBodies : [String]

})




const news_model = new mongoose.model("sportsup_news", news_schema)


let d = new Date()


const today_date = d.toISOString().split('T')[0]


news.post("/news", (req, res)=>{
	
			const parser =  JSON.parse(req.body.id)

			console.log(parser)
		
		const date = new Date()
			console.log(date.toLocaleString())
		const timer = date.toLocaleString()
		console.log(timer)

		const poster = new news_model({
			league_related : parser.selected_league,
			player_related : parser.player_related,
			team_related : parser.team_related,
			type : parser.category,
			author : parser.author,
			source : parser.source,
			body : parser.body,
			cover_photo : parser.cover,
			photo_album : parser.other_images,
			time_stamp : timer, 
			title : parser.title,
			notify : parser.notify,
			additonalBodies : parser.additon,
			
			team_id : parser.team_id,
			league_id : parser.league_id,


		})

		console.log(parser.additon)


		poster.save()


		


})

news.get("/sportsup_news", (req, res)=>{
async function over(){
			const result = await news_model.find()

			res.json(result)

}

over()
})


news.get("/news_post", (req, res)=>{
	res.send(

		)
})



module.exports = news