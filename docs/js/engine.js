$('a.next').click( function(e) {e.preventDefault();
    forward();
  } );

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
