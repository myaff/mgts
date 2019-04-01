let DeviceDetection = require("./components/device-detection");
let Helpers = require("./components/helpers");
let Fullpage = require("./components/fullpage");
//let Carousel = require("./components/carousel");
let Share = require("./components/share");
//let Youtube = require("./components/youtube");
//let Statistic = require("./components/statistic");
let Timer = require("./components/timer");
let Scrollbar = require("./components/scrollbar");
let Popups = require("./components/popups");

$(document).ready(function(){

  DeviceDetection.run();
  Helpers.init();
  //Share.init();
  //Carousel.init();
  Timer.init();
  Scrollbar.init();
  
  $.afterlag(function(){
    $('html').addClass('is-loaded');
  });
  
  $('html').addClass('is-animating');
  
  Fullpage.init();
  Popups.init();

  //Youtube.init();
  //Statistic.init();
  
});


/**
 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
 * @example
 * Main.Form.isFormValid();
 */
module.exports = {
  DeviceDetection,
  Helpers,
	//Carousel,
  Share,
  Fullpage,
  Scrollbar,
  //Youtube,
  //Statistic,
  Timer,
  Popups
};