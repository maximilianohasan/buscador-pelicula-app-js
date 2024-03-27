// Vamos a capturar el boton
document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = '898aea3fab1496c7ba41974a109d9014'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'
     
let resultContainer = document.getElementById('results')
function searchMovies(){
    resultContainer.innerHTML = 'Cargando...'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}


function displayMovies(movies){
    resultContainer.innerHTML = ''

    if(searchMovies.len === 0){
       resultContainer.innerHTML = '<p> No se encontraron resultados para tu busqueda </p>'
       return  // para que salga del displayMovies 
    }
    
    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha de lanzamiento fué:' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)            // estos 4 elementos van dentro del movieDiv 
        movieDiv.appendChild(title)             // 
        movieDiv.appendChild(releaseDate)       //
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)   // al movieDiv lo meto dentro del div resultContainer

    });
}