import { Box, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getPokemonDataByID } from "../servicios/obtenerListadoPokemones";

function InfoPokemon() {
  const urlParams = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    getPokemonDataByID(urlParams.pokemonId).then(setPokemonData);
  }, [urlParams]);

  useEffect(() => {
    if (pokemonData && urlParams.pokemonId !== pokemonData.name) {
      history(`/${pokemonData.name}`);
    }
  }, [pokemonData]);

  console.log(pokemonData);

  return (
    <Flex h="100vh" justifyContent={"center"} alignItems={"center"}>
      {pokemonData && (
        <Stack spacing={10}>
          <Text fontSize={40}>{pokemonData.name}</Text>
          <Flex>
            <Image src={pokemonData.sprites.front_default} w={200} h={200} />
            <Grid
              bg={"#30a7d7"}
              padding={20}
              w={500}
              fontSize={20}
              gridTemplateColumns={"1fr 1fr"}
              gridTemplateRows={"1fr 1fr"}
              borderRadius={10}
            >
              <Box>
                <Text color={"#fff"}>Altura</Text>
                <Text>{pokemonData.height} m</Text>
              </Box>
              <Box>
                <Text color={"#fff"}>Habilidad</Text>
                <Text>{pokemonData.abilities[0].ability.name}</Text>
              </Box>
              <Box>
                <Text color={"#fff"}>Peso</Text>
                <Text>{pokemonData.weight} Kg</Text>
              </Box>
              <Box>
                <Text color={"#fff"}>Poder</Text>
                <Text>{pokemonData.base_experience} Kg</Text>
              </Box>
            </Grid>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Text fontSize={22}>Tipo</Text>
            <Flex>
              {pokemonData.types.map((type) => (
                <Text
                  key={type.slot}
                  bg={`${type.type.name}`}
                  fontSize={20}
                  w={100}
                  padding={2}
                  borderRadius={5}
                  margin={2}
                >
                  {type.type.name}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Stack>
      )}
    </Flex>
  );
}

export default InfoPokemon;
