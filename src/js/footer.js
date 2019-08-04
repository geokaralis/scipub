function getChildren(element) {
  let array = Array.from(element.children);
  let children = [];

  array.forEach((child) => {
    children.push(child);
  });

  return children;
}

const footerAccordionToggles = document.querySelectorAll('.accordion');

// var siblings = getSiblings(footerAccordionToggles);

footerAccordionToggles.forEach((item) => {
  var children = getChildren(item);

  let toggle = children[0];
  let content = children[1];

  if (toggle.classList.contains('accordion__toggle')) {
    toggle.addEventListener('click', () => {
      if (content.classList.contains('expand')) {
        toggle.classList.remove('active');
        content.classList.remove('expand');
      } else {
        toggle.classList.add('active');
        content.classList.add('expand');
      }
    });
  }
});