/**
 * Переключение классов по различным событиям
 * @module Scrollbar
 */

function calcHeight(el) {
  let s = el[0].offsetTop + el[0].offsetParent.offsetTop;
  let f = $('.footer')[0].offsetHeight;
  return $(window).height() - s - f;
}

function init () {

  $(".custom-scroll").mCustomScrollbar({
    theme: 'minimal'
  });
  if (Main.DeviceDetection.isIE11()) {
    //$('.ie-unclear-height').css({'height': '571px'});
    $('.ie-unclear-height').css({'height': calcHeight($('.ie-unclear-height')) + 'px'});
  }
  
}

module.exports = {init};