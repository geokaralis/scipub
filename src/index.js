import './scss/style.scss';
import './img/Logo.svg';
import './img/arrow.svg';
import './img/search.svg';
import './img/arrow-right.svg';

import './img/facebook-icon.svg';
import './img/twitter-icon.svg';
import './img/linkedin-icon.svg';
import './img/reddit-icon.svg';
import './img/mail-icon.svg';
import './img/stackoverflow-icon.svg';

import './img/rebecca.jpg';
import './img/wofgang.jpg';
import './img/rivest.jpg';
import './img/kuz.jpg';

import './img/notification-icon.svg';
import './img/addtofolder-icon.svg';
import './img/citation-icon.svg';
import './img/view-icon.svg';
import './img/pdf-icon.svg';
import './img/arrow-long-left.svg';
import './img/arrow-long-right.svg';

import './img/info-icon.svg';
import './img/metrics-icon.svg';
import './img/view-dark-icon.svg';
import './img/references-icon.svg';
import './img/figures-icon.svg';
import './img/table-icon.svg';
import './img/share-icon.svg';

import './img/play-icon.svg';
import './img/download-icon.svg';
import './img/unlock-icon.svg';

import './img/citation-icon-24.svg';
import './img/metrics-icon-24.svg';
import './img/unlock-icon-24.svg';
import './img/fullscreen-icon-24.svg';
import './img/open-icon-24.svg';

import './img/menu-icon.svg';
import './img/login-icon.svg';
import './img/logo-mobile.svg';

import './img/video-still.jpg';
import './img/video-still-figure.jpg';

console.log("Hello webpack");

// const logo = document.getElementById('logo');
// logo.src = Logo;

// function component() {
//   const element = document.createElement('div');
//   element.innerHTML = "Hello, Wepback";
//   element.classList.add('hello');

//   const myIcon = new Image();
//   myIcon.src = Logo;
//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());

var el = document.getElementById('main-header-bottom');
var elTop = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

window.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop > elTop){
      el.classList.add('fixed');
    }
    else
    {
        el.classList.remove('fixed');
    }
});

const figureShowMoreButton = document.getElementById('figure-show-more');
const articleFigure = document.getElementById('figure-table');

const figureShowMoreButtonText = figureShowMoreButton.innerText;

figureShowMoreButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (articleFigure.classList.contains('collapsed')) {
    articleFigure.classList.remove('collapsed');
    figureShowMoreButton.innerHTML = 'Show less';
  } else {
    articleFigure.classList.add('collapsed');
    figureShowMoreButton.innerHTML = figureShowMoreButtonText;
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