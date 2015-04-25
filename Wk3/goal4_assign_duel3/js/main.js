/* 
 Name: Carlos Arana
 Date: 04/24/2015
 Assignment: Goal4: Assignment Duel3
*/

//self-executing function



//Variables and functions being declared

//Objects for fighters 

	var fighter1 = {name:"Spiderman", damage:20, health:100}; //array for fighter1
	var fighter2 = {name:"Batman", damage:20, health:100}; //array for fighter2
	
	//declares first round
	var round = 1;
	
	//gets the element in #round_number and changes the html in it to the following
	document.getElementById("round_number").innerHTML = '<h2>Click To Start Fight</h2>';
	//gets the element #fight_btn and gives it an onclick method that triggers the fight function
	document.getElementById("fight_btn").onclick = fight;
	
	//this is the fight function
	function fight(){

			//random formula is - Math.floor(Math.random() * (max-min) + min);
			var minDamage1 = fighter1.damage * .5; //math equation for mindamage for fighter1
			var minDamage2 = fighter2.damage * .5; //math equation for mindamage for fighter2
			var f1 = Math.floor(Math.random()*(fighter1.damage-minDamage1)+minDamage1); //math equation  for random damage for fighter1
			var f2 = Math.floor(Math.random()*(fighter2.damage-minDamage2)+minDamage2); //math equation for random damage for fighter2
		
			//inflicting damage 
			fighter1.health -= f1; //inflicting damage to fighter1's health
			fighter2.health -= f2; //inflincting damage to fighter2's health
			document.getElementById("round_number").innerHTML = '<h2>Round' + ' ' + round + ' ' + 'Complete!!</h2>'; //change the html of round_number to display the current roung
			document.getElementById("kabal").innerHTML = '<p>' + fighter1.name + ':'+ ' ' + fighter1.health + '</p>'; //change the html of fighter 1 to display current round
			document.getElementById("kratos").innerHTML = '<p>' + fighter2.name + ':'+ ' ' + fighter2.health + '</p>'; //change the html of fighter 2 to display current round
			
			//check for winner with the results of current combat round
			var results = winnerCheck(); 			
			
			//checks to see if winner has resulted, if not, then continue onto the next round with increment round
			if(results === "no winner"){
				round++;
			
				//round increment
			}else{
				
			};
			
	};
	
	//function to check for a winner including conditional statement
	function winnerCheck(){
		console.log("in winnerCheck FN");
		//local variable which could be overriden by the following conditional statement
		var result="no winner";
		
		//conditional statement which checks for a winner
		if(fighter1.health<1&&fighter2.health<1){ //if fighter ones health, stored in index 2, is less than 1 && fighter twos health, stored in index 2, is less than 1
			document.getElementById("scores").innerHTML = '<p style="text-align: center;padding: 0 auto">You both lose!</p>'; //overrides score to display no winner, both lose.
			document.getElementById("fight_btn").onclick = function(e){ //calls the function that is triggered by the click event and changes it
					e.preventDefault(); //by preventing its default
				return false; // and stopping its action
			};
		}else if(fighter1.health<1){ //if fighter1's health is less than 1, 
			document.getElementById("scores").innerHTML = '<p style="text-align: center;padding: 0 auto">' + fighter2.name + ' ' +'wins!</p>'; //overrides score to display fighter2 as winner
			document.getElementById("fight_btn").onclick = function(e){ //calls the function that is triggered by the click event and changes it
					e.preventDefault(); //by preventing its default
				return false; // and stopping its action
			};
		}else if(fighter2.health<1){ //if fighter2' health is less than 1,
			document.getElementById("kabal").innerHTML = '<p style="text-align: center;padding: 0 auto">' + fighter1.name + ' ' + 'wins!</p>'; //overrides score to display fighter1 as winner.
			document.getElementById("fight_btn").onclick = function(e){ //calls the function that is triggered by the click event and changes it
					e.preventDefault(); //by preventing its default
				return false; // and stopping its action
			};
		};
		//sets result for winnerCheck function
		return result;
	};
	
//Program begins with invocation 