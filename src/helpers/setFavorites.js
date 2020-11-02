export default function setFavorites (movies) {
  const favorites = JSON.parse(localStorage.getItem('favorites'))
  const counter = {}
  const counter2 = {}

  if(favorites) {
    favorites.forEach((favorite, index) => {
      counter[favorite.id] = index
    })
  
    movies.forEach((movie, index) => {
      counter2[movie.id] = index
    })
  
    for(let key in counter) {
      if(counter2[key]+1) {
        movies[counter2[key]].liked = true
      } 
    }
  }

  return { movies, favorites }
}