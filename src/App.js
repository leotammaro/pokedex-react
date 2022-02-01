import "./App.css";
import Home from "./componentes/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./componentes/Navbar";
import { Route, Routes, Router } from "react-router-dom";
import InfoPokemon from "./componentes/InfoPokemon";
import { themeColors } from "./servicios/colors";

function App() {
  return (
    <ChakraProvider theme={themeColors}>
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":pokemonId" element={<InfoPokemon />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
