$(function () {

    // data
    var data1 = [
        { label: "Healthcare",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('danger')},
        { label: "Cash",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('warning')},
        { label: "Housing",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('midnightblue')},
        { label: "Education",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('info')},
            
    ];

    var data2 = [
        { label: "Healthcare",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('danger')},
        { label: "Cash",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('warning')},
        { label: "Housing",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('midnightblue')},
        { label: "Education",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('info')},
            
    ];

    var data3 = [
        { label: "Healthcare",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('danger')},
        { label: "Cash",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('warning')},
        { label: "Housing",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('midnightblue')},
        { label: "Education",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('info')},
            
    ];

    var data4 = [
        { label: "Healthcare",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('danger')},
        { label: "Cash",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('warning')},
        { label: "Housing",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('midnightblue')},
        { label: "Education",  data: Math.floor(Math.random() * 100) + 1, color: getBrandColor('info')},
            
    ];
	 // $.plot($("#interactive"), datax,
  //           {
  //               series: {
  //                       pie: {
  //                               innerRadius: 0.5,
  //                               show: true
  //                       }
  //               },
  //               legend: {
  //                   show: false
  //               },
  //               grid: {
  //                   hoverable: true
  //               },
  //               tooltip: true,
  //               tooltipOpts: {
  //                   content: "%p.0%, %s"
  //               }

  //           });

    // INTERACTIVE
    $.plot($("#selectedTrans"), data4,
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

        $.plot($("#recentTrans"), data1,
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
            $("#recentTrans").bind("plothover", pieHover);

        $.plot($("#lastMonth"), data2,
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
            $("#lastMonth").bind("plothover", pieHover);
            

        $.plot($("#overall"), data3,
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
            $("#overall").bind("plothover", pieHover);        

      

        $.plot($("#recentTrans2"), data1,
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
            $("#recentTrans2").bind("plothover", pieHover);

        $.plot($("#lastMonth2"), data2,
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
            $("#lastMonth2").bind("plothover", pieHover);
            

        $.plot($("#overall2"), data3,
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
            $("#overall2").bind("plothover", pieHover);        


    function pieHover(event, pos, obj)
    {
            if (!obj)
                    return;
            percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html('<span style="font-weight: bold; color: '+obj.series.color+'">'+obj.series.label+' ('+percent+'%)</span>');
    }


});
