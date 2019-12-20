var paywall = require("./lib/paywall");
setTimeout(() => paywall(12345678), 5000);

var $ = require("jquery");

require("component-responsive-frame/child");


// if(document.getElementById('before_toggle').checked) {
//   console.log("before");
// }else if(document.getElementById('after_toggle').checked) {
//   console.log("after");
// }

// label:nth-of-type(1)

$( ".toggle_radio label" ).click(function() {

  if ( ($(this).attr('id') === "beforeLabel") || ($(this).attr('id') === "beforeLabel2") ) {
    $('.before').fadeIn();
    $('.after').hide();

    $('.beforeLabel').find('div').addClass("opacityOn");
    $('.afterLabel').find('div').removeClass('opacityOn');
    // $('#afterLabel2').find('div').removeClass('opacityOn');


    $(".toggle_radio").removeClass("toggleOn");
    $(".divider").removeClass("toggleOn");


    ($( window ).width() > 480) ? $(".stats").css("border-left","10px solid #4bb3d6") : '' ;
    ($(this).attr('id') === "beforeLabel") ? $("#before_toggle2").prop("checked", true) : $("#before_toggle").prop("checked", true) ;

  } else {
    console.log($(this));
    $('.before').hide();
    $('.after').fadeIn();

    $(".toggle_radio").addClass("toggleOn");
    $(".divider").addClass("toggleOn");

    $('.afterLabel').find('div').addClass("opacityOn");
    $('.beforeLabel').find('div').removeClass('opacityOn');
    // $('#beforeLabel2').find('div').removeClass('opacityOn');

    ($( window ).width() > 480) ? $(".stats").css("border-left","10px solid #0e5773") : '' ;
    ($(this).attr('id') === "afterLabel") ? $("#after_toggle2").prop("checked", true) : $("#after_toggle").prop("checked", true) ;


  }
});
