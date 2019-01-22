//Assumptions: 
// 1)return any match found
// 2)return all occurrences of a match
// 3)return empty array if no matches
// 4)delimiter of words in pattern is only "|"

//Time complexity: O(m*n), where m is number of words between pipes in the pattern and n is the text length

//Test cases:
//miniRegex("cat|dog", "both cat and dog are here")
//miniRegex("cat|xxx", "both cat and dog are here")
//miniRegex("dog", "both cat and dog are here")
//miniRegex("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "both cat and dog are here")
//miniRegex("", "both cat and dog are here")
//miniRegex("dog|cat", "")
//miniRegex("dog", "my dog is the most beautiful dog")
//miniRegex("dog|dog", "my dog is the most beautiful dog")

function miniRegex(pattern, text){
    var patternWords = new Set();
    var output = [];

    if(!pattern || !text){
        return output;
    }

    //ignore duplicates in the pattern
    var wordsArray = pattern.split('|');
    wordsArray.forEach(element => {
        patternWords.add(element);
    });

    patternWords.forEach(word => {
        var patternWordIndex = 0;
        
        for (var j = 0; j < text.length; j++){
            if(text[j] != word[patternWordIndex]){
                continue;
            }

            patternWordIndex++;
            if(patternWordIndex == word.length){
                //Found a match!
                output.push(word);
                patternWordIndex = 0;
            }
        }
    })

    return output;
}

var ret = miniRegex("cat|dog", "both cat and dog are here");

//Test cases:
//miniRegex("cat|dog", "both cat and dog are here")
//miniRegex("cat|xxx", "both cat and dog are here")
//miniRegex("dog", "both cat and dog are here")
//miniRegex("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "both cat and dog are here")
//miniRegex("", "both cat and dog are here")
//miniRegex("dog|cat", "")
//miniRegex("dog", "my dog is the most beautiful dog")
//miniRegex("dog|dog", "my dog is the most beautiful dog")
for(var i = 0; i< ret.length; i++){
    console.log(ret[i]);
}
