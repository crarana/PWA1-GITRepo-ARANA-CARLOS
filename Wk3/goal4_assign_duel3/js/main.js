/* 
 Name: Carlos Arana
 Date: 04/04/2015
 Assignment: Goal1: Assignment Duel1
*/

//self-executing function



//Variables and functions being declared

//Arrays for players, playeronedamage, and playeronehealth

	var fighter1 = ["Spiderman", 20, 100]; //array for fighter1
	var fighter2 = ["Batman", 20, 100]; //array for fighter2
	
	var round = 1;
	//this is the fight function
	document.getElementById("round_number").innerHTML = '<h2>Click To Start Fight</h2>';
	document.getElementById("fight_btn").onclick = fight;
	
	function fight(){

			//random formula is - Math.floor(Math.random() * (max-min) + min);
			var minDamage1 = fighter1[1] * .5; //math equation for mindamage for fighter1
			var minDamage2 = fighter2[1] * .5; //math equation for mindamage for fighter2
			var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1); //math equation  for random damage for fighter1
			var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2); //math equation for random damage for fighter2
		
			//inflicting damage 
			fighter1[2] -= f1; //inflicting damage to fighter1's health
			fighter2[2] -= f2; //inflincting damage to fighter2's health
			document.getElementById("round_number").innerHTML = '<h2>Round' + ' ' + round + ' ' + 'Complete!!</h2>';
			document.getElementById("kabal").innerHTML = '<p>' + fighter1[0] + ':'+ ' ' + fighter1[2] + '</p>';
			document.getElementById("kratos").innerHTML = '<p>' + fighter2[0] + ':'+ ' ' + fighter2[2] + '</p>';
			
			//check for winner with the results of current combat round
			var results = winnerCheck(); 			
			
			//checks to see if winner has resulted, if not, then continue onto the next round with increment round
			if(results === "no winner"){
				round++;
			
				//round increment
			}else{
				//breaks if the rounds finish due to lack of health for 
				
			};
			
	};
	
	//function to check for a winner including conditional statement
	function winnerCheck(){
		console.log("in winnerCheck FN");
		//local variable which could be overriden by the following conditional statement
		var result="no winner";
		
		//conditional statement which checks for a winner
		if(fighter1[2]<1&&fighter2[2]<1){ //if fighter ones health, stored in index 2, is less than 1 && fighter twos health, stored in index 2, is less than 1
			document.getElementById("scores").innerHTML = '<p style="text-align: center;padding: 0 auto">You both lose!</p>';
			document.getElementById("fight_btn").onclick = function(e){
					e.preventDefault();
				return false;
			};
		}else if(fighter1[2]<1){ //if fighter1's health is less than 1, 
			document.getElementById("scores").innerHTML = '<p style="text-align: center;padding: 0 auto">' + fighter2[0] + ' ' +'wins!</p>';
			document.getElementById("fight_btn").onclick = function(e){
					e.preventDefault();
				return false;
			};
		}else if(fighter2[2]<1){ //if fighter2' health is less than 1,
			document.getElementById("kabal").innerHTML = '<p style="text-align: center;padding: 0 auto">' + fighter1[0] + ' ' + 'wins!</p>';
			document.getElementById("fight_btn").onclick = function(e){
					e.preventDefault();
				return false;
			};
		};
		//sets result for winnerCheck function
		return result;
	};
	
//Program begins with invocation 