function randomInt(min, max) {
  // retunr n random integers
  // in the range [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomInts(n, min, max) {
  var nList = [];
  for (i = 0; i < n; i++) {
    nList.push(randomInt(min, max));
  }
  return nList;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function testQuestion () {

  this.score_min = 0;
  this.score_max = 0;

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
      console.log(answerList.length)
      var dummyAnswer = this.create_answer(this.create_input());
      if (answerList.includes(dummyAnswer) != true) {
        answerList.push(dummyAnswer);
      };
    }
    return shuffle(answerList);
  };

  this.questionText = "What is " + String(this.inputValues[0]) + " + " + String(this.inputValues[1]) + "?"
  this.answerText = String(this.answer)

}
