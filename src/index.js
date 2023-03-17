import './styles.scss';
import Fifa from './modules/fifa';
import { scoreFormEventListener, refreshButtonEventListener } from './modules/html_functions.js';

const fifa = new Fifa();

document.getElementById('scores-table').innerHTML = `
  <p class="centered-text">Press Refresh to get the Latest Scores.</p>
`;

document.getElementById('score-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await scoreFormEventListener(fifa);
});

document.getElementById('refresh-button').addEventListener('click', async (e) => {
  e.preventDefault();
  await refreshButtonEventListener(fifa);
});