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
  // Next bosilganda
  $(document).on("click", ".btn_next, .option", function () {
    let nextStep = $(this).data("next");
    if (!nextStep) return;

    let modal = $(this).closest(".modal"); // faqat shu modal ichida ishlaydi
    let steps = modal.find(".step");

    steps.removeClass("active");
    modal.find(`.step[data-step="${nextStep}"]`).addClass("active");
  });

  // Back bosilganda
  $(document).on("click", ".steps_back", function () {
    let modal = $(this).closest(".modal");
    let activeStep = modal.find(".step.active");
    let currentStep = parseInt(activeStep.data("step"));

    if (currentStep > 1) {
      activeStep.removeClass("active");
      modal.find(`.step[data-step="${currentStep - 1}"]`).addClass("active");
    }
  });

  // Exit bosilganda
  $(document).on("click", ".modal_exit", function () {
    let modal = $(this).closest(".modal");
    modal.hide();
    modal.find(".step").removeClass("active");
    modal.find('.step[data-step="1"]').addClass("active"); // 1-stepga qaytaradi
  });

  // Modalni ochish uchun tugma (misol uchun)
  $("[data-modal]").on("click", function () {
    let target = $(this).data("modal"); // masalan: data-modal="modal_register_b"
    $("#" + target).show();
  });
});

$(document).ready(function () {
  $(".policy_date").datepicker({
    dateFormat: "yy-mm-dd", // 2022-12-31 format
  });
  function handleFileInput(fileInput) {
    $(fileInput).on("change", function () {
      const files = this.files;
      const uploadArea = $(this).closest(".upload-area"); // faqat shu input konteyneri

      $.each(files, function (i, file) {
        if (!file.type.startsWith("image/")) return;

        const preview = $(`
          <div class="file-preview">
            <div class="loading"></div>
            <img src="" alt="Preview">
            <button class="remove-btn">&times;</button>
          </div>
        `);

        uploadArea.find(".upload-box").before(preview);

        const reader = new FileReader();
        reader.onload = function (e) {
          preview.fadeIn();
          preview.find(".loading").fadeIn();

          setTimeout(() => {
            preview.find(".loading").hide();
            preview.find("img").attr("src", e.target.result).fadeIn();
            preview.find(".remove-btn").fadeIn();
          }, 1000);
        };
        reader.readAsDataURL(file);

        preview.find(".remove-btn").on("click", function () {
          preview.remove();
        });
      });

      this.value = ""; // fayl input reset
    });
  }

  // Ikkalasiga ham ishlatamiz
  handleFileInput("#fileInput1");
  handleFileInput("#fileInput2");
});

$(".open_register").click(function (e) {
  e.preventDefault();
  $("#modal_register_b").fadeIn(200);
});
$(".open_register_ac").click(function (e) {
  e.preventDefault();
  $("#modal_register_ac").fadeIn(200);
});
