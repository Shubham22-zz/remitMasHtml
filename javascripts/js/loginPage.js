$(document).ready(function() {
	$('.panel-footer .pull-right').click(function (event) {
		$("#dashboard").hide();
		$("#send_page").hide();
		$("#transactions_page").hide();
		$("#data_page").show();
	});

	var name = $(this).data('username');

});