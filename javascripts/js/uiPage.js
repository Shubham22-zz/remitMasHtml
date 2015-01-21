$(document).ready(function() {
	// console.log("kuch toh hai");
	$("#send_page").hide();
	$("#transactions_page").hide();
	$("#data_page").hide();
	// $("#dashboard").hide();
	$("#account_mode").hide();
	
	$('#checkoutwizard').stepy();
	$('.stepy-navigator').wrapInner('<div class="pull-right"></div>');

	$('.card').card({ container: $('.card-wrapper')});

	$('#dashboardButton').click(function (event) {
		$("#dashboard").show();
		$("#transactions_page").hide();
		$("#data_page").hide();
		$("#send_page").hide();
	});

	$('#sendPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#transactions_page").hide();
		$("#data_page").hide();
		$("#send_page").show();
	});

	$('#transactionsPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#send_page").hide();
		$("#data_page").hide();
		$("#transactions_page").show();
	});

	$('#dataPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#send_page").hide();
		$("#transactions_page").hide();
		$("#data_page").show();
	});

	$('#cardType').on('change',function(){
		if($('#cardType').val() == "Account"){
			$("#debit_mode").hide();
			$("#account_mode").show();
		} else {
			$("#account_mode").hide();
			$("#debit_mode").show();
		}
	});

});
