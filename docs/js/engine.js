var score = 0;
var max_score = 0;

$('a.next').click( function(e) {e.preventDefault();
    forward();
  } );

$( 'body' ).on( 'click', 'li.answer', function () {
  selected = this.innerHTML;
  parent = this.parentNode.parentNode;
  console.log($(this).attr("answer"), $(parent).find('p.answer').attr("answer"));
  if ($(this).attr("answer") == $(parent).find('p.answer').attr("answer")) {
    score += 10;
    if (score >= $(parent).attr('score')) {
      forward();
    };
    questionInit(questionElements, questionObj);
  } else {
    score -= 10;
    $("body").find(".score").html("Score: " + score);
    $(this).removeClass('answer').addClass('red').addClass('fade');
  };
});

function forward() {
  this_p = $('.narrative.select');
  next_p = this_p.next('.narrative');
  if (next_p.attr('class').search('question') == 0) {
    $('a.next').addClass('fade');
  } else {
    $('a.next').removeClass('fade');
  };
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


function questionInit () {
  var questionElements = $("body").find(".question");
  $("body").find(".score").html("Score: " + score);
  var questionObj = []
  this.questionElements = questionElements;
  this.questionObj = questionObj;

  for (x=0; x < this.questionElements.length; x++) {
    rand = randomInt(1, allfns.length-1);
    console.log(rand);
    //var new_question = new allfns[rand]();
    var new_question = new factoriseBasic();
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
  MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.html]);
}


questionInit();
