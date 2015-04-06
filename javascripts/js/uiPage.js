$(document).ready(function() {
	// console.log("kuch toh hai");
	$("#congrats_page").hide();
	$("#send_page").hide();
	$("#transactions_page").hide();
	$("#data_page").hide();
	$("#savings_page").hide();
	$("#account_mode").hide();
	$("#account_details_page").hide();
	$("#payment_details_page").hide();

	$('#checkoutwizard').stepy();
	$('.stepy-navigator').wrapInner('<div class="pull-right"></div>');

	$('#card1').card({ container: $('#card-wrapper1')});
	$('#card2').card({ container: $('#card-wrapper2')});


	$.post( "php/debitCardData.php",{ id: UserId, fullname: FullName } ,function(data){
				// alert(data);
		var passedData = jQuery.parseJSON(data);
		console.log(passedData);
		cardDetails = $("#cardDetailsTable tbody");
		cardDetails.html("");
		for (var i = passedData.length - 1; i >= 0; i--) {
			d = passedData[i];
			expiry = d.expiry.split('-');
			cardDetails.append("<tr onclick ='cardDetailClicked(this)'> <td>" + d.card_holder + "</td> <td>"+d.card_no +"</td> <td>" + expiry[1] + "/" +expiry[0].substr(2) + "</td> <td>"+d.cvv + "</td> </tr>");
		};
	});


	$('#dashboardButton').click(function (event) {
		$("#transactions_page").hide();
		$("#congrats_page").hide();
		$("#data_page").hide();
		$("#savings_page").hide();
		$("#send_page").hide();
		$("#account_details_page").hide();
		$("#payment_details_page").hide();
		$("#dashboard").show();
	});

	$('#sendPageButton').click(function (event) {
		sendMoney();
	});

	$('#walletsPageButton').click(function (event) {
		seeWallets();
	});

	$('#transactionsPageButton').click(function (event) {
		goToTransactions();
	});

	$('#dataPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#congrats_page").hide();
		$("#send_page").hide();
		$("#wallets_page").hide();
		$("#transactions_page").hide();
		$("#savings_page").hide();
		$("#account_details_page").hide();
		$("#payment_details_page").hide();
		$("#data_page").show();
	});

	$('#paymentDetailsPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#congrats_page").hide();
		$("#send_page").hide();
		$("#wallets_page").hide();
		$("#transactions_page").hide();
		$("#savings_page").hide();
		$("#account_details_page").hide();
		$("#data_page").hide();
		$("#payment_details_page").show();
		$.post( "php/debitCardData.php",{ id: UserId, fullname: FullName } ,function(data){
			var passedData = jQuery.parseJSON(data);
			// console.log(passedData);
			cardDetails = $("#cardDetailsSection tbody");
			cardDetails.html("");
			for (var i = passedData.length - 1; i >= 0; i--) {
				d = passedData[i];
				expiry = d.expiry.split('-');
				cardDetails.append("<tr> <td>" + d.card_holder + "</td> <td>"+d.card_no +"</td> <td>" + expiry[1] + "/" +expiry[0].substr(2) + "</td> <td>"+d.cvv + "</td> </tr>");
			};
		});

		$.post( "php/accountData.php",{ id: UserId, fullname: FullName } ,function(data){
			var passedData = jQuery.parseJSON(data);
			console.log(passedData);
			cardDetails = $("#accountDetailsSection tbody");
			cardDetails.html("");
			for (var i = passedData.length - 1; i >= 0; i--) {
				d = passedData[i];
				cardDetails.append("<tr onclick ='accountDetailClicked(this)'> <td>" + d.account_holder + "</td> <td>"+d.bank_name +"</td> <td>" + d.accoutn_no + "</td> <td>"+d.routing_no + "</td> </tr>");
			};
		});
	});

	$('#accountDetailsPageButton').click(function (event) {
		$("#dashboard").hide();
		$("#congrats_page").hide();
		$("#wallets_page").hide();
		$("#send_page").hide();
		$("#transactions_page").hide();
		$("#savings_page").hide();
		$("#payment_details_page").hide();
		$("#data_page").hide();
		$("#account_details_page").show();
	});

	$('#savingsPageButton').click(function (event) {
		seeTutorials();
	});


	$('#sendMoneyTile').click(function (event) {
		sendMoney();
	});

	$('#transactionTile').click(function (event) {
		goToTransactions();
	});

	$('#tutorialTile').click(function (event) {
		seeTutorials();
	});

	$('#moreRecepient').click(function (event) {
		goToTransactions();
	});

	$('#checkoutwizard .finish').click(function (event) {
		// $(this).prop("disabled", true); 
		$("#dashboard").hide();
		$("#send_page").hide();
		$("#wallets_page").hide();
		$("#transactions_page").hide();
		$("#savings_page").hide();
		$("#data_page").hide();
		$("#account_details_page").hide();
		$("#payment_details_page").hide();
		$("#congrats_page").show();
		// $(this).prop("disabled", false); 

	});

	$('#cardType').on('change',function(){
		if($('#cardType').val() == "Account"){
            $('dd[name=paymentMethod]').html( "<h3><strong>" + "Account" + "</strong></h3>");
			$("#debit_mode").hide();
			$("#account_mode").show();
			$.post( "php/accountData.php",{ id: UserId, fullname: FullName } ,function(data){
				var passedData = jQuery.parseJSON(data);
				console.log(passedData);
				cardDetails = $("#accountDetailsTable tbody");
				cardDetails.html("");
				for (var i = passedData.length - 1; i >= 0; i--) {
					d = passedData[i];
					cardDetails.append("<tr onclick ='accountDetailClicked(this)'> <td>" + d.account_holder + "</td> <td>"+d.bank_name +"</td> <td>" + d.accoutn_no + "</td> <td>"+d.routing_no + "</td> </tr>");
				};
			});
		} else {
            $('dd[name=paymentMethod]').html( "<h3><strong>" + "Debit Card" + "</strong></h3>");
			$("#account_mode").hide();
			$("#debit_mode").show();
			$.post( "php/debitCardData.php",{ id: UserId, fullname: FullName } ,function(data){
				var passedData = jQuery.parseJSON(data);
				// console.log(passedData);
				cardDetails = $("#cardDetailsTable tbody");
				cardDetails.html("");
				for (var i = passedData.length - 1; i >= 0; i--) {
					d = passedData[i];
					expiry = d.expiry.split('-');
					cardDetails.append("<tr onclick ='cardDetailClicked(this)'> <td>" + d.card_holder + "</td> <td>"+d.card_no +"</td> <td>" + expiry[1] + "/" +expiry[0].substr(2) + "</td> <td>"+d.cvv + "</td> </tr>");
				};
			});
		}
	});

	var conversionRate;
	$('#sendCountryName').on('change',function(){
		Currency = $("#sendCountryName option:selected").data("cur");
		url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%3D%22USD"+ Currency + "%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
		$.get( url, function( data ) {
		  conversionRate = data.query.results.rate.Rate;
		  $("#convRate").text("1 USD =" +  conversionRate + " " + Currency);
		  currencyField = $("#currency");
		  currencyField.text(Currency);
		  currencyField.next().attr("placeholder",100*conversionRate);
		});
	});

	$('#sendAmt').on('keyup',function(){
		  currencyField.next().val($('#sendAmt').val()*conversionRate);
	
	});
	

	$('.irs').on('mouseup',function(){
		// console.log('machaya');
		amount_divison[0] = $('#money-edu').attr('value');
		amount_divison[1] = $('#money-health').attr('value');
		amount_divison[2] = $('#money-housing').attr('value');
		amount_divison[3] = $('#money-cash').attr('value');
 		draw_recent_trans_graph();
			
	});

	$('#senderCInput2').on('keyup',function(){
		$('#senderC2').text($('#senderCInput2').val());
	});
	
	$('#bankCInput2').on('keyup',function(){
		$('#bankC2').text($('#bankCInput2').val());
	});

	$('#accNoCInput2').on('keyup',function(){
		$('#accNoC2').text($('#accNoCInput2').val());
	});

	$('#routingNoCInput2').on('keyup',function(){
		$('#routingNoC2').text($('#routingNoCInput2').val());
	});
 	
	draw_recent_trans_graph();

});

