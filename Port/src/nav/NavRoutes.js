import React from "react";
import { Routes, Route } from "react-router-dom";
import Theme1 from "../themes/Theme1";
import Theme2 from "../themes/Theme2";
import Theme3 from "../themes/Theme3";
import Theme4 from "../themes/Theme4";
import Theme5 from "../themes/Theme5";
import Theme6 from "../themes/Theme6";

function NavRoutes() {

  return (
      <Routes>
        <Route exact path="/theme1" element={<Theme1 />}/>
        <Route exact path="/theme2" element={<Theme2 />}/>
        <Route exact path="/theme3" element={<Theme3 />}/>
        <Route exact path="/theme4" element={<Theme4 />}/>
        <Route exact path="/theme5" element={<Theme5 />}/>
        <Route exact path="/theme6" element={<Theme6 />}/>
        <Route path="*" element={<Theme1 />} />
      </Routes>
  )
}

export default NavRoutes;