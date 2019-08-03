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
import './img/submenu-icon-24.svg';

import './img/menu-icon.svg';
import './img/login-icon.svg';
import './img/logo-mobile.svg';

import './img/video-still.jpg';
import './img/video-still-figure.jpg';

import './img/favicon-48.png';

import './img/results-reproduced.png'
import './img/artifacts-evaluated-functional.png'

import Authors from './js/authors';

console.log("Hello webpack");

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

function observeFormatsButton(el) {
  el.innerText = "Formats";
}

const viewAllFormatsButton = document.getElementById('view-all-formats');
const text = viewAllFormatsButton.innerText;

observeFormatsButton(viewAllFormatsButton);

window.addEventListener('resize', () => {
  
  if (window.matchMedia('(max-width: 960px)').matches) {
    observeFormatsButton(viewAllFormatsButton);
  } else if(window.matchMedia('(min-width: 960px)').matches) {
    viewAllFormatsButton.innerText = text;
  }
});

function setLabelText(label, origin) {
  const mq = window.matchMedia('(max-width: 600px)');
  if (mq.matches) {
    label.innerHTML = 'Article <span>Open Access</span>';
  } else {
    label.innerHTML = origin;
  }
}



function changeArticleLabel() {
  const articleLabel = document.querySelector('.article-header__label');
  const originalText = articleLabel.innerHTML;

  setLabelText(articleLabel, originalText);

  window.addEventListener('resize', () => {
    setLabelText(articleLabel, originalText);
  });
}

changeArticleLabel();

const authors = document.querySelector('.related-article__authors');

// console.log(authors.childNodes);

// const wrapper = document.getElementById('test') // take a wrapper by ID -> fastest
// const itemsArray = Array.from(authors.children) // make Array from his children

// const pickOne = itemsArray.map(item => { // loop over his children using .map() --> see MDN for more
//   var len = itemsArray.length;
//    if(item.classList.contains('author')) {
//      itemsArray.splice(1,1);
//      console.log(len);
//    }
    
// })

// pickOne;

// function getAuthors() {
//   const authors = document.querySelector('.related-article__authors');
//   const authorsChildren = Array.from(authors.children);

//   let saved = [];

//   authorsChildren.forEach((item) => {
//     if(item.classList.contains('author') || item.classList.contains('authors__title')) {
//       saved.push(item);
//     }


//   })

//   return saved;
// }

// function removeAuthors() {
//   let authorsArr = getAuthors();


//     authorsArr.splice(4, authorsArr.length - 4);

//     console.log(authorsArr)

//     const authors = document.querySelector('.related-article__authors');
//     authors.innerHTML = '';

//     authorsArr.forEach((item) => {
//       authors.appendChild(item)
//     })


  
// }

// removeAuthors();

function shrinkAuthors() {
  const authorsElement = document.querySelector('.related-article__authors');
  const authors = new Authors(authorsElement);

  let titles = authors.titles();
  let links = authors.links();
  let authorsArray = authors.authors();

  titles.pop(); // remove editors title

  authors.removeItems(authorsArray, 7);

  let lastAuthor = authors.peek(authorsArray);
  lastAuthor.innerText = lastAuthor.innerText.replace(/,/g, '...');

  let constructed = [...titles, ...authorsArray, ...links];
  authorsElement.innerHTML = '';

  constructed.forEach((item) => {
    authorsElement.appendChild(item);
  });
}

shrinkAuthors();

// util
var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);