import { Button, Grid, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { obtenerPagina } from "../servicios/obtenerListadoPokemones";
import Pokemon from "./Pokemon";

function ListaPokemones() {
  const [pagina, setPagina] = useState(0);
  const [infoPokemons, setInfoPokemons] = useState([]);

  useEffect(() => {
    obtenerPagina(pagina).then((data) => {
      setInfoPokemons([...infoPokemons, ...data.results]);
    });
  }, [pagina]);

  return (
    <Stack padding={10} alignItems={"center"} paddingTop={40}>
      <Grid
        gridTemplateColumns={{
          sm: "1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr 1fr",
        }}
        gridGap={5}
      >
        {infoPokemons.length > 0 &&
          infoPokemons.map((pokemon, id) => {
            const { url } = pokemon;
            return <Pokemon url={url} key={id} />;
          })}
      </Grid>
      <Button w={200} onClick={() => setPagina(pagina + 1)}>
        Cargar mas pokemons
      </Button>
    </Stack>
  );
}

export default ListaPokemones;
