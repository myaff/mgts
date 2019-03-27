/**
 * Переключение классов по различным событиям
 * @module Fullpage
 */

function init () {

  $('.fullpage').fullpage({
    menu: '#fp-menu, #fp-nav, #main-menu',
    responsiveWidth: 1024,
    responsiveHeight: 768,
    lockAnchors: true
  });

  $('.fp-link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('menuanchor') ? $(this).data('menuanchor') : $(this).attr('href').slice(1);
    $.fn.fullpage.moveTo(target);
  });
  $('.main-menu-fp-link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('menuanchor');
    setTimeout(function() {
      $.fn.fullpage.moveTo(target);
    }, 500, target);
  })
  let hash = (window.location.hash && (window.location.hash.length > 1)) ? window.location.hash : null;
  if (hash && $(hash + '-id').hasClass('section')) {
    $.fn.fullpage.moveTo($(hash + '-id').data('anchor'));
    Main.Helpers.removeHash();
  }
}

module.exports = {init};