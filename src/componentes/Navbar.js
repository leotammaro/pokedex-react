import { Flex, Image, Input, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link as ReachLink } from "react-router-dom";

function Navbar() {
  const [inputValue, setInputValue] = useState("");

  const idPokemon = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Flex
      bg={"#313131"}
      h={100}
      w={"100vw"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={10}
      position={"fixed"}
    >
      <Link to="/" as={ReachLink}>
        <Image
          h="40px"
          w="40px"
          src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png"
        />
      </Link>
      <Flex>
        <Input onChange={idPokemon} w={40} bg="#fff" focusBorderColor="none" />
        <Link to={`${inputValue}`} as={ReachLink} color={"#fff"}>
          Buscar Pokemon
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
