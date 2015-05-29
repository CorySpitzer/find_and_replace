var wordReplace = function(sentence, oldWord, newWord) {
  // from StackOverflow: tinyurl.com/oo5rxom
  var oldWordRegEx = new RegExp(oldWord, 'g');
  return sentence.replace(oldWordRegEx, newWord);
};
