var wordReplace = function(sentence, oldWord, newWord) {
  // from StackOverflow: tinyurl.com/nqoh5s3
  // var pattern = oldWord, re = new RegExp(pattern, "g");

  // var wordToReplaceRegEx = new RegExp(wordToReplace, "g");

  return sentence.replace(oldWord, newWord)
};
