$("nav").css("top", "-70px");
$(document).scroll(function() {navbar()});

  function navbar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      $("nav").css("top", "0");
    }else{
      $("nav").css("top", "-70px");
    }
  }

setTimeout(function(){
  $("h1").css("opacity", "1");
}, 1000);

setTimeout(function(){
  $("h2").css("opacity", "1");
}, 1500);

setTimeout(function(){
  $(".background").css("opacity", "1");
}, 2300);
