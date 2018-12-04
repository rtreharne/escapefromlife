function createQuestion(obj) {
  var html = "<p>" + obj.questionText + "</p>"
  html += "<p class='answer'>"+obj.answer+"</p>"
  html += obj.possibleAnswertHTML();
  return html;
}
