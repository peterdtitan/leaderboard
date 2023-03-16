import Score from './score';

const scoreFormEventListener = (fifa) => {
  const scoreForm = document.getElementById('score-form');
  const newScore = new Score(scoreForm.elements['name'].value, scoreForm.elements['score'].value);
  const scoresTable = document.getElementById('scores-table');

  const newScoreElement = document.createElement('li');
  newScoreElement.innerHTML = `
    <p>${newScore.name}: ${newScore.score}</p>
  `;

  if (fifa.scores.length === 0) {
    scoresTable.innerHTML = '';
  }

  scoresTable.appendChild(newScoreElement);
  fifa.addNewScore(newScore);

  scoreForm.reset();
};

export { scoreFormEventListener };
