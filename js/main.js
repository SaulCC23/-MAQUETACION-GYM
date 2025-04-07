$(document).ready(function() {
  // Inicializar WOW.js para animaciones al hacer scroll
  new WOW().init();
  
  // Menú responsive con jQuery
  $('.menu-toggle').on('click', function() {
      $('.menu-principal').toggleClass('active');
      $('body').toggleClass('menu-open');
  });
  
  // Cerrar menú al hacer clic en un enlace
  $('.menu-principal a').on('click', function() {
      $('.menu-principal').removeClass('active');
      $('body').removeClass('menu-open');
  });
  
  // Cerrar menú al hacer clic fuera
  $(document).on('click', function(e) {
      if (!$(e.target).closest('.menu-principal, .menu-toggle').length) {
          $('.menu-principal').removeClass('active');
          $('body').removeClass('menu-open');
      }
  });
  
  // Prevenir el cierre del menú al hacer clic en el menú mismo
  $('.menu-principal').on('click', function(e) {
      e.stopPropagation();
  });
  
  // Inicializar ResponsiveSlides.js para el slider
  $(".rslides").responsiveSlides({
      auto: true,             // Reproduce automáticamente
      speed: 300,             // Velocidad de la transición (reducida de 500 a 300)
      timeout: 2000,          // Tiempo entre transiciones (reducido de 4000 a 2000)
      pager: false,           // No mostrar paginación
      nav: true,              // Mostrar navegación
      random: false,          // No orden aleatorio
      pause: true,            // Pausar al pasar el ratón
      pauseControls: true,    // Pausar cuando los controles están enfocados
      prevText: "",           // Texto para el botón "anterior"
      nextText: "",           // Texto para el botón "siguiente"
      maxwidth: "",           // Ancho máximo del contenedor
      navContainer: ".slider-arrows", // Selector para los controles
      namespace: "rslides",   // Espacio de nombres
      before: function(){},   // Callback antes de cada transición
      after: function(){}     // Callback después de cada transición
  });
  
  // Inicializar Fancybox.js para la galería
  $("[data-fancybox]").fancybox({
      buttons: [
          "zoom",
          "slideShow",
          "fullScreen",
          "thumbs",
          "close"
      ],
      loop: true,
      protect: true,
      animationEffect: "fade",
      transitionEffect: "fade"
  });
  
  // Botón de subir
  $(window).on('scroll', function() {
      if ($(this).scrollTop() > 300) {
          $('#back-to-top').addClass('activo');
      } else {
          $('#back-to-top').removeClass('activo');
      }
  });
  
  $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 800);
  });
  
  // Navegación suave al hacer clic en los enlaces del menú
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html, body').animate({
                  scrollTop: target.offset().top - 70
              }, 1000);
              return false;
          }
      }
  });
});