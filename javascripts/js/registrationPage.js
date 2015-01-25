$(document).ready(function() {
	$('.panel-footer .pull-right').click(function (event) {
		$.post( "php/register.php", $( "#registerForm" ).serialize(),function(data){
			alert(data);
		});
		console.log($( "#registerForm" ).serialize());
		window.location = "show.html?username=" + $("#Username").val();
	});

});