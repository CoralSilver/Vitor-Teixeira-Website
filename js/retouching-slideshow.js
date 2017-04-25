$( document ).ready(function() {

	$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages([
				"/retouched/pistol_before.jpg",
				"/retouched/rings_before.jpg",
				"/retouched/sculpture_before.jpg",
				"/retouched/sushi_before.jpg",
				"/retouched/tatoo_before.jpg",
				"/retouched/whiskey_before.jpg",
				"/retouched/watch-_.jpg",
				"/retouched/nia_before.jpg",
				"/retouched/Nike_before.jpg"
				]);

	$(function(){
	  $(".img-swap").on('mouseenter mouseleave click', function() {
	    if ($(this).attr("class") == "img-swap") {
	      this.src = this.src.replace("_after","_before");
	      $(this).attr('alt','unretouched photo');
	      $(this).parent().find("span").html("Before");
	    } else {
	      this.src = this.src.replace("_before","_after")
	      $(this).attr('alt', 'retouched photo');
	      $(this).parent().find("span").html("After");
	    }
	      $(this).toggleClass("on");
	  });
	});

});
