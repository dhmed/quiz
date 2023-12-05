const highscoresElement = document.getElementById('highscores');
const goBackButton = document.querySelector('a[href="index.html"]');
const clearButton = document.getElementById('clear');

goBackButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

clearButton.addEventListener('click', () => {
  clearHighscores();
});