// API URL: http://www.omdbapi.com/?i=tt3896198&apikey=d44ecacf
let search;
let searchResults = document.querySelector('.movies__header--title')
let moviesWrapper = document.querySelector('.movies');

async function renderMovies(filter, search) {
  let movies;
  

  
  
  if (!movies) {
    movies = await getMovies(search)
  }

  
  moviesWrapper.classList.remove('movies__loading');
  
  if (filter === "A_TO_Z") {
    movies.sort((a, b) => a.Title - b.Title);
  }
  else if (filter === "Z_TO_A") {
    movies.sort((a, b) => b.Title - a.Title);
  }
  else if (filter === "NEWEST_TO_OLDEST") {
    movies.sort((a, b) => b.Year - a.Year);
  }
  else if (filter === "OLDEST_TO_NEWEST") {
    movies.sort((a, b) => a.Year - b.Year);
  }

  const moviesHTML =  movies.slice(0,6).map(movie => movieHTML(movie)).join('');

  moviesWrapper.innerHTML = moviesHTML;
}

function movieHTML(movie) {
  return `<div class="movie">
              <div class="movie__title">
                ${movie.Title}
              </div>
              <div class="movie__release--year">
                ${movie.Year}
              </div>
            </div>`
}

async function getMovies(search) {
  const movies = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d44ecacf&s=${search}`);
  const moviesData = await movies.json();

  return moviesData.Search || [];
}

function searchKeyDown(event) {
  if (event.key === 'Enter') {
    search = event.target.value;

    addSpinner();

    // Load movies after short delay (same as click)
    setTimeout(() => {
      renderMovies("", search);
    }, 1000);
  }
}

function searchClick() {
  updateSearchValue();

  addSpinner();

  // Load movies after delay
  setTimeout(() => {
    renderMovies("", search);
  }, 1000);
  
}

function filterMovies(event) {
  updateSearchValue();
  renderMovies(event.target.value, search);
}

function updateSearchValue() {
  search = document.getElementById('searchMovieId').value;
  searchResults.innerHTML = `Search results for "${search}":`
}

function addSpinner() {
  // Show spinner
  moviesWrapper.innerHTML = `
    <i className="fas fa-spinner movies__loading--spinner"></i>
  `;
  moviesWrapper.classList.add('movies__loading');
}