import Score from './score.js';

const scoreFormEventListener = (fifa) => {
  const scoreForm = document.getElementById('score-form');
  const newScore = new Score(scoreForm.elements['name'].value, scoreForm.elements['score'].value);

  const newScoreElement = document.createElement('li');
  newScoreElement.innerHTML = `
    <p>${newScore.name}: ${newScore.score}</p>
  `;

  document.getElementById('scores-table').appendChild(newScoreElement);
  fifa.addNewScore(newScore);

  scoreForm.reset();
}

export { scoreFormEventListener };
