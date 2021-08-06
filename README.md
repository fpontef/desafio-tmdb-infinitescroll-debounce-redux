# Desafio front-end com api do TMDB

> Este desafio foi proposto para candidatos selecionados no processo da AgendaEdu,
> Não fui um candidato, mas achei interessante não ter nada do tipo, então resolvi
> adotar como um projeto para treinar que não consuma tanto tempo.

### Link:

Versão online disponibilizada via GHPages:
https://fpontef.github.io/desafio-tmdb-infinitescroll-debounce-redux/

### Aspectos do projeto:

- React, Redux/Thunk e Hooks
- .env para armazenar a chave da API e URL
- Infinte Scroll com uso o IntersectionObserver API via hooks personalizado.
- Busca a partir de digitação do termo, com debounce para evitar excesso de
  requisições na API, debounce via middlware personalizado do redux.

Obs: A mensagem de erro ficou para outros aspectos, pois desde 2019 a API não tem
limita as requisições conforme link:
https://developers.themoviedb.org/3/getting-started/request-rate-limiting

### Requisitos não obrigatórios que não foram incluídos:

- Testes unitários.

# Desafio

Nosso líder técnico deseja usar uma aplicação que liste os filmes mais populares do momento, para isso você deverá consumir a **API** do [TheMovieDB][tmdb-api-url], para essa aplicação será necessário na tela inicial mostrar uma listagem dos filmes mais populares, os mais populares sendo exibidos no topo da lista, utilizar o mecanismo de paginação fornecido pela **API**.

Cada item da lista deve levar para uma página de detalhes do filme, aonde deve ser mostrado todos os atributos importantes do filme, como por exemplo: `title`, `description`, `rating`, `etc`.

Deve ser possível realizar pesquisa por filmes em qualquer tela, a request de pesquisa deve ser disparada utilizando o processo de controle de fluxo **Debounce​** com um limite de tempo de **500ms**, esse controle deve ser feito devido ao limite de requests por segundo que a **API** impõe.

Sobre a limitação de requests por segundo da **API** do [TheMovieDB][tmdb-api-url], esse limite deve ser tratado e deve ser exibido um feedback visual não invasivo para o usuário indicando que não foi possível realizar a operação devido a limitação da **API** e solicite que ele tente novamente em alguns segundos.

## Requisitos

- Use React
- Necessário o uso de rotas

## Requisitos bônus

**Esses requisitos não são obrigatórios, mas serão levados em consideração como pontos extras no momento da avaliação.**

- Boa qualidade de UI/UX
- Usar Redux.
- Baixo tempo de renderização
- Renderização de listas on-demand, e.g: Dado que a lista tem 100 items, não renderizar a lista completa, renderizar apenas os items visíveis na tela e alguns extras para evitar engasgos de scroll.
- Testes unitários e.g: [Jest][jest-url]

[tmdb-api-url]: https://www.themoviedb.org/documentation/api
[reactjs-url]: https://reactjs.org/
[jest-url]: https://facebook.github.io/jest/
[github-url]: https://github.com
