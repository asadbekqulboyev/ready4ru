$(document).ready(function () {
    $('.hero_tab_btn').on('click', function (e) {
        e.preventDefault();

        // Aktiv klassni boshqalardan olib tashlaymiz
        $('.hero_tab_btn').removeClass('active');
        $(this).addClass('active');

        // Target tab ID ni olish
        const target = $(this).attr('href');

        // Barcha tab_itemlarni yashirish va faqat keraklisini ko‘rsatish
        $('.tab_item').hide();
        $(target).fadeIn(200);
    });
    $('.modal_item').hide();
    $('.modal_item').first().fadeIn(200);

    $('.modal_tab_btn').on('click', function (e) {
      e.preventDefault();
      $('.modal_tab_btn').removeClass('active');
      $(this).addClass('active');
      const target = $(this).attr('href');

      // Barcha tab kontentlarini fadeOut
      $('.modal_item:visible').fadeOut(200, function () {
        // Faqat kerakligiga fadeIn
        $(target).fadeIn(200);
      });
    });
    $('.modal_exit').click(function () {
      $('.modal').fadeOut(200);
      
    });
    $('.lcation').click(function(e){
      e.preventDefault();
      $('.modal').fadeIn(200);
    })
    $('.modal_links a').click(function(e){
      e.preventDefault();
      $('.lcation span').text($(this).text());
      $('.modal').fadeOut(200);
    })
    $('.hamburger').click(function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $('.header_top_menu').toggleClass('active');
      $('.header_menu_responsive').toggleClass('active');
      $('body').toggleClass('hidden');
    })
    $('#solid_widget').text('Widget yuklandi!');
    solid_widget.init(
      JSON.stringify({
          "refid": "222500",
          "bgcolor": "#f5f5f5",
          "color": "#f34b58",
          "id": "solid_widget",
          "lang": ":ru"
      })
  );
  
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.header').addClass('active');
  } else {
    $('.header').removeClass('active');
  }
});