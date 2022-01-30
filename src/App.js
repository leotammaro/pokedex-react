import "./App.css";
import Home from "./componentes/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./componentes/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import InfoPokemon from "./componentes/InfoPokemon";
import { themeColors } from "./servicios/colors";

function App() {
  return (
    <ChakraProvider theme={themeColors}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":pokemonId" element={<InfoPokemon />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}

export default App;
