$(document).ready(function() {
	$('.panel-footer .pull-right').click(function (event) {
		// $.post('authentication.php', {'Email': $("#Email").val(), 'Password':$("#Password").val()});
		$.post( "php/authentication.php", $( "#validate-form" ).serialize(),function(data){
			var passedData = jQuery.parseJSON(data);
			// console.log(passedData.status);
			if(passedData.status==-1){
				alert(passedData.message);
			}else{
				window.location = "show.html?username=" + passedData.username;
			}

		});

	});

	// var name = $(this).data('username');

});