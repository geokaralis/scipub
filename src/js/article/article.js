import './header';
import './figure';
import Toolbar from './toolbar';
import Authors from './authors';

const toolbar = new Toolbar('.article-actions');
toolbar.init();

const authors = document.querySelector('.related-article__authors');
let shrunk = false;

const repalaceLast = function(element) {
  return element.innerText = element.innerText.replace(/,/g, ' ...');
}

const construct = function(element, array) {
  element.innerHTML = '';

  array.forEach((item) => {
    element.appendChild(item);
  });

  return element;
}

const shrink = function(element, range) {
  const authors = new Authors(element);

  let titles = authors.titles();
  let links = authors.links();
  let array = authors.authors();

  titles.pop(); // remove editors title

  authors.remove(array, range);

  authors.peek(array);

  repalaceLast(authors.peek(array));

  let combined = [...titles, ...array, ...links];

  let constructed = construct(element, combined);
  
  return constructed;
}

const append = function(element, children) {
  children.forEach((child) => { element.appendChild(child); });
}

const bounds = function(element, children) {
  const mq = window.matchMedia('(max-width: 600px)');
  if (mq.matches && shrunk === false) {
    shrink(element, 6);
    shrunk = true;
  } else {
    append(element, children);
    shrunk = false;
  }
}

const shrinkOnMobile = function(element) {
  const children = Array.from(element.children);

  if (shrunk != true) {
    bounds(element, children);
  }

  // window.addEventListener('resize', () => {
  //   bounds(element, children);
  // });
}

shrinkOnMobile(authors);