$("#container ul").on("click", "li", function(event){
	$(this).toggleClass("strike-through");
});


$("#container ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(1000,function(){		
			$(this).remove();
	});
	event.stopPropagation();
});

$("#container input[type='text']").keypress( function(event){
	console.log("Sarvani");
	if(event.which === 13){
		$("#container ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ $(this).val() + " </li>");
		$(this).val("");
	}
});

/*$("span").on("mouseOver", ".fa-trash-alt", function(event){
	$(this).show();
	$(this).css("width", "40px");
});
*/