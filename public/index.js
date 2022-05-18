$("nav").css("top", "-70px");
$(document).scroll(function() {navbar()});

  function navbar() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      $("nav").css("top", "0");
      $(".profile-pic").css("opacity", "1");
      $(".intro").css("opacity", "0");
      $(".background").css("opacity", "1");
    }else{
      $("nav").css("top", "-70px");
      $(".profile-pic").css("opacity", "0");
      $(".intro").css("opacity", "1");
      $(".background").css("opacity", "0");
    }
  }

function fadeIn() {

    if (document.body.scrollTop === document.getElementById('#examples').scrollTop){
      $("#examples").css("opacity", "1");
    }else if (document.body.scrollTop === document.getElementById('#tech').scrollTop) {
      $("#tech").css("opacity", "1");
    }else if (document.body.scrollTop === document.getElementById('#credentials').scrollTop) {
      $("#credentials").css("opacity", "1");
    }else if (document.body.scrollTop === document.getElementById('#Cert').scrollTop) {
      $("#Cert").css("opacity", "1");
    }else if (document.body.scrollTop === document.getElementById('#contact').scrollTop) {
      $("#contact").css("opacity", "1");
    }
}

setTimeout(function(){
  $("h1").css("opacity", "1");
}, 1000);

setTimeout(function(){
  $("h2").css("opacity", "1");
}, 1500);

setTimeout(function(){
  // $(".background").css("opacity", "1");
}, 2300);
