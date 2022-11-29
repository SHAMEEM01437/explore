var swiper = new Swiper(".explore", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });