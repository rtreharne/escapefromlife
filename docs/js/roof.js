  var MyNamespace = function(){
  function getAllFunctions(){
      var myfunctions = [];
      for (var l in this){
        if (this.hasOwnProperty(l) &&
          this[l] instanceof Function &&
          !/myfunctions/i.test(l)){
          myfunctions.push(this[l]);
        }
      }
      return myfunctions;
    };

    function calculateVolume () {
      this.questionLabel = "Volumes";
      this.timeStart = ""
      this.timeFinish = "";

      this.score_min;
      this.score_max = 60;

      this.createInput = function() {
        valuesList = []
        sig = randomInt(2,4);
        for (i = 0; i < 10; i++) {
          valuesList.push(sigFig(randomInt(1,30)/Math.PI, sig));
        }
        return valuesList;
        print(valuesList)
      }

      this.inputValues = this.createInput();

      this.problemList = [
        {"calc": function(valuesList){
          return sigFig((4/3)*Math.PI*valuesList[0]**3, getSigFig(valuesList[0]));
          },
          "text": "Calculate the area of a sphere with radius $r=" +String(valuesList[0]) +
           "\\ \\mathrm{cm}$ . Express your answer to the appropriate number of "+
           "significant figures. The area of a sphere is determined by " + "$\\frac{4}{3}\\pi r^{3}$"
        },
        {"calc": function(valuesList){
          sig = '';
          return sigFig(Math.PI*valuesList[0]**2*(valuesList[1]/3), getSigFig(valuesList[0]));
          },
          "text": "Calculate the area of a cone with radius $r=" +String(valuesList[0]) +
           "\\ \\mathrm{cm}$ and a height $h = " + String(valuesList[1]) +"\\ \\mathrm{cm}$" +
           ". Express your answer to the appropriate number of "+
           "significant figures. The area of a cone is determined by " + "$\\pi r^{2}\\frac{h}{3}$"
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
        if (answerList[0].length != 2) {
          for (i = 0; i < answerList.length; i++) {
            tempHTML += ("<li class='answer' answer='"+answerList[i]+"'>" + String(answerList[i]) + "$\\ \\mathrm{cm^{3}}$" + "</li>");
          };
          tempHTML += "</ul>";
          return tempHTML;
        };
      }

      this.answerText = this.answer;

    };

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
          tempHTML += ("<li class='answer' answer=" + answerList[i] + ">" + String(answerList[i][0] + ":" + answerList[i][1]) + "</li>");
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
        {"calc": function(valuesList) {
          return (pcFromInt(valuesList[0])/100)*(valuesList[1]/valuesList[2])*Math.floor((valuesList[3]*valuesList[4])*100)/100;
          },

        "text": pcFromInt(valuesList[0])+"$\\%$" + " of $\\frac{" + valuesList[1] +
                "}{" + valuesList[2] + "}$" + " $\\times$" +
                Math.floor((valuesList[3]*valuesList[4])*100)/100,
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

    return { getAllFunctions: getAllFunctions
            ,calculateVolume: calculateVolume
            ,ratioMelanogaster: ratioMelanogaster
            ,bodmas: bodmas
            ,simultaneousEquation: simultaneousEquation };
  }();

//usage
var allfns = MyNamespace.getAllFunctions();
//=> allfns is now an array of functions.
//   You can run allfns[0]() for example
console.log(allfns.slice(1));
