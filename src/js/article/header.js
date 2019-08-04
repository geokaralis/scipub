function observeFormatsButton(el) {
  el.innerText = "Formats";
}

const viewAllFormatsButton = document.getElementById('view-all-formats');
const text = viewAllFormatsButton.innerText;

observeFormatsButton(viewAllFormatsButton);

window.addEventListener('resize', () => {

  if (window.matchMedia('(max-width: 960px)').matches) {
    observeFormatsButton(viewAllFormatsButton);
  } else if (window.matchMedia('(min-width: 960px)').matches) {
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