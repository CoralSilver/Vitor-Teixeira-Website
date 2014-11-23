$( document ).ready(function() {

		$("#image1").on("click", function () {
    alert( $( this ).text() );
    }
});

		$("#before2 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/rings_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/rings_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before3 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/pistol_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/pistol_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before4 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/whiskey_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/whiskey_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before5 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/sushi_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/sushi_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before6 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/sculpture_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/sculpture_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before7 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/landscape_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/landscape_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});

		$("#before8 img").on("click", function(){
		    if ($(this).src.match("_before")) {
		        $(this).src = "imgs/retouched/fish_after.jpg";
		        $(this).parent().find("p").html("After");
		    } else {
		        $(this).src = "imgs/retouched/fish_before.jpg";
		        $(this).parent().find("p").html("Before");
		    }
		});
});