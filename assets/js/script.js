/********************
header
********************/
$(".header .header__bars").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

$(".header .header__nav span").on('click', function () {

    var selector = $(".header .header__nav")

    if (selector.hasClass('shown')) {
        selector.css('right', "100%");
        selector.removeClass('shown');
    } else {
        selector.css('right', "0");
        selector.addClass('shown');
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    let elementId = $(event.target).attr('href');
    if (elementId == '#') return;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000, 'swing');
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 50) {
        $('.header-1').addClass('fixed');
    } else {
        $('.header-1').removeClass('fixed');
    }
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 0) {
        $('.header-2').addClass('fixed');
    } else {
        $('.header-2').removeClass('fixed');
    }
});

/********************
testimonial
********************/
$(".testimonial__wrapper").on('mouseover click', (e) => {
    if ($(e.target).is('img')) {
        let parentElement = $(e.target).parent().parent();
        //console.log(parentElement);
        parentElement.addClass('active');
        if (parentElement.siblings().hasClass('active')) {
            parentElement.siblings().removeClass('active');
        }
    }
});

/********************
clients slider
********************/
var clients = new Swiper('.clients-slider', {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    breakpoints: {
        991.98: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

/********************
screenshot slider
********************/
var screenshot = new Swiper('.screenshot-slider', {
    loop: true,
    slidesPerView: 4.75,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.screenshot-nav-next',
        prevEl: '.screenshot-nav-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        991.98: {
            slidesPerView: 2.75,
        },
        1200: {
            slidesPerView: 3.25,
        },
        1350: {
            slidesPerView: 3.5,
        },
        1600: {
            slidesPerView: 3.90,
        },
        1800: {
            slidesPerView: 4.75,
        }
    }
});

/********************
related post slider
********************/
var related_post = new Swiper('.blog_related-slider', {
    loop: true,
    slidesPerView: 2,
    navigation: {
        nextEl: '.related-post-nav .screenshot-nav-next',
        prevEl: '.related-post-nav .screenshot-nav-prev',
    },
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        991.98: {
            slidesPerView: 2
        }
    }
});

/********************
accordion
********************/
$('.card').on('hide.bs.collapse', function (e) {
    var parentId = $(e.target).parent().attr('id');
    $(`#${parentId} > .card-header > h5`).addClass('hidden');
});

$('.card').on('show.bs.collapse', function (e) {
    var parentId = $(e.target).parent().attr('id');
    $(`#${parentId} > .card-header > h5`).removeClass('hidden');
});

/********************
blog
********************/
$('.category__dropdown').on('click', (e) => {
    if (($(e.target).parents().hasClass('category__dropdown')) && !($('.category__dropdown-box').hasClass('shown'))) {
        $('.category__dropdown-box').addClass('shown');
    } else if (($(e.target).parents().hasClass('category__dropdown-info')) && ($('.category__dropdown-box').hasClass('shown'))) {
        $('.category__dropdown-box').removeClass('shown');
    }
});
$('.date__dropdown').on('click', (e) => {
    if (($(e.target).parents().hasClass('date__dropdown')) && !($('.date__dropdown-box').hasClass('shown'))) {
        $('.date__dropdown-box').addClass('shown');
    } else if (($(e.target).parents().hasClass('date__dropdown-info')) && ($('.date__dropdown-box').hasClass('shown'))) {
        $('.date__dropdown-box').removeClass('shown');
    }
});

$(window).on('click', (e) => {
    if (!($(e.target).parents().hasClass('category__dropdown'))) {
        $('.category__dropdown-box').removeClass('shown');
    }
    if (!($(e.target).parents().hasClass('date__dropdown'))) {
        $('.date__dropdown-box').removeClass('shown');
    }
});


$('.nav__dropdown-info').on('click', (e) => {
    let parentId = $(e.target).closest('li').attr('id');
    $(`#${parentId} > .nav__dropdown-box`).toggleClass('shown');
});

// ////////////////////////////////////// time
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
  let currentNumber = startNumber
  const interval = window.setInterval(updateNumber, 17)
  function updateNumber() {
    if (currentNumber >= finalNumber) {
      clearInterval(interval)
    } else {
      let inc = Math.ceil(finalNumber / (duration / 17))
      if (currentNumber + inc > finalNumber) {
        currentNumber = finalNumber
        clearInterval(interval)
      } else {
        currentNumber += inc
      }
      callback(currentNumber)
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  animateNumber(5901012, 45000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('transaction-count').innerText = formattedNumber
  })
  
  animateNumber(499168, 45000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('city-count').innerText = formattedNumber
  })
  
  // animateNumber(1500, 3000, 0, function (number) {
  //   const formattedNumber = number.toLocaleString()
  //   document.getElementById('customer-count').innerText = formattedNumber
  // })
})



























































