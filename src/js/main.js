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
  console.log( $(this).attr('id') );
  if ( $(this).attr('id') === "beforeLabel" ) {
    $('.beforeSummary').fadeIn();
    $('.afterSummary').hide();
    $(".toggle_radio").toggleClass("toggleOn");
    $(this).find('div').addClass("opacityOn");
    $('#afterLabel').find('div').removeClass('opacityOn');
  } else {
    $('.afterSummary').fadeIn();
    $('.beforeSummary').hide();

    $(".toggle_radio").toggleClass("toggleOn");

    $(this).find('div').addClass("opacityOn");
    $('#beforeLabel').find('div').removeClass('opacityOn');
  }
});
