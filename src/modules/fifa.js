export default class Fifa {
  scores = [];

  gameID = 'a7i0pysog52eNkuIXuNT';

  addNewScore = (score) => {
    this.scores.push(score);
  }

  clearArray = () => {
    this.scores = this.scores.splice(0, this.scores.length);
  }
}
