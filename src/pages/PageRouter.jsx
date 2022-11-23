import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EmailJoin from '../components/join/EmailJoin';
import Login from '../components/login/Login';
import FollowersList from './FollowersList';
import FollowingsList from './FollowingsList';
import Home from './home/Home';
import NonFollowing from './NonFollowing';
import NotFound from './notFound/NotFound';
import Search from './search/Search';
import PostDetail from './postDetail/PostDetail';
import UserProfile from './userprofile/UserProfile';
import PostUpload from './postUpload/PostUpload';
import News from './news/News';
import SplashBase from '../components/splash/SplashBase';
import Splash from '../components/splash/Splash';
import JoinMembership from '../components/membership/JoinMembership';
import AddProduct from './addProduct/AddProduct';
import PostEdit from './postEdit/PostEdit';
import ProductEdit from './productEdit/ProductEdit';
import EditProfile from '../components/editProfile/EditProfile';

function PageRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<SplashBase />} />
            <Route path="/splash" element={<Splash />} />
            <Route path="/news" element={<News />} />
            <Route path="/post">
                <Route path="upload" element={<PostUpload />} />
                <Route path="edit/:post_id" element={<PostEdit />} />
            </Route>
            {/* 임시로 게시물 id 지정 
            나중에 /post/:id 로 넣으면됨*/}
            <Route path="/post/:username/:post_id" element={<PostDetail />} />
            <Route path="/myprofile" element={<UserProfile />} />
            <Route path="/myprofile/edit" element={<EditProfile />} />
            <Route path="/edit/product/:product_id" element={<ProductEdit />} />
            <Route path="/profile/:accountname" element={<UserProfile />} />
            <Route
                path="/profile/:accountname/followers"
                element={<FollowersList />}
            />
            <Route
                path="/profile/:accountname/followings"
                element={<FollowingsList />}
            />
            <Route path="/product" element={<AddProduct />} />
            <Route path="/search" element={<Search />} />
            {/* 나중에 페이지 만들면 수정해야함 */}
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<EmailJoin />} />
            <Route path="/membership" element={<JoinMembership />} />
            <Route path="/notFound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/nonFollowing" element={<NonFollowing />} />
        </Routes>
    );
}

export default PageRouter;
