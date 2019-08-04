class Toolbar {

  constructor(className) {
    this.element = document.querySelector(className);
  }

  init() {
    this.snap(this.element);
  }

  snap(element) {
    let top = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

    window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > top) {
        element.classList.add('fixed');
      }
      else {
        element.classList.remove('fixed');
      }
    });
  }
}

export default Toolbar;