(function($, Materialize){
  
  var scroller = new letterScroller('console-stdout', [
    "Web Services",
    "Mobile Apps",
    "Single Page Applications",
    "Node.js",
    "Web Mobile",
    "ES2015+",
    "Ionic",
    "AngularJS",
    "React",
    "MongoDB",
    "Linux",
    "Nginx",
    "Express",
    "PostgreSQL"
  ]);
         
  $(".button-collapse").sideNav();
  
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
