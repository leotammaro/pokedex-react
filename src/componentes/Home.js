import { Box } from "@chakra-ui/react";
import React from "react";
import ListaPokemones from "./ListaPokemones";

function Home() {
  return (
    <Box data-testid="home">
      <ListaPokemones />
    </Box>
  );
}

export default Home;
