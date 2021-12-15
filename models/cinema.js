const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function(){
  return this.films.map((film) => film.title);
};

Cinema.prototype.findByTitle = function(title){
  return this.films.find((film) => film.title === title);
};

Cinema.prototype.filterByGenre = function(genre){
  return this.films.filter((film) => film.genre === genre); 
};

Cinema.prototype.checkForYear = function(year){
  return !this.films.every((film) => film.year !== year);
}

Cinema.prototype.checkForNoYear = function(year){
  return this.films.every((film) => film.year !== year);
}

Cinema.prototype.checkLength = function(length){
  return this.films.every((film) => film.length > length);
}

Cinema.prototype.totalRunTime = function() {
  return this.films.reduce((runningTotal, film) => runningTotal + film.length, 0);
}

module.exports = Cinema;
