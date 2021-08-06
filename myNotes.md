### Autenticação na API

Usei um .env com os parâmetros proposto

https://api.themoviedb.org/3/movie/550?api_key=APIKEY
Ou.. usando Bearer Token (Auth Bearer Token, JWT etc)
{
headers: {'Authorization': 'Bearer $API_KEY'}
}

# Auth

https://developers.themoviedb.org/3/getting-started/authentication

curl --request GET \
 --url 'https://api.themoviedb.org/3/movie/76341' \
 --header 'Authorization: Bearer <<access_token>>' \
 --header 'Content-Type: application/json;charset=utf-8'

# Dev

## Debounce / Throttling

https://css-tricks.com/debouncing-throttling-explained-examples/

https://stackoverflow.com/questions/57778950/how-to-load-more-search-results-when-scrolling-down-the-page-in-react-js

Inifinit scrolling:
https://www.youtube.com/watch?v=NZKUirTtxcg
https://gist.github.com/lelandrichardson/35f7658ce2be94fcfdb4
https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
https://upmostly.com/tutorials/build-an-infinite-scroll-component-in-react-using-react-hooks
https://www.digitalocean.com/community/tutorials/react-react-infinite-scroll

## API Tips

https://developers.themoviedb.org/3/getting-started/introduction

Filmes populares: https://developers.themoviedb.org/3/movies/get-popular-movies
https://api.themoviedb.org/3/movie/popular?page=1

Detalhes do filme: https://developers.themoviedb.org/3/movies/get-movie-details
https://api.themoviedb.org/3/movie/{movie_id}

Search Movies: https://developers.themoviedb.org/3/search/search-movies
https://api.themoviedb.org/3/search/movie?query=$QUERY_SEARCH&page=1&include_adult=false

# Imagem

url base: https://image.tmdb.org/t/p/w220_and_h330_face/$POSTER_IMAGE

backdrop path: https://image.tmdb.org/t/p/w500/$BACKDROP_PATH

### MEUS ACRÉSCIMOS:

O usuário do site pode adicionar os preferidos que guarda no localStorage.
Ao iniciar o site, recupera a lista do LocalStorage e exibe no menu dedicado.

//https://api.themoviedb.org/3/search/movie?api_key=API___KEYYY&language=pt_BR&query=Nemo&page=1&include_adult=false
//https://api.themoviedb.org/3/search/movie?api_key=4d633319499d7410ad444df482c8254e&language=pt_BR&query=Nemo&page=1&include_adult=false

// Retorno da API:
// {
// "page": 1;
// "results": [{}, {}],
// "total_results": 10000,
// "total_pages": 500,
// }

// erros:
// {
// "status_message": "Invalid API key: You must be granted a valid key.",
// "success": false,
// "status_code": 7
// }
// {
// "status_message": "The resource you requested could not be found.",
// "status_code": 34
// }
// {
// errors: [
// "query must be provided"
// ]
// }
