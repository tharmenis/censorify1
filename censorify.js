var censoredWords = ['sad','bad','mad'];
var customCensoredWords = [];

function censor(inStr){
	for(id in censoredWords){
		inStr = inStr.replace(censoredWords[id],"*******");
	}

	for(idx in customCensoredWords){
		inStr = inStr.replace(customCensoredWords[id]."*******");
	}
	return inStr;
}

function addCensoredWord(word){
	customCensoredWords.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}


exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;