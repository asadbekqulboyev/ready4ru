$(document).ready(function () {
  $(".tab_item").hide();
  $(`.tab_item${$(".hero_tab_btn.active").attr("href")}`).show();
  $(".hero_tab_btn").on("click", function (e) {
    e.preventDefault();

    // Aktiv klassni boshqalardan olib tashlaymiz
    $(".hero_tab_btn").removeClass("active");
    $(this).addClass("active");

    // Target tab ID ni olish
    const target = $(this).attr("href");

    // Barcha tab_itemlarni yashirish va faqat keraklisini ko‘rsatish
    $(".tab_item").hide();
    $(target).fadeIn(200);
  });
  $(".modal_item").hide();
  $(".modal_item").first().fadeIn(200);

  $(".modal_tab_btn").on("click", function (e) {
    e.preventDefault();
    $(".modal_tab_btn").removeClass("active");
    $(this).addClass("active");
    const target = $(this).attr("href");

    // Barcha tab kontentlarini fadeOut
    $(".modal_item:visible").fadeOut(200, function () {
      // Faqat kerakligiga fadeIn
      $(target).fadeIn(200);
    });
  });
  $(".modal_exit").click(function () {
    $(".modal").fadeOut(200);
  });
  $(".lcation").click(function (e) {
    e.preventDefault();
    $(".modal").fadeIn(200);
  });
  $(".modal_links a").click(function (e) {
    e.preventDefault();
    $(".lcation span").text($(this).text());
    $(".modal").fadeOut(200);
  });
  $(".hamburger").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header_top_menu").toggleClass("active");
    $(".header_menu_responsive").toggleClass("active");
    $("body").toggleClass("hidden");
  });
  $("#solid_widget").text("Widget yuklandi!");
  solid_widget.init(
    JSON.stringify({
      refid: "222500",
      bgcolor: "f5f5f5",
      color: "6E44D9",
      id: "solid_widget",
      lang: "en",
    })
  );
  $(".faq_header").on("click", function () {
    let parent = $(this).closest(".faq_item");

    // Agar FAQ faollashgan bo‘lsa - yopiladi, bo‘lmasa ochiladi
    parent.toggleClass("active");
    parent.find(".faq_item_text").stop().slideToggle(300);
  });
});

// });
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});
$(document).ready(function () {
  function showStep(step) {
    $(".step").removeClass("active");
    $('.step[data-step="' + step + '"]').addClass("active");
  }

  // next bosilganda
  $(document).on("click", "[data-next]", function () {
    let step = $(this).data("next");
    showStep(step);
  });

  // back bosilganda
  $(".steps_back").on("click", function () {
    let current = $(".step.active").data("step");
    if (current > 1) {
      showStep(current - 1);
    }
  });

  // exit bosilganda
  $(".modal_exit").on("click", function () {
    $(".modal").fadeOut();
  });
});
$(document).ready(function () {
  const fileInput = $("#fileInput");

  fileInput.on("change", function () {
    const files = this.files;

    $.each(files, function (i, file) {
      if (!file.type.startsWith("image/")) return;

      // Preview box yaratamiz
      const preview = $(`
        <div class="file-preview">
          <div class="loading"></div>
          <img src="" alt="Preview">
          <button class="remove-btn">&times;</button>
        </div>
      `);

      // upload-box oldidan qo‘shamiz
      $(".upload-box").before(preview);

      const reader = new FileReader();
      reader.onload = function (e) {
        preview.fadeIn(); // preview boxni ko‘rsatamiz
        preview.find(".loading").fadeIn(); // loadingni ko‘rsatamiz

        // 1s loading, keyin rasm
        setTimeout(() => {
          preview.find(".loading").hide();
          preview.find("img").attr("src", e.target.result).fadeIn();
          preview.find(".remove-btn").fadeIn();
        }, 1000);
      };
      reader.readAsDataURL(file);

      // ❌ remove bosilganda previewni o‘chirish
      preview.find(".remove-btn").on("click", function () {
        preview.remove();
      });
    });

    // Fayl inputni reset qilish
    fileInput.val("");
  });
});
$(".open_register").click(function (e) {
  e.preventDefault();
  $("#modal_register").fadeIn(200);
});
