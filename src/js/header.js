var el = document.getElementById('main-header-bottom');
var elTop = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

window.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop > elTop) {
    el.classList.add('fixed');
  }
  else {
    el.classList.remove('fixed');
  }
});

function progress(progressBar, element) {
  let bar = document.querySelector(progressBar);
  let el = document.querySelector(element);

  window.addEventListener("scroll", () => {
    let max = el.scrollHeight - innerHeight;
    bar.style.width = `${(pageYOffset / max) * 100}%`;
  });
}

progress('.progress-bar', '.main-article');