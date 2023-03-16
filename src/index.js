import './styles.scss';
import Fifa from './modules/fifa.js';
import { scoreFormEventListener } from './modules/html_functions.js';

const fifa = new Fifa();

document.getElementById('score-form').addEventListener('submit',(e) => {
  e.preventDefault();
  scoreFormEventListener(fifa);
});
