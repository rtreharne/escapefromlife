
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
  this.answerText = String(this.answer)
  this.questionHTML = "<p class='question'>" + this.questionText + "</p>"
  this.possibleAnswertHTML = function() {
    answerList = this.dummyAnswers();
    tempHTML = "<ul>";
    for (i = 0; i < answerList.length; i++) {
      tempHTML += ("<li class='answer'>" + String(answerList[i]) + "</li>");
    };
    tempHTML += "</ul>";
    return tempHTML;
  };

}

function ratioMelanogaster () {

  this.questionLabel = "Ratios";
  this.timeStart = "";
  this.timeFinish = "";

  this.score_min = 0;
  this.score_max = 60;

  this.n = randomInt(50, 200)*2;

  this.createInput = function(n){
    input = {
      malePC: randomInt(40, 56),
      numberOf: n,
      maleWhite: randomInt(2,4),
      femaleWhite:randomInt(3,6),
    };
    return input
  };

  this.createAnswer = function(input) {
    whiteEyes = Math.round(input.numberOf*((1/input.maleWhite)*(input.malePC/100) + (1/input.femaleWhite)*(1-input.malePC/100)));
    redEyes = (input.numberOf - whiteEyes);

    result = gcf(redEyes, whiteEyes);
    return result
  }

  this.inputValues = this.createInput(this.n)
  this.answer = this.createAnswer(this.inputValues);

  this.dummyAnswers = function() {
    var answerList = [this.answer];
    while (answerList.length < 4) {
      var dummyAnswer = this.createAnswer(this.createInput(this.n));
      if (answerList.includes(dummyAnswer) != true) {
        answerList.push(dummyAnswer);
      };
    }
    return shuffle(answerList);
  };

  this.questionText = "In a population of " + this.inputValues.numberOf +
                      " fruit flies " + this.inputValues.malePC + "% are male. " +
                      "1/" + this.inputValues.maleWhite + " of the males and 1/" +
                      this.inputValues.femaleWhite + " of the females have white eyes" +
                      " The rest have red eyes. <br> What is the the ratio of red-eyed" +
                      " flies in the whole population? Give your answer rounded to the" +
                      " nearest ratio of integers (e.g. 12:4 or 9:1)."

  this.answerText = String(this.answer[0] + ":" + this.answer[1]);
  this.questionHTML = "<p class='question'>" + this.questionText + "</p>"
  this.possibleAnswersHTML = function() {
    answerList = this.dummyAnswers();
    tempHTML = "<ul>";
    for (i = 0; i < answerList.length; i++) {
      tempHTML += ("<li class='answer'>" + String(answerList[i][0] + ":" + answerList[i][1]) + "</li>");
    };
    tempHTML += "</ul>";
    return tempHTML;
  };

}

function bodmas() {

  // Need to figure out how to randome select +/- and *, /
  this.questionLabel = "bodmas";
  this.timeStart = "";
  this.timeFinish = "";

  this.score_min = 0;
  this.score_max = 60;

  this.createInput = function() {
    valuesList = []
    for (i = 0; i < 10; i++) {
      valuesList.push(randomInt(1,10));
    }
    return valuesList;
  }

  this.inputValues = this.createInput();

  this.problemList = [
    {"calc": function(valuesList){
      return valuesList[0] - (valuesList[1])*(valuesList[2]) + valuesList[3]
      },
      "text": String(valuesList[0]) + " $-$ " +
               String(valuesList[1]) + " $\\times$ " +
               String(valuesList[2]) + " $+$ " +
               String(valuesList[3]),
    },
    {"calc": function(valuesList){
      return (valuesList[0] + valuesList[1] * (valuesList[2] - valuesList[3]))/valuesList[4] + valuesList[5]
      },
      "text": "(" + String(valuesList[0]) + " $+$ " +
               String(valuesList[1]) + " $\\times$ " +
               "(" + String(valuesList[2]) + " $-$ " +
               String(valuesList[3]) + ")" + ")" + " $\\div$ " +
               String(valuesList[4]) + " $+$ " + String(valuesList[5]),
    },
    {"calc": function(valuesList) {
      return (valuesList[0]*valuesList[1]) + valuesList[2] + (valuesList[3]/valuesList[4]) - valuesList[5];
      },

    "text": String(valuesList[0]) + " $ \\times $ " +
            String(valuesList[1]) + " $+$ " +
            String(valuesList[2]) + " $+$ " +
            String(valuesList[3]) + " $\\div$ " +
            String(valuesList[4]) + " $-$ " +
            String(valuesList[5]),
    },
    {"calc": function(valuesList) {
      return fractionSum([valuesList[0], valuesList[1]], [valuesList[2], valuesList[3]]);;
      },

    "text": "$\\frac{" + valuesList[0] + "}{" + valuesList[1] + "}" + " $+$ " +
            "\\frac{" + valuesList[2] + "}{" + valuesList[3] +"}$",
    },

  ]

  this.problem = randomItem(this.problemList);
  this.answer = this.problem.calc(this.inputValues);

  this.questionText = "Evaluate " + this.problem.text;

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
    if (answerList[0].length != 2) {
      for (i = 0; i < answerList.length; i++) {
        tempHTML += ("<li class='answer' answer='"+answerList[i]+"'>" + String(answerList[i]) + "</li>");
      };
      tempHTML += "</ul>";
      return tempHTML;
    } else {

      for (i = 0; i < answerList.length; i++) {
        [answerList[i][0], answerList[i][1]] = gcf(answerList[i][0], answerList[i][1]);
        tempHTML += ("<li class='answer' answer='"+answerList[i]+"'>" + "$\\frac{" + String(answerList[i][0]) + "}{" + String(answerList[i][1]) + "}$");
      };
      tempHTML += "</ul>";
      return tempHTML;
    };
  };

  this.generateAnswerText = function (){
    if (this.answer.length != 2) {
      return String(this.answer);
    } else {
      [this.answer[0], this.answer[1]] = gcf(this.answer[0], this.answer[1]);
      return "$\\frac{" + this.answer[0] + "}{" + this.answer[1] +"}$";
    }
  };

  this.answerText = this.generateAnswerText();


}
