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

  if ( $(this).attr('id') === "beforeLabel" ) {
    $('.before').fadeIn();
    $('.after').hide();

    $(this).find('div').addClass("opacityOn");
    $('#afterLabel').find('div').removeClass('opacityOn');


    $(".toggle_radio").removeClass("toggleOn");
    $(".divider").removeClass("toggleOn");


    ($( window ).width() > 480) ? $(".stats").css("border-left","10px solid #4bb3d6") : '' ;


  } else {
    $('.before').hide();
    $('.after').fadeIn();

    $(".toggle_radio").addClass("toggleOn");
    $(".divider").addClass("toggleOn");

    $(this).find('div').addClass("opacityOn");
    $('#beforeLabel').find('div').removeClass('opacityOn');

    ($( window ).width() > 480) ? $(".stats").css("border-left","10px solid #0e5773") : '' ;


  }
});
