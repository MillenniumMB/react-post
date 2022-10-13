import React from "react";
import Post from "./Post";
import css from "./PostsList.module.css"


const PostList = ({searchPost, RemovePost, postCount}) => {
    return (
        <div>
            {searchPost.length
                ? <div>
                    <h1 className={css.header}>Список постов</h1>
                    {searchPost.map((post, number) => (
                        <Post id={postCount+number + 1} post={post} RemovePost={RemovePost} key={post.id} location={post.location}/>))}
                </div> :
                <h1 className={css.header}>Постов нет</h1>
            }
        </div>
    )

};

export default PostList