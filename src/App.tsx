import React, {FC} from 'react';
import MoviesPage from "./Pages/MoviesPage/MoviesPage";
import {Navigate, Route, Routes} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import MoviesListCard from "./components/MoviesListCard/MoviesListCard";
import UserRegistration from "./components/UserRegistration/UserRegistration";

const App: FC = () => {

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Navigate to={"movies/1"}/>}/>
                    <Route path={'/user'} element={<UserRegistration/>}/>
                    <Route path={"movies/:id"} element={<MoviesPage/>}/>
                    <Route path={"movies/:id/details"} element={<MoviesListCard/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
