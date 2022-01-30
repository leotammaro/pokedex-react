export async function getPokemonDataByURL(url) {
  return await fetch(url).then((response) => response.json());
}

export async function getPokemonDataByID(id) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
    (response) => response.json()
  );
}

export const obtenerPagina = async (pagina) => {
  let offset = pagina * 20;
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${20}&offset=${offset}`
  ).then((response) => response.json());
};
