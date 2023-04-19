import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Store from '../pages/store';
import UploadListing from '../pages/uploadphoto';

const SiteRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Store />} />
            <Route exact path='/uploadListing' element={<UploadListing />} />
        </Routes>
    );
}

export default SiteRoutes;