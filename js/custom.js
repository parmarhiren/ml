

  $(function () {

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    // AOS ANIMATION
    AOS.init({
      disable: 'mobile',
      duration: 800,
      anchorPlacement: 'center-bottom'
    });


    // SMOOTHSCROLL NAVBAR
    $(function() {
      $('.navbar a, .hero-text a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });    
  });

  $(document).ready(function(){
    $("#filter-movies").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#owl-carousel-marketing .grid-item").filter(function() {
        $(this).toggle($(this).attr("data-mname").toLowerCase().indexOf(value) > -1)
      });
    });

    $('.owl-carousel-hero').owlCarousel({
         // Most important owl features
    items : 5,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
         //Pagination
         pagination : false,
         paginationNumbers: false,
         //Mouse Events
    mouseDrag : false,
    touchDrag : false,
    navigation : false,
    // Responsive 
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,

    })
    $('.owl-carousel-home').owlCarousel({
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
          singleItem : false,
          //Pagination
          pagination : false,
          paginationNumbers: false,
          autoPlay : true,
           //Mouse Events
          mouseDrag : true,
          touchDrag : true,
          navigation : false,
          // Responsive 
          responsive: true,
          responsiveRefreshRate : 200,
          responsiveBaseWidth: window,
          transitionStyle:"fade"
    })
    $('#owl-carousel-marketing').owlCarousel({
      items : 1,
      itemsDesktop : [1200,1],
      itemsDesktopSmall : [980,1],
      itemsTablet: [768,1],
      itemsTabletSmall: false,
      itemsMobile : [479,3],
      singleItem : true,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      //Pagination,
      pagination : true,
      paginationNumbers: true,
      navigation:false,
      // Responsive 
      responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
      lazyLoad : true,

    });

  });
