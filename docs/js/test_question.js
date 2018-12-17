function testQuestion () {

  this.questionLabel = "Adding";
  this.timeStart = "";
  this.timeFinish = "";

  this.score_min = 0;
  this.score_max = 30;

  this.create_input = function() {
    return randomInts(2, 0, 10);
  }

  this.create_answer = function(input) {
    var sum = 0;
    for (var i = 0; i < input.length; i++) {
      sum += input[i];
    };
    return sum
  }

  this.inputValues = this.create_input()
  this.answer = this.create_answer(this.inputValues);

  this.dummyAnswers = function() {
    var answerList = [this.answer];
    while (answerList.length < 4) {
      var dummyAnswer = this.create_answer(this.create_input());
      if (answerList.includes(dummyAnswer) != true) {
        answerList.push(dummyAnswer);
      };
    }
    return shuffle(answerList);
  };

  this.questionText = "What is " + String(this.inputValues[0]) + " + " + String(this.inputValues[1]) + "?"
  this.answerText = String(this.answer);
  this.questionHTML = "<p class='question'>" + this.questionText + "</p>";

  console.log("is this working?")

  this.possibleAnswerstHTML = function() {
    answerList = this.dummyAnswers();
    tempHTML = "<ul>";
    for (i = 0; i < answerList.length; i++) {
      tempHTML += ("<li class='answer'>" + String(answerList[i]) + "</li>");
    };
    tempHTML += "</ul>";
    return tempHTML;
  };

}
