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
    $(".modal.location").fadeIn(200);
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
    }),
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
  if ($(this).scrollTop() > 60) {
    $(".header").addClass("active");
  } else {
    $(".header").removeClass("active");
  }
});
$(document).ready(function () {
  $(document).on(
    "click",
    ".btn_next, .option, .modal_edit1, .modal_edit2",
    function () {
      let nextStep = $(this).data("next");
      if (!nextStep) return;

      let modal = $(this).closest(".modal");
      let steps = modal.find(".step");
      let currentStep = $(this).closest(".step").data("step");
      let valid = true;

      modal.find("input").css({
        "border-color": "#6e44d9",
        outline: "none",
      });

      let inputs = modal.find(
        `.step[data-step="${currentStep}"] input[type='email'], 
         .step[data-step="${currentStep}"] input[type='tel']`,
      );
      inputs.each(function () {
        if ($(this).val().trim() === "") {
          $(this).css("border-color", "red").focus();
          valid = false;
          return false;
        }
      });

      // 🔹 switch_input klasini hisobga olmaymiz
      let checkboxes = modal
        .find(`.step[data-step="${currentStep}"] input[type='checkbox']`)
        .not(".switch_input");

      if (checkboxes.length > 0) {
        let allChecked = true;
        checkboxes.each(function () {
          if (!$(this).is(":checked")) {
            $(this).css("outline", "2px solid red");
            allChecked = false;
          } else {
            $(this).css("outline", "none");
          }
        });
        if (!allChecked) valid = false;
      }

      if (!valid) return;

      steps.removeClass("active");
      modal.find(`.step[data-step="${nextStep}"]`).addClass("active");
    },
  );

  $(document).on("click", ".steps_back", function () {
    let modal = $(this).closest(".modal");
    let activeStep = modal.find(".step.active");
    let currentStep = parseInt(activeStep.data("step"));

    if (currentStep > 1) {
      activeStep.removeClass("active");
      modal.find(`.step[data-step="${currentStep - 1}"]`).addClass("active");
    }
  });

  $(".grid_2 .option").click(function () {
    $(".title_text").text($(this).attr("data-value"));
  });

  $(document).on("click", ".modal_exit", function () {
    let modal = $(this).closest(".modal");

    modal.hide();

    modal.find("input").val("");
    modal.find("input[type='checkbox']").prop("checked", false);
    modal.find("input").css({
      "border-color": "#6e44d9",
      outline: "none",
    });

    modal.find(".step").removeClass("active");
    modal.find('.step[data-step="1"]').addClass("active");
  });

  $("[data-modal]").on("click", function () {
    let target = $(this).data("modal");
    $("#" + target).show();
  });
});

$(document).ready(function () {
  // Ingliz tilini default qilib qo'yamiz
  $.datepicker.setDefaults($.datepicker.regional["en"]);

  // Sana tanlash
  $(".policy_date").datepicker({
    dateFormat: "yy-mm-dd", // yil-oy-kun formatida
  });

  function handleFileInput(fileInput) {
    $(fileInput).on("change", function () {
      const files = this.files;
      const uploadArea = $(this).closest(".upload-area");

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
$(document).ready(function () {
  $(".step5  .btn_next").on("click", function (e) {
    e.preventDefault(); // Default tugma ishini to'xtatamiz
    // 5-step ichidagi barcha required checkboxlarni tekshiramiz
    var allChecked = $(".step5 input[type='checkbox'][required]")
      .toArray()
      .every(function (cb) {
        return $(cb).is(":checked");
      });

    if (allChecked) {
      // Agar barcha checkboxlar checked bo'lsa, 6-qadamga o'tamiz
      $(".step").hide(); // Hamma steplarni yashiramiz
      $(".step[data-step='6']").show(); // 6-stepni ko'rsatamiz
    } else {
      $(".step5  .btn_next").addClass("disabled");
      return;
    }
  });
});
$(".pay_btn").click(function (e) {
  e.preventDefault();
  $(".modal.price_modal").fadeIn(200);
});
$(".add_card").click(function () {
  $(".modal").fadeOut(200);
  $(".profile_form_top").fadeOut(0);
  $(".profile .form").addClass("active");
  $(".form_bottom").addClass("active");
});
$(".edit_profile").click(function () {
  $(".modal.form_edit_modal").fadeIn(200);
});

$(function () {
  $(".form_input_card").inputmask({
    mask: "9999 9999 9999 9999[ 999]",
    placeholder: "",
    showMaskOnHover: false,
    clearIncomplete: true,
  });
});
let wievs_slide = new Swiper(".wievs_slide", {
  navigation: {
    nextEl: ".btn.next",
    prevEl: ".btn.prev",
  },
  pagination: {
    el: ".wievs_slide-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
  },
});
$(".open_reg").click(function (e) {
  e.preventDefault();
  $(".form_edit_modal2").fadeIn(200);
});
$(document).ready(function () {
  $("input[type='tel']").inputmask({
    mask: "+9999999999999",
    greedy: false,
    showMaskOnHover: false,
    showMaskOnFocus: false,
  });
});
$(".login_open").click(function (e) {
  e.preventDefault();
  $(".form_edit_modal2").fadeOut(200);
  $(".modal_login").fadeIn(200);
});
$(".login_code").click(function (e) {
  e.preventDefault();
  $(".form_edit_modal2").fadeOut(200);
  $(".modal_login").fadeOut(0);
  $(".modal_login2").fadeIn(200);
});
$(".open_reg_modal").click(function (e) {
  e.preventDefault();
  $(".modal.modal_login_first").fadeIn(200);
});
$(".all_items").click(function () {
  $(".destinations_item").fadeIn(200);
  $(this).fadeOut(0);
});
