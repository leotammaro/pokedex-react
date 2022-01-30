import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Paginas() {
  const [cantidadDePaginas, setCantidadDePaginas] = useState([]);

  const paginas = async () => {
    for (let i = 0; i < 44; i++) {
      await setCantidadDePaginas([...cantidadDePaginas, i]);
    }
  };

  useEffect(() => {
    paginas();
  }, []);

  return <Flex></Flex>;
}

export default Paginas;
