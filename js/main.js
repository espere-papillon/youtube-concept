const swiper = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.channel-button-right',
      prevEl: '.channel-button-left',
    },
  
  });

  const swiper2 = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1600: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 2
      }
    },
    // Navigation arrows
    navigation: {
      nextEl: '.recommended-channel-button-right',
      prevEl: '.recommended-channel-button-left',
    },
  
  });

  const swiper3 = new Swiper('.food-channel-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1900: {
        slidesPerView: 6
      },
      1600: {
        slidesPerView: 5
      },
      1300: {
        slidesPerView: 4
      },
      1100: {
        slidesPerView: 3
      },
      800: {
        slidesPerView: 2
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.food-channel-button-right',
      prevEl: '.food-channel-button-left',
    },
  
  });

  const searchButton = document.querySelector('.mobile-search');
  const mobileSearch = document.querySelector('.input-group');
  searchButton.addEventListener('click', () => {mobileSearch.classList.toggle('is-open')})

  if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
  }