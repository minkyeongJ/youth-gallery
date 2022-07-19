import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TabMenu from './TapMenu';
import FollowersList from '../../pages/FollowersList';
import FollowingsList from '../../pages/FollowingsList';

function TapMenuMove() {
    return (
        <>
            <Routes>
                <Route path="/" element={<TabMenu img={'homeImg'} />} />
                <Route path="/news" element={<TabMenu img={'newsImg'} />} />
                <Route
                    path="/post/upload"
                    element={<TabMenu img={'uploadImg'} />}
                />
                <Route path="/profile" element={<TabMenu img={'profileImg'} />}>
                    <Route path="followers" element={<FollowersList />} />
                    <Route path="followings" element={<FollowingsList />} />
                </Route>
            </Routes>
        </>
    );
}

export default TapMenuMove;