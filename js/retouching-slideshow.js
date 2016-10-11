$( document ).ready(function() {

	$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages(["/retouched/fish_after.jpg", 
				"/retouched/fish_after@2x.jpg",
				"/retouched/landscape_after.jpg", 
				"/retouched/landscape_after@2x.jpg",
				"/retouched/pistol_after.jpg", 
				"/retouched/pistol_after@2x.jpg",
				"/retouched/rings_after.jpg", 
				"/retouched/rings_after@2x.jpg",
				"/retouched/sculpture_after.jpg",
				"/retouched/sculpture_after@2x.jpg",
				"/retouched/sushi_after.jpg",
				"/retouched/sushi_after@2x.jpg",
				"/retouched/tatoo_after.jpg",
				"/retouched/tatoo_after@2x.jpg",
				"/retouched/whiskey_after.jpg",
				"/retouched/whiskey_after@2x.jpg"
				]);

	$(function(){
	  $(".img-swap").on('click', function() {
	    if ($(this).attr("class") == "img-swap") {
	      this.src = this.src.replace("_before","_after");
	      $(this).attr('alt','retouched photo');
	      $(this).parent().find("span").html("After");
	    } else {
	      this.src = this.src.replace("_after","_before")
	      $(this).attr('alt', 'unretouched photo');
	      $(this).parent().find("span").html("Before");
	    }
	      $(this).toggleClass("on");
	  });
	});

});