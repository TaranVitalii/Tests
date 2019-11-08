import React from "react";
import { AppHeader } from "./components/Header";
import { HeaderDrawer } from "./components/Drawer";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <div className="App">
      <Box component="span" m={1}>
        <AppHeader />
        <HeaderDrawer />
      </Box>
    </div>
  );
}

export default App;
