(function($, Materialize){

  var $output = $("#console-stdout");
  var writting = false;

  var textLines = [
    "Web Services",
    "Single Page Applications",
    "Web Mobile",
    "Node.js v4",
    "ES2015",
    "AngularJS",
    "React",
    "MongoDB",
    "Linux",
    "Nginx",
    "Express",
    "PostgreSQL"
  ]

  var getWord = (function(){
    var next = 0;
    return function(){
      if(next > (textLines.length - 1)){
        next = 0;
      }
      var word = textLines[next];
      next++;
      return word;
    };
  })();

  var printWord = function(word){
    writting = true;
    var nlines = word.length;
    var position = 0;
    var timer = setInterval(function(){
      var letter = word[position];
      if(letter){
        $output.append(letter);
        position++;
      }else{
        clearInterval(timer);
        eraseWord();
      }
    }, 200);
  }

  var eraseWord = function(){
    setTimeout(function(){
      $output.html("");
      writting = false;
    }, 1000);
  }

  setInterval(function(){
    if(!writting){
      printWord(getWord());
    }
  }, 500);

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 50
      }, 600, 'swing', function () {
          window.location.hash = target;
      });
  });

  $("#message-form").on("submit", function(){
    if($('#message-form')[0].checkValidity()){
      $.ajax({
        type: "post",
        contentType: "application/x-www-form-urlencoded",
        url: "/message",
        data: $('#message-form').serialize()
      }).then(function(data){

        $("#send-btn")
          .addClass("disabled")
          .attr("disabled", true);

        setTimeout(function(){
          $("#send-btn")
            .removeClass("disabled")
            .removeAttr("disabled");
        }, 60000);

        Materialize.toast("Message sent", 3000, "green");

        $('#message-form')[0].reset();
      });
    }else{
        Materialize.toast("Please fill the form data properly.", 3000, "red");
    }
    return false;
  });

})(jQuery, Materialize);
