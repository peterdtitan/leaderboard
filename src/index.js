import './styles.scss';
import Fifa from './modules/fifa';
import scoreFormEventListener from './modules/html_functions';
import getScores from './modules/api_hit';

const fifa = new Fifa();

if (fifa.scores.length === 0) {
  document.getElementById('scores-table').innerHTML = `
        <p class="empty-table">No Scores yet.</p>
      `;
}

document.getElementById('score-form').addEventListener('submit', (e) => {
  e.preventDefault();
  scoreFormEventListener(fifa);
});

document.getElementById('refresh-button').addEventListener('click', async (e) => {
  e.preventDefault();
  const meow = await getScores(fifa.gameID);
  console.log(meow);
});
