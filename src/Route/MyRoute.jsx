import {Route, Routes, useLocation} from "react-router-dom";
import TasksWindow from "../ListTask/Posts";
import PostID from "../ListTask/Post/PostComment/PostID";
import About from "../Page/About/About";
import React from "react";



const MyRoute = () => {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <div>

            <Routes location={background || location}>
                <Route path="/post" element={<TasksWindow/>}/>
                <Route path="post/:id" element={<PostID/>}/>
                <Route path="/" element={<About/>}/>
                <Route
                    path="*"
                    element={<About/>}
                />
            </Routes>

            {background && (
                <Routes>
                    <Route path="/post/:id" element={<PostID />} />
                </Routes>
            )}

        </div>
    )
}

export default MyRoute