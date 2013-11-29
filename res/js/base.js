$(document).ready(function(){

	putColor($("span.special"));

	setTimeout(function(){
		$("#subheading").fadeIn("slow")
	}, 1500)

	setTimeout(function(){
			$("#contact").fadeIn();
			$(".mail").fadeIn("slow", function(){
				setTimeout(function(){
					$(".github").fadeIn("slow", function(){
						setTimeout(function(){
							$(".name").fadeIn("slow", function(){
									setTimeout(function(){
										$(".username").fadeIn("slow");
								}, 500)
							});
						}, 500)
					});
				}, 500);
			});
		}, 2500);

	$(".htext").hover(function(e){
		$(this).fadeOut(500, function() {
        	$(this).text('Hello').fadeIn(500);
    	});
	}, function(e){
		$(this).fadeOut(500, function() {
        	$(this).text('Hola').fadeIn(500);
    	});
	})
});



function putColor(e) {
	var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Black","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","ForestGreen","Fuchsia","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Khaki","Lavender","LavenderBlush","LawnGreen","LightBlue","LightCoral","LightGoldenRodYellow","LightGray","LightGreen","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","Lime","LimeGreen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","Moccasin","NavajoWhite","Navy","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGreen","PaleTurquoise","PaleVioletRed","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","Sienna","SkyBlue","SlateBlue","SlateGray","SlateGrey","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Yellow","YellowGreen"];

	e.each(function(){
		color = CSS_COLOR_NAMES[Math.floor(Math.random()*CSS_COLOR_NAMES.length)];
		$(this).css("color", color)
	})
}