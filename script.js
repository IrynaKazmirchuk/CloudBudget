function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

  $(function () {
	$(".button").click(function () {
	  $(".button").toggleClass("active");  
		  $(".play").toggleClass("active");    
	  $(".small-box").toggleClass("active");
	  if($(".small-box").hasClass("active")) {
		$(".small-box").removeClass("pauseToPlay");
	  } else {
		$(".small-box").addClass("pauseToPlay");
	  }
	  // $(input).addClass("active");
	});
  });
  