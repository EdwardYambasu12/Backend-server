const {RegisterModel} = require("./auth.js")
const axios = require("axios")
const api = require("./details.js")


const temporary = [{
    email : "edwardyambasu.com",
    password : "EDWARDSE12",
    favorite_team : [],
    favorite_player : [],
    favorite_league : [
            581,
679,
375,
375,
653,
653,
653,
653,
50,
50,
50,
330,
330,
330,
192,
192,
192,
192,
192,
421,
421,
641,
641,
641,
641,
641,
641,
641,
44,
44,
44,
44,
41,
41,
41,
41,
41,
41,
41,
41,
42,
42,
42,
42,
42,
42,
115,
115,
374,
253,
253,
253,
253,
253,
219,
156,
352,
352,
352,
307,
307,
307,
305,
305,
305,
218,
218,
659,
601,
116,
116,
599,
599,
599,
118,
118,
118,
599,
158,
7097,
7097,
7097,
160,
214,
214,
214,
214,
223,
223,
223,
217,
217,
217,
99,
99,
99,
99,
355,
663,
334,
75,
75,
75,
334,
79,
79,
79,
222,
222,
222,
431,
431,
431,
431,
431,
431,
431,
7983,
7983,
7983,
7983,
7546,
7546,
7546,
7546,
7546,
522,
522,
522,
522,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
273,
433,
363,
363,
7541,
7541,
564,
522,
522,
353,
528,
289,
289,
355,
356,
468,
468,
227,
355,
355,
226,
426,
355,
355,
281,
355,
333,
333,
333,
259,
259,
259,
135,
135,
135,
40,
263,
263,
263,
643,
109,
109,
312,
54,
54,
54,
54,
355,
293,
293,
293,
191,
191,
191,
134,
134,
134,
134,
121,
121,
121,
121,
261,
261,
133,
133,
589,
355,
344,
344,
344,
308,
308,
308,
288,
288,
288,
203,
203,
203,
203,
111,
111,
69,
69,
69,
63,
63,
63,
63,
8083,
304,
7998,
8015,
8015,
398,
398,
398,
398,
398,
296,
296,
272,
272,
255,
183,
183,
183,
183,
183,
183,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
64,
274,
274,
274,
274,
661,
661,
355,
350,
350,
350,
350,
350,
350,
350,
350,
350,
7984,
7537,
7537,
355,
355,
355,
256,
256,
188,
188,
188,
188,
188,
188,
188,
188,
120,
120,
120,
120,
120,
355,
355,
355,
7980,
7980,
7980,
7980,
7980,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
292,
185,
185,
174,
173,
173,
173,
173,
94,
355,
236,
236,
173,
173,
173,
173,
173,
173,
420,
416,
416,
416,
8089,
8089,
8088,
8087,
8086,
8086,
8086,
8081,
8081,
8078,
8073,
8066,
8060,
8058,
8054,
8054,
8037,
8037,
174,
174,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
39,
114,
72,
72,
355,
80,
80,
80,
80,
8080,
8049,
8077,
409,
409,
409,
409,
80,
80,
8072,
142,
142,
142,
142,
343,
343,
343,
343,
343,
343,
343,
343,
355,
355,
406,
406,
183,
183,
183,
292,
292,
8003,
350,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
190,
355,
355,
7998,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
611,
661,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
355,
190,
190,
190,
661,
44,
41,
7097,
7097,
7097,
7097,
99,
99,
99,
334,
79,
7541,
7541,
643,
69,
255,
120,
185,
236,
8081,
8081,
406,
329,
        ],
    pinned_matches : [],
    phone_string : ""
}]




let d = new Date()


const today_date = d.toISOString().split('T')[0]
console.log(today_date)

const tomorrow_setup = new Date(d)
tomorrow_setup.setDate(d.getDate()+1)
const tomorrow_date = tomorrow_setup.toISOString().split('T')[0]
console.log(tomorrow_date)

const yesterday_setup = new Date(d)
yesterday_setup.setDate(d.getDate()-2)
const yesterday = yesterday_setup.toISOString().split("T")[0]

//Time Zone
function getTimeZone() {
    var offset = new Date().getTimezoneOffset(),
        o = Math.abs(offset);
    return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
}


let previousData = [];
let newData = [];
async function fetchData() {
  try {
    const response = await axios.get("https://apiv3.apifootball.com/?action=get_events&withPlayerStats=1&from="+today_date+"&to="+today_date+"&timezone="+getTimeZone()+"&APIkey="+api)
   newData = response.data // Assume the entire data is sent for simplicity
    
    
    // Compare newData with previousData to find changes
    const changes = findChanges(previousData, newData);

    // Process changes and send notifications
    processChanges(changes);

    // Update previousData to 

    	previousData = newData

  } catch (error) {
    console.error('Error fetching data:');
    
  }


  setTimeout(fetchData, 10000)
}

	fetchData()

const send_notification = (item)=>{


							console.log(item)
}



