// //prima soluzione
// $('div.hamburger-menu').addClass('active');


//soluzione forse più corretta



  $(".fa-bars").click(function(){
    $("div.hamburger-menu").show();
  });



  $("a.close").click(function(){
    $("div.hamburger-menu").hide();
  });
