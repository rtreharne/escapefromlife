function createQuestion(obj) {
  var html = "<p>" + obj.questionText + "</p>"
  html += "<p class='answer'>"+obj.answerText+"</p>"
  html += obj.possibleAnswersHTML();
  return html;
}
