/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// JS EXAMPLE

var Base = Base || {};

Base.Anagram = function()
{	
	var words = ["apers", "refgh", "apres", "asper", "gfhsj", "pares", "sgtay", "parse", "pears", "hsdyc", "prase", "hauis", "rapes", "sgayh", "spear", "qiuys"]; 

	var yourWord = "spare";

	var wordsList = $('.words-list');
	var foundWordsList = $('.found-words-list');

	function init()
	{
		findAnagrams();
	}

	function findAnagrams()
	{
		console.log(words);

		// Sort your word into alphabetical order, removing spaces
		yourWord = yourWord.split('').sort().join(''); 

		console.log('your word is ' + yourWord);

		// Sort the array of words into alphabetical order
		var alphabeticalOrderWords = words.map(function(word){

			// Sort your word into alphabetical order, removing spaces
			// Because this is using MAP it adds it to an array
		  	return word.split('').sort().join('');

		});

		console.log(alphabeticalOrderWords);

		console.log(alphabeticalOrderWords[1]);

		for(i=0; i < alphabeticalOrderWords.length; i++) {

			var loopWord = alphabeticalOrderWords[i];

		    wordsList.append('<li>' + alphabeticalOrderWords[i] + '</li>');

		    if (yourWord == loopWord) {

		    	foundWordsList.append('<li>' + words[i] + '</li>');

		    }

		};


	}


	init();
};

// ON DOC READY
$(function()
{	
	new Base.Anagram();
	
});

