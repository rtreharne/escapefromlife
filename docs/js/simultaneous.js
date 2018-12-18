function simultaneousEquation () {
  this.questionLabel = "Simultaneous Equation";
  this.timeStart = ""
  this.timeFinish = "";

  this.score_min;
  this.score_max = 60;

  this.createInput = function() {
    valuesList = []
    sig = randomInt(2,4);
    for (i = 0; i < 20; i++) {
      valuesList.push(randomIntNonZero(-10, 10));
    }
    return valuesList;
    print(valuesList)
  }

  this.inputValues = this.createInput();

  this.problemList = [
    {"calc": function(valuesList){
      return [valuesList[0], valuesList[1]];
      },
      "text": "Solve the simultaneous equations:" + "$$"+String(ignoreOne(valuesList[2]))+ "x" + posOrNegStr(valuesList[3])+"y = "+
              String(valuesList[2]*valuesList[0] + valuesList[3]*valuesList[1]) + "$$" +
              "$$"+String(ignoreOne(valuesList[4]))+ "x" + posOrNegStr(valuesList[5])+"y = "+
              String(valuesList[4]*valuesList[0] + valuesList[5]*valuesList[1]) + "$$"
    },
  ]

  this.problem = randomItem(this.problemList);

  this.answer = this.problem.calc(this.inputValues);

  this.questionText = this.problem.text;

  this.dummyAnswers = function() {
    var answerList = [this.answer];
    while (answerList.length < 4) {
      var dummyAnswer = this.problem.calc(shuffle(this.inputValues));
      if (answerList.includes(dummyAnswer) != true) {
        answerList.push(dummyAnswer);
      };
    }
    return shuffle(answerList);
  }

  this.possibleAnswersHTML = function() {
    answerList = this.dummyAnswers();
    tempHTML = "<ul>";
    for (i = 0; i < answerList.length; i++) {
      tempHTML += ("<li class='answer' answer='"+answerList[i]+"'>" + "$x = " + answerList[i][0] + "$, $y = " + answerList[i][1] + "$" + "</li>");
    };
    tempHTML += "</ul>";
    return tempHTML;

  }

  this.answerText = this.answer;

};