function findChanges(previousData, newData) {
    // For simplicity, let's assume this function detects changes based on IDs or some other criteria
    // In real scenario, you might use a more sophisticated comparison logic
    const changes = [];


    // Example: Compare IDs to detect changes
    for (let i = 0; i < newData.length; i++) {
        const newItem = newData[i];
        const foundInPrevious = previousData.find(item => item.match_id === newItem.match_id );

        	
        if(foundInPrevious == undefined){
        	

        }

        else{

        	if(newItem.cards.length != foundInPrevious.cards.length){
        			

        			var array_length = newItem.cards.length-1

        			const data = newItem.cards[array_length]
                    console.log(data)

        			if(data.card == "yellow card" ){




        				




        				if(data.away_fault == ""){
        					console.log("Yellow Card", data.home_fault, newItem.match_hometeam_name, data.time+"min")
        					 const item = temporary

                             console.log(data)

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it == newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)

                                 console.log(p_array, t_array, l_array)

                                if(p_array.length > 0){
                                    send_notification({event : "Yellow Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                                if(t_array.length > 0){
                                    send_notification({event : "Yellow Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                                if(l_array.length > 0){
                                    send_notification({event : "Yellow Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                            })

        				}

        				else if(data.home_fault == ""){
        					console.log("Yellow Card", data.away_fault, newItem.match_awayteam_name, data.time+"min")
        				
                            const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it == newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)

                                 console.log(p_array, t_array, l_array)
                                if(p_array.length > 0){
                                    send_notification({event : "Yellow Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                                if(t_array.length > 0){
                                     send_notification({event : "Yellow Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                                if(l_array.length > 0){
                                     send_notification({event : "Yellow Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                            })

                        }


        				
        			}

        			else if(data.card == "red card" ){


        				if(data.away_fault == ""){
        					console.log("Red Card", data.home_fault, newItem.match_hometeam_name, data.time+"min")

                             const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it === newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)

                                 console.log(p_array, t_array, l_array)
                                if(p_array.length > 0){
                                    send_notification({event : "Red Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                                if(t_array.length > 0){
                                    send_notification({event : "Red Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                                if(l_array.length > 0){
                                    send_notification({event : "Red Card", bearer : data.home_fault, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge})
                                }

                            })

        				}

        				else if(data.home_fault == ""){
        					console.log("Red Card", data.away_fault, newItem.match_awayteam_name, data.time+"min")

                                   const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it === newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)
                                 console.log(p_array, t_array, l_array)

                                if(p_array.length > 0){
                                    send_notification({event : "Red Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                                if(t_array.length > 0){
                                     send_notification({event : "Red Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                                if(l_array.length > 0){
                                     send_notification({event : "Red Card", bearer : data.away_fault, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge})
                                }

                            })
        				}


        				
        			}
        	}


        	else if(newItem.match_hometeam_score != foundInPrevious.match_hometeam_score || newItem.match_awayteam_score != foundInPrevious.match_awayteam_score ){

        				const goal_finder = newItem.goalscorer.length - 1
        				const goal =  newItem.goalscorer[goal_finder]
                        const data =  newItem.goalscorer[goal_finder]

                        console.log(goal)
        				

        				if(newItem.match_hometeam_score == foundInPrevious.match_hometeam_score){

        						console.log("Goal", newItem.match_awayteam_name, goal.home_scorer, goal.away_scorer, goal.score, goal.time+"min" )
        				          const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it == newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)

                                console.log(p_array, t_array, l_array)


                                if(p_array.length > 0){
                                    send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge, score : data.score})
                                }

                                if(t_array.length > 0){
                                     send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge, score : data.score})
                                }

                                if(l_array.length > 0){
                                     send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_awayteam_name, timing : data.time, badge : newItem.team_away_badge, score : data.score})
                                }

                            })    

                        }

        				else{
                           const goal_finder = newItem.goalscorer.length - 1
                        const goal =  newItem.goalscorer[goal_finder]
                        const data =  newItem.goalscorer[goal_finder]
        								
                                         const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it == newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)
                                 console.log(p_array, t_array, l_array)

                                if(p_array.length > 0){
                                    send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge, score : data.score})
                                }

                                if(t_array.length > 0){
                                     send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge, score : data.score})
                                }

                                if(l_array.length > 0){
                                     send_notification({event : "Goal", away_scorer : goal.away_scorer,  home_scorer : goal.home_scorer, team : newItem.match_hometeam_name, timing : data.time, badge : newItem.team_home_badge, score : data.score})
                                }

                            })
        				}
        	}


        	else if(newItem.lineup.home.starting_lineups.length != foundInPrevious.lineup.home.starting_lineups.length || newItem.lineup.away.starting_lineups.length != foundInPrevious.lineup.away.starting_lineups.length  ){
        					console.log("Lineup available for", newItem.match_hometeam_name+" " + "vs" + " "+ newItem.match_awayteam_name)
        	


                            const item = temporary

                            item.forEach((element)=>{
                                const p_array = element.favorite_player.filter((it)=> it == newItem.league_id)
                                const t_array = element.favorite_team.filter((it)=> it == newItem.match_hometeam_id || it == newItem.match_awateam_id )
                                const l_array = element.favorite_league.filter((it)=> it == newItem.league_id)

                                 console.log(p_array, t_array, l_array)
                                if(p_array.length > 0){
                                    send_notification({event : "Lineups available for", hometeam : newItem.match_hometeam_name, awayteam : newItem.match_awayteam_name })
                                }

                                if(t_array.length > 0){
                                     send_notification({event : "Lineups available for", hometeam : newItem.match_hometeam_name, awayteam : newItem.match_awayteam_name })
                                }
``
                                if(l_array.length > 0){
                                     send_notification({event : "Lineups available for", hometeam : newItem.match_hometeam_name, awayteam : newItem.match_awayteam_name })
                                }

                            })
            }

        	else{


        		
        	}
        }

       

        /*if (!foundInPrevious || foundInPrevious.status !== newItem.status) {
            // If not found in previous or status changed, consider it as a change
            changes.push(newItem);
        }*/
    }

    return changes;
}




// Function to process changes and send notifications
function processChanges(changes) {
    changes.forEach(change => {
        // Example: Send notification to subscribers based on change type (e.g., goal, lineup change)
        // In a real app, you would have logic to determine who to notify (based on team, player, league IDs)
 
        // Simulated notification sending logic
        // Example: sendNotification(change);
    });
}

