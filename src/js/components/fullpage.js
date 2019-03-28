/**
 * Переключение классов по различным событиям
 * @module Fullpage
 */

function init () {
  let hash = (window.location.hash && (window.location.hash.length > 1)) ? window.location.hash : null;

  $('.fullpage').fullpage({
    menu: '#fp-menu, #fp-nav, #main-menu',
    responsiveWidth: 1024,
    lockAnchors: true,
    normalScrollElements: '.modal',
    afterRender: function () {
      if (hash) {
        if ($(hash + '-id').hasClass('section')) {
          $.fn.fullpage.moveTo($(hash + '-id').data('anchor'));
        } else if ($(hash).hasClass('popup')) {
          $.afterlag(function(){
            Main.Popups.openPopup(hash);
          });
        }
        Main.Helpers.removeHash();
      }
    }
  });

  $('.fp-link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('menuanchor') ? $(this).data('menuanchor') : $(this).attr('href').slice(1);
    if ($(this).closest('.popup')) {
      let popup = '#' + $(this).closest('.popup').attr('id');
      Main.Popups.closePopup(popup);
    }
    $.fn.fullpage.moveTo(target);
  });
  $('.main-menu-fp-link').on('click', function(e) {
    e.preventDefault();
    let target = $(this).data('menuanchor');
    setTimeout(function() {
      $.fn.fullpage.moveTo(target);
    }, 500, target);
  })
}

module.exports = {init};