import React from "react";

import Rotas from "./routes/Routes";
import LeftBar from "./components/LeftBar/LeftBar";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <>
      <LeftBar />
      <TopBar />
      <Rotas />
    </>
  );
};

export default App;
