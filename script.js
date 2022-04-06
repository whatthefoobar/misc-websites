// sticky nav bar
const nav = document.querySelector('nav');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixedNav);

//

$(document).ready(function () {
  $('#menu').click(function () {
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 0) {
      $('.top').show();
    } else {
      $('.top').hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    );
  });
});
// rewrite all in JS
