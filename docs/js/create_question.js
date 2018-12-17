function createQuestion(obj) {

  var html = "<p>" + obj.questionText + "</p>"
  html += "<p class='answer' answer='"+obj.answer+"'>"+obj.answerText+"</p>"
  html += obj.possibleAnswersHTML();
  return html;
}
