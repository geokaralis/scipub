function observeFormatsButton(el, text) {
  if (window.matchMedia('(max-width: 960px)').matches) {
    el.innerText = "Formats";
  } else if (window.matchMedia('(min-width: 960px)').matches) {
    el.innerText = text;
  }
}

const viewAllFormatsButton = document.getElementById('view-all-formats');
const text = viewAllFormatsButton.innerText;

observeFormatsButton(viewAllFormatsButton, text);

window.addEventListener('resize', () => {
  observeFormatsButton(viewAllFormatsButton, text);
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