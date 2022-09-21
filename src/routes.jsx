import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import {OurMenu} from "./components/OurMenu";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component={OurMenu}  path="/our-menu"/>
       </BrowserRouter>
   )
}

export default Routes;