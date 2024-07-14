import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { Inicio } from "./pages/inicio";
import { Main } from "./pages/main";
import { Profile } from "./component/Profile/profile";
import { Characters } from "./pages/characters";
import { Episodes } from "./pages/episodes";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>  

                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Inicio />} path="/inicio" />

                        <Route element={<Profile />} path="/profile" />
                    
                        
                        <Route element={<Main />} path="/main">
                            <Route element={<Characters />} path="characters" />
                            <Route element={<Episodes />} path="episodes" />
                        </Route>
                    </Routes>
                    
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
