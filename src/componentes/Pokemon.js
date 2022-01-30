import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonDataByURL } from "../servicios/obtenerListadoPokemones";

function Pokemon({ url }) {
  const [dataPokemon, setDataPokemon] = useState(null);
  useEffect(() => {
    getPokemonDataByURL(url).then(setDataPokemon);
  }, []);

  return (
    <Flex
      bg={"#fbfbfb"}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={5}
      minW={200}
      _hover={{ cursor: "pointer" }}
    >
      {dataPokemon && (
        <Link to={`/${dataPokemon.name}`}>
          <Text fontSize={20} fontWeight={"bold"}>
            {dataPokemon.name}
          </Text>
          <Image
            src={dataPokemon.sprites.front_default}
            w={{ sm: 100, md: 150, xl: 200 }}
          />
        </Link>
      )}
    </Flex>
  );
}

export default Pokemon;
