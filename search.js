const api = "./details.js"
const axios = require("axios")






var leagues = []
var teams = []
var players = []




async function dom(){
const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_leagues&APIkey="+api)

const data = raw_data.data



data.map((item)=>{
	leagues.push(item.id)
})


leagues.map(async(item)=>{
  	   const raw_data = await axios.get("https://apiv3.apifootball.com/?action=get_teams&league_id="+leagues+"&APIkey="+api)
       const data = raw_data.data

       data.map((item)=>{
       		teams.push(item)
       })
  })
 


 teams.forEach((item)=>{
 			item.players.map(async(item)=>{
 				players.push(item)
 			})
 })




}






dom()


console.log(leagues, teams, players)

module.exports = dom  
