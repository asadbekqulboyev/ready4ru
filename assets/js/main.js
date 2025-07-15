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
});