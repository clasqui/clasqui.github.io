$(document).ready(function(){
	
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
	
});