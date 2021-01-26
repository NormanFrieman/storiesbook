import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiPocket, FiHome, FiLogOut, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./style.css";

import ProfileOptions from "../../components/profileOptions/profileOptions";
import ProfileInfos from "../../components/profileInfos/profileInfos";

import Featured from "../../components/featured/featured";
import NewStory from "../../components/newStory/newStory";

import userAvatar from "../../assets/user_avatar.svg";
import plusCircle from "../../assets/plus-circle.svg";

export default function MainScreen(){
    const [storyIndex, setStoryIndex] = useState(0);
    const history = useHistory();

    function changePage(page){
        history.push(`/${page}`);
    };

    const user = {
        name: "Norman Frieman",
        nickname: "normanfrieman",
        url: userAvatar,
        info: {
            posts: 12,
            followers: 3500,
            following: 1278
        }
    };

    const stories = [
        {
            key: 1,
            url: "https://imagens.canaltech.com.br/empresas/638.400.jpg",
            new: "instagram image",
            title: "instagram"
        },
        {
            key: 2,
            url: "https://s2.glbimg.com/KUW1NE0RIb08XgLeC4oTDe4z138=/90x90/s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png",
            new: "google image",
            title: "google"
        }
    ];

    const story = [
        {
            title: "user",
            url: userAvatar,
            date: "15:26"
        },
        {
            title: "instagram",
            url: "https://imagens.canaltech.com.br/empresas/638.400.jpg",
            date: "17:26"
        }
    ];

    function updateStoryIndex(value){
        if(storyIndex === 0 && value === -1){
            setStoryIndex(story.length - 1);
            return;
        }
        if(storyIndex+1 === story.length && value === 1){
            setStoryIndex(0);
            return;
        }
        
        setStoryIndex(storyIndex + value);
    };

    function showStory(value){
        setStoryIndex(value - 1);
    };

    function openWindow(){
        document.querySelector(".offBackground").style.display = "block";
    };

    return(
        <div className="container">
            <NewStory />
            <div className="profileSection">
                <div className="profileStoriesbook">
                    <p className="logo"><FiPocket/></p>
                    <p>Storiesbook</p>
                </div>
                <div className="profileImg">
                    <img src={user.url} new="user image" />
                    <div className="profileNames">
                        <p className="title">{user.name}</p>
                        <p className="info">{user.nickname}</p>
                    </div>
                </div>
                <ProfileInfos posts={user.info.posts} followers={user.info.followers} following={user.info.following} />
                <ProfileOptions name="Feed" feather={FiHome} activate="activate" />
                <div onClick={() => changePage("")}>
                    <ProfileOptions name="Logout" feather={FiLogOut} />
                </div>
            </div>
            <div className="featuredSection">
                <p className="pHeader">New Story</p>
                <div onClick={() => openWindow()}>
                    <Featured
                        url={plusCircle}
                        new="new story"
                        title="Create a new story"
                        info=""
                    />
                </div>
                <p className="pHeader">Featured Stories</p>
                {stories.map(story => (
                    <div key={story.key} onClick={() => showStory(story.key)}>
                        <Featured
                            url={story.url}
                            new={"story"}
                            title={story.title}
                            info="stories"
                        />
                    </div>
                ))}
            </div>
            <div className="storySection">
                <div className="storySection-header">
                    <p className="title">{story[storyIndex].title}</p>
                    <p>Publicado em {story[storyIndex].date}</p>
                </div>
                <div className="storySection-story">
                    <p onClick={() => updateStoryIndex(-1)}><FiChevronLeft /></p>
                    <img src={story[storyIndex].url} new={story[storyIndex].new} />
                    <p onClick={() => updateStoryIndex(1)}><FiChevronRight /></p>
                </div>
            </div>
        </div>
    );
}