/**
 * Переключение классов по различным событиям
 * @module Popups
 */
var screens;

function getScreen (str) {
  let screen;
  if (!~str.indexOf('/')) {
    screen = $(str + '-id');
  } else if (!!~str.indexOf('/') && !str.slice(str.indexOf('/') + 1).length) {
    screen = $(str.slice(0, hash.indexOf('/')));
  } else {
    screen = $(str.slice(0, str.indexOf('/')) + '-id');
  }
  if (!!~screens.indexOf(screen.data('anchor'))) {
    screen = $('#' + $('.fp-section.active').data('anchor') + '-id');
  }
  return screen;
}

function getPopup (str) {
  let popup;
  if (!!~str.indexOf('/')) {
    popup = $('#' + str.slice(str.indexOf('/') + 1));
  } else {
    popup = $('#' + str);
  }
  return popup;
}


function openPopup (href) {
  let popup = getPopup(href);
  if (popup.hasClass('content-popup')) {
    popup.addClass('active');
    $('.content-popup-conflict').removeClass('active');
  } else if (popup.hasClass('fullsize-popup')) {
    popup.fadeIn(500);
  } else {
    Main.Helpers.openModal(popup);
  }
}
function closeAllPopups () {
  $('.content-popup').removeClass('active');
  $('.content-popup-conflict').addClass('active');
}

function init () {

  screens = Main.Fullpage.getScreensArr();
  let hash = window.location.hash;
  let screen, popup;
  if (hash) {
    // если нет /
    if (!~hash.indexOf('/')) {
      screen = $(hash + '-id');
    // или если есть / , но после нее ничего нет
    } else if (!!~hash.indexOf('/') && !hash.slice(hash.indexOf('/') + 1).length) {
      screen = $(hash.slice(0, hash.indexOf('/')));
    } else {
      screen = $(hash.slice(0, hash.indexOf('/')) + '-id');
      popup = $('#' + hash.slice(hash.indexOf('/') + 1));
    }

    if (popup) {
      openPopup(hash);
    }
    $('.js-popup').on('click', function() {
      let target = $(this).attr('href');
      let screen = getScreen(target);
      if(!screen.hasClass('active')) {
        $.fn.fullpage.moveTo(screen.data('anchor'));
      }
      openPopup(target);
    });
    
  }
}

module.exports = {
  init,
  openPopup,
  closeAllPopups
};