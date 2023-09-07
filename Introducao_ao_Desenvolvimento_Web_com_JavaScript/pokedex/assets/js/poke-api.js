const pokeApi = {}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url) //solicitando a url de detalhes dos pokemons
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))//transformando a lista de pokemon em lista dos detalhes dele
        .then((detailRequests) => Promise.all(detailRequests))//requsições dos detalhes do pokemon, esperando a solicitação terminar
        .then((pokemonDetails) => pokemonDetails)//quando terminada a solicitação mostra lista dos detalhes
}