function sendMoney () {
	$("#dashboard").hide();
	$("#congrats_page").hide();
	$("#wallets_page").hide();
	$("#transactions_page").hide();
	$("#data_page").hide();
	$("#savings_page").hide();
	$("#account_details_page").hide();
	$("#payment_details_page").hide();
	$("#send_page").show();
}

function goToTransactions (argument) {
	$("#dashboard").hide();
	$("#congrats_page").hide();
	$("#send_page").hide();
	$("#wallets_page").hide();
	$("#data_page").hide();
	$("#savings_page").hide();
	$("#account_details_page").hide();
	$("#payment_details_page").hide();
	$("#transactions_page").show();
}

function seeTutorials (argument) {
	$("#dashboard").hide();
	$("#congrats_page").hide();
	$("#wallets_page").hide();
	$("#send_page").hide();
	$("#transactions_page").hide();
	$("#data_page").hide();
	$("#account_details_page").hide();
	$("#payment_details_page").hide();
	$("#savings_page").show();
}

function seeWallets (argument) {
	$("#dashboard").hide();
	$("#congrats_page").hide();
	$("#wallets_page").show();
	$("#send_page").hide();
	$("#transactions_page").hide();
	$("#data_page").hide();
	$("#account_details_page").hide();
	$("#payment_details_page").hide();
	$("#savings_page").hide();
}


