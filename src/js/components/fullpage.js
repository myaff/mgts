/**
 * Переключение классов по различным событиям
 * @module Fullpage
 */
var screens = [];

function getScreensArr() {
  return screens;
}

function init () {

  $('.fullpage').fullpage({
    menu: '#fp-menu, #fp-nav',
    //lockAnchors: true,
    afterRender: function() {
      $(this).find('.section').each(function() {
        screens.push('#' + $(this).data('anchor'));
      })
    }
  });
}

module.exports = {init, getScreensArr};