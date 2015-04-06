/* 
 Name: Carlos Arana
 Date: 04/04/2015
 Assignment: Analyze Buggy Search v1
*/

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //create var to get results from database
		searchInput = document.forms[0].search, //create var for input 
		currentSearch = '' //current search is blank
	;
	
	// Validates search query
	// this is important so that the search query is valid to be checked against the array. This would limit excessive/irrelevant results respectively.
	var validqte == function(query){ //this validates query
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){ //provides a space when there is no text in the input field
			query = query.substring(1, query.length); 
		};
		while(query.charAt(query.length-1) === ""){ //trims whitespace
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //if query is less than 3 characters
			alert("Your search query is too small, try again.); //alert too small
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); //focus on search input
			return; //return result
		};
		
		search(query); //variable function name 'search' for query parameter
	};
	
	// Finds search matches
	// this function is used to search the database with the parameters set by the query
	var search = function(query) //create a function named search for the parameter query
		
		// split the user's search query string into an array
		// this array is created to separate the words into separate pieces to be cross-referenced with the database
		var queryArray = query.join(" "); // run function query.join under name queryArray
		
		// array to store matched results from database.js
		// this array is used to store the results that match each word
		var results = []; //create array titled results 

		// loop through each index of db array
		// this loop searches for each item in the database that matches the array
		for(var i=0, j=db.length; i<j; i++){ //loops through database to search for results
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			// this creates variables for each title and each item for later display
			var dbTitleEnd = db[i].indexOf('|'); //gets the title of a matching result
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //gets the item for matching result
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //loops through each variable in the array for query words
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem); //compares results for query
				if(compare !== -1){ //if results match 
					results.push(db[i]); //push result to the result array
				};
			;
		;
		
		//this function sorts the results found
		results.sort(); //function to sort results
		
		// Check that matches were found, and run output functions
		//conditional statement which shows results as long as there are results
		if(results.length = 0){ //if there are no results
			//this is the function that is referenced below on line 91-97
			noMatch(); //run noMatch
		}else{ //otherwise
			showMatches(results); //run showMatches
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	//this function shows that no results were found
	var noMatch = function(){ //function noMatch prints following results html
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	//this function shows results structure
	var showMatches = function(results){ //function showMatches displays results
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		//a loop that increments each result and displays them as follows
		for(var i=0, j=results.length; i<j; i++){ //loop for each result
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|'); //displays title
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //displays video result url
			
			// make the video link - THE NEXT LINE IS CORRECT. 
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //displays result link
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){ 
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();