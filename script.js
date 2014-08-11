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
	var words = ["apers", "refgh", "apres", "apres", "asper", "gfhsj", "pares", "sgtay", "parse", "pears", "hsdyc", "prase", "hauis", "rapes", "sgayh", "spear", "qiuys"]; 

	var youWord = "spare";

	var wordsList = $('.words-list');

	function init()
	{
		findAnagrams();
	}

	function findAnagrams()
	{
		console.log(words);

		for(i=0; i < words.length; i++) {

			wordsList.append('<li>' + words[i] + '</li>');

		}

	}


	init();
};

// ON DOC READY
$(function()
{	
	new Base.Anagram();
	
});

