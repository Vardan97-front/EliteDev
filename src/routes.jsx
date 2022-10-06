import React, { Suspense } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from "./pages/home";
import Pokemon from './pages/pokemon'

function Index() {
    return (
        <Suspense
            fallback={
                <div
                    style={ {
                        color: "#fff",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                    } }
                >
                    Loading...
                </div>
            }
        >
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/:id" element={<Pokemon />} />
            </Routes>
        </Suspense>
    );
}

export default Index;