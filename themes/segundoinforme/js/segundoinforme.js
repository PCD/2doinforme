(function ($) {
  /**
   * Disables Colorbox for Mobile.
   */
  Drupal.behaviors.disableColorbox = {
    attach: function (context, settings) {
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $.colorbox.remove();
      }
    }
  };

  /**
   * Set height for Slider at HomePage
   */
  Drupal.behaviors.segundoinformeSlider = {
    attach: function (context, settings) {
      prepareSlider();
      $(window).load(adjustSliderDimensions);
      $(window).resize(adjustSliderDimensions);
    }
  };
  
  function prepareSlider() {
    $('#widget_pager_bottom_segundo_informe-page .views-slideshow-pager-field-item:last').addClass('last');
    $('#widget_pager_bottom_segundo_informe-page .views-slideshow-pager-field-item:nth-child(3n)').addClass('third');
  }
  
  function adjustSliderDimensions() {
    // Adjust main slider.
    width = $('#views_slideshow_cycle_main_segundo_informe-page').width();
    height = Math.floor((width/1440*810));
    selector = "#views_slideshow_cycle_main_segundo_informe-page";
    $(selector).height(height);
    
    // Adjust pagination
    pagewidth = Math.floor((width-20)/3);
    $('#widget_pager_bottom_segundo_informe-page .views-slideshow-pager-field-item').width(pagewidth);
    
    // Adjust Pager Height
    $('#widget_pager_bottom_segundo_informe-page').addClass('clearfix');
  }


})(jQuery);
