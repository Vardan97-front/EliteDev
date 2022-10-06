import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

const AppRouts = lazy(() => import("./routes"));

function App() {
    return (
        <Suspense fallback={ <div>...Loading</div> }>
            <div>
                <Router>
                    <AppRouts />
                </Router>
            </div>
        </Suspense>
    );
}

export default App;