$('a.next').click( function(e) {e.preventDefault();
    forward();
  } );

$( 'body' ).on( 'click', 'li', function () {
  selected = this.innerHTML;
  parent = this.parentNode.parentNode;
  if (this.innerHTML == $(parent).find('p.answer').text()) {
    console.log('correct!');
    console.log($(parent).find('p.question-number').text());

  } else {
    console.log('incorrect');
  };
});

function forward() {
  this_p = $('.narrative.select');
  next_p = this_p.next('.narrative');
  this_p.removeClass('select');
  next_p.addClass('select');
  this_p.hide();
  next_p.show();
};

function backward() {
  this_p = $('.narrative.select');
  prev_p = this_p.prev('.narrative');
  this_p.removeClass('select');
  prev_p.addClass('select');
  this_p.hide();
  prev_p.show();
}

$("body").keydown(function(e){
    // left arrow
    if ((e.keyCode || e.which) == 37)
    {
        backward();
    }
    // right arrow
    if ((e.keyCode || e.which) == 39)
    {
        forward();
    }
});

// on load. look for .question class
// replace html with question form.
var questionElements = $("body").find(".question");
var questionObj = []

function questionInit (questionElements, questionObj) {
  this.questionElements = questionElements;
  this.questionObj = questionObj;

  for (x=0; x < this.questionElements.length; x++) {
    var new_question = new testQuestion();
    this.questionObj.push(new_question);
  };
  for (x=0; x < questionObj.length; x++) {

    var element = questionElements.eq(x);
    newQuestion(element, x);

  };
}

function newQuestion(e, objId, newObj=false) {
  e.html(createQuestion(questionObj[objId]));
  e.append("<p class='question-number'>"+objId+"</p>");
}


questionInit(questionElements, questionObj);
