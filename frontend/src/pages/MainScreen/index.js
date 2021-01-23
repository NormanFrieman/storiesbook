import React from "react";
import { FiHome, FiUsers, FiSettings } from "react-icons/fi";

import "./style.css";

import ProfileOptions from "../../components/profileOptions/profileOptions";
import ProfileInfos from "../../components/profileInfos/profileInfos";

import Featured from "../../components/featured/featured";

export default function MainScreen(){
    const info = {
        posts: 12,
        followers: 3500,
        following: 1278
    };

    return(
        <div className="container">
            <div className="profile">
                <ProfileInfos posts={info.posts} followers={info.followers} following={info.following} />
                <ProfileOptions name="Feed" feather={FiHome} />
                <ProfileOptions name="People" feather={FiUsers} />
                <ProfileOptions name="Settings" feather={FiSettings} />
            </div>
            <div className="featured">
                <Featured url="https://imagens.canaltech.com.br/empresas/638.400.jpg" new="instagram image" title="instagram" info="stories" />
            </div>
            <div className="story">

            </div>
        </div>
    );
}