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
	// $('.irs-slider').on('mouseup',function(){
	// 	// console.log('machaya');
	// 	amount_divison[0] = $('#money-edu').attr('value');
	// 	amount_divison[1] = $('#money-health').attr('value');
	// 	amount_divison[2] = $('#money-housing').attr('value');
	// 	amount_divison[3] = $('#money-cash').attr('value');
 // 		draw_recent_trans_graph();
			
	// });

	$('.irs').on('mouseup',function(){
		// console.log('machaya');
		amount_divison[0] = $('#money-edu').attr('value');
		amount_divison[1] = $('#money-health').attr('value');
		amount_divison[2] = $('#money-housing').attr('value');
		amount_divison[3] = $('#money-cash').attr('value');
 		draw_recent_trans_graph();
			
	});
 	
	draw_recent_trans_graph();


});
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
