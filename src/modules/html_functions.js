import Score from './score';
import FifaAPI from './api_hit';

const addRecentScore = (fifa, {
  name, score,
}) => {
  const scoresTable = document.getElementById('scores-table');

  const newScoreElement = document.createElement('li');
  newScoreElement.innerHTML = `
    <p>${name}</p><p>${score}</p>
  `;

  if (fifa.scores.length === 0) {
    scoresTable.innerHTML = '';
  }

  scoresTable.appendChild(newScoreElement);
  fifa.addNewScore(new Score(name, score));
};

const scoreFormEventListener = async (fifa) => {
  const scoreForm = document.getElementById('score-form');
  const newScore = new Score(scoreForm.elements.name.value, scoreForm.elements.score.value);

  document.getElementById('submit-button').innerText = 'Sending Score ...';
  const isAddedToAPI = await FifaAPI.addNewScore(fifa.gameID, {
    user: newScore.name,
    score: newScore.score,
  });

  document.getElementById('submit-button').innerText = 'Submit';
  if (isAddedToAPI === null) {
    return;
  }

  addRecentScore(fifa, {
    name: newScore.name,
    score: newScore.score,
  });

  scoreForm.reset();
};

const refreshButtonEventListener = async (fifa) => {
  const scoresTable = document.getElementById('scores-table');
  scoresTable.innerHTML = `
    <p class="centered-text"><img src="./assets/images/loading-bar.png" alt="" width="70"></p>
  `;

  const data = await FifaAPI.getScores(fifa.gameID);
  if (data === null) {
    // TODO Show Error
    return;
  }

  data.sort((a, b) => b.score - a.score);

  fifa.clearArray();
  scoresTable.innerHTML = '';

  data.forEach((score) => {
    addRecentScore(fifa, {
      name: score.user,
      score: score.score,
    });
  });

  if (fifa.scores.length === 0) {
    document.getElementById('scores-table').innerHTML = `
      <p class="centered-text">No Scores yet.</p>
    `;
  }
};

export { scoreFormEventListener, refreshButtonEventListener };
