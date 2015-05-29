var wordReplace = function(sentence, oldWord, newWord) {
  // from StackOverflow: tinyurl.com/oo5rxom
  // We can't put the variable directly into the replace function
  // so we have to create a RegEx object out of it first:
  var oldWordRegEx = new RegExp(oldWord, 'g');
  return sentence.replace(oldWordRegEx, newWord);
};

$(document).ready(function() {
  $("form#word-replacement").submit(function(event) {
    var sentence = $("input#sentence").val();
    var oldWord = $("input#oldWord").val();
    var newWord = $("input#newWord").val();
    var newSentence = wordReplace(sentence, oldWord, newWord);

    $("span#result").text(newSentence);
    $("span#result").show();
    // alert(wordReplace(sentence, oldWord, newWord));
    event.preventDefault();
  });
});