function cardDetailClicked(e){
	child = $(e).children();
	$('input[name=cvc]').trigger('blur');
	$('.display').addClass('focused');
	$('input[name=cvc]').val($(child[3]).text());
	$('input[name=cvc]').trigger('keyup');
	setTimeout(function() { cardDetailClicked_cont(); }, 1500);

};

function cardDetailClicked_cont () {
	$('input[name=cvc]').trigger('blur');
	$('input[name=number]').val($(child[1]).text());
	$('input[name=number]').trigger('keyup');

	$('input[name=name]').val($(child[0]).text());
	$('input[name=name]').trigger('keyup');

	$('input[name=expiry]').val($(child[2]).text());
	$('input[name=expiry]').trigger('keyup');
}


function accountDetailClicked (e) {
	// console.log(e);
	child = $(e).children();
	$('#senderC1').text($(child[0]).text());
	$('#amtC1').text($($('dd[name=amt]')[2]).text());
	$('#bankC1').text($(child[1]).text());
	$('#routingNoC1').text($(child[3]).text());
	$('#accNoC1').text($(child[2]).text());
}

var amount_divison = new Array();
amount_divison.push(1);
amount_divison.push(1);
amount_divison.push(1);
amount_divison.push(1);

function draw_recent_trans_graph(){
	var reccent_data = [
        { label: "Education",  data: amount_divison[0], color: getBrandColor('info')},
        { label: "Healthcare",  data: amount_divison[1], color: getBrandColor('danger')},
        { label: "Housing",  data: amount_divison[2], color: getBrandColor('midnightblue')},
        { label: "Cash",  data: amount_divison[3], color: getBrandColor('warning')},
            
    ];
	$.plot($("#selectedTrans"), reccent_data,
            {
                series: {
                        pie: {
                                show: true
                        }
                },
                grid: {
                        hoverable: true,
                        clickable: true
                },
                legend: {
                    show: false
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%p.0%, %s"
                }

            });
            $("#selectedTrans").bind("plothover", pieHover);
}
