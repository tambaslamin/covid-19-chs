(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.mtowlCarouselTestimonials = {
    attach: function (context, settings) {
      $(context).find('.chs-carousel-testimonials').once('mtowlCarouselTestimonialsInit').each(function() {
        $(this).owlCarousel({
          items: 1,
          autoplay: drupalSettings.covid19demo.owlCarouselTestimonialsInit.owlTestimonialsAutoPlay,
          autoplayTimeout: drupalSettings.covid19demo.owlCarouselTestimonialsInit.owlTestimonialsEffectTime,
          nav: true,
          dots: false,
          loop: false,
          navText: false
        });
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
