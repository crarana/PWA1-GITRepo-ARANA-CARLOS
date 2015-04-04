/* 
 Name: Carlos Arana
 Date: 04/04/2015
 Assignment: Goal1: Assignment Duel1
*/

//self-executing function
(function(){
 console.log("FIGHT!!!");

//Variables and functions being declared
	//declare players
	var playerOneName = "Spiderman";
	var playerTwoName = "Batman";
	
	//declare player damage
	var playerOneDamage = 50;
	var playerTwoDamage = 50;
	
	// declare player health
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	
	//declare round number
	var round = 0;
	
	//this is the fight function
	function fight(){
		console.log('this is the fight function');
		
		//this is the alert which indicates the current state of the duel
		alert(playerOneName+":"+playerOneHealth+" "+"*START*"+" "+playerTwoName+":"+playerTwoHealth);
		
		//for loop which increments the rounds
		for (var i=0; i < 10; i++){
			
			//random formula is - Math.floor(Math.random() * (max-min) + min);
			var minDamage1 = playerOneDamage * .5;
			var minDamage2 = playerTwoDamage * .5;
			var f1 = Math.floor(Math.random()*(playerOneDamage-minDamage1)+minDamage1);
			var f2 = Math.floor(Math.random()*(playerTwoDamage-minDamage2)+minDamage2);
		
			//inflicting damage 
			playerOneHealth -= f1;
			playerTwoHealth -= f2;
			
			//console log print for current state of combat
			console.log(playerOneName+":"+playerOneHealth+" "+"*START*"+" "+playerTwoName+":"+playerTwoHealth);
			
			//check for winner with the results of current combat round
			var results = winnerCheck();
			//prints result to console log for winnercheck
			console.log(results);
			
			
			//checks to see if winner has resulted, if not, then continue onto the next round with increment round
			if(results === "no winner"){
				//round increment
				round ++; 
				//alert for current state of duel
				alert(playerOneName+":"+playerOneHealth+" "+"*ROUND*"+" "+round+" "+playerTwoName+":"+playerTwoHealth);
			}else{
				//calls result from winnerCheck function
				alert(results);
				//breaks if the rounds finish due to lack of health for each player
				break;
			};
			
		};
	};
	
	//function to check for a winner including conditional statement
	function winnerCheck(){
		console.log("in winnerCheck FN");
		//local variable which could be overriden by the following conditional statement
		var result="no winner";
		
		//conditional statement which checks for a winner
		if(playerOneHealth<1&&playerTwoHealth<1){
			result = "You Both Die";	
		}else if(playerOneHealth<1){
			result =playerTwoName+" "+"WINS!!!"
		}else if(playerTwoHealth<1){
			result=playerOneName+" "+"WINS!!!"
		};
		//sets result for winnerCheck function
		return result;
	};
	
//Program begins with invocation 
	fight();
})();