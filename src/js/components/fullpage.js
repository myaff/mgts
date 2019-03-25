/**
 * Переключение классов по различным событиям
 * @module Fullpage
 */

function init () {

  $('.fullpage').fullpage({
    menu: '#fp-menu, #fp-nav'
  });
}

module.exports = {init};