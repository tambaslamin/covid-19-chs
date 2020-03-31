(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtflexsliderBreakingSlider = {
    attach: function (context, settings) {
      $(context).find('.view-chs-breaking-slider .flexslider').once('mtflexsliderBreakingSliderInit').each(function() {
        $(this).flexslider({
          animation: drupalSettings.covid19demo.flexsliderBreakingSliderInit.breakingEffect,        // Select your animation type, "fade" or "slide"
          slideshowSpeed: drupalSettings.covid19demo.flexsliderBreakingSliderInit.breakingEffectTime,   // Set the speed of the slideshow cycling, in milliseconds
          prevText: "",
          nextText: "",
          pauseOnAction: true,
          useCSS: false,
          controlNav: false,
          pausePlay: true,
          directionNav: true
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
