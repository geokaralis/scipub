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