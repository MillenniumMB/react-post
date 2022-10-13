import React from "react";
import classes from './Post.module.css'
import MyButton from "../../Component/Button/MyButton";
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Post = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    return(
        <div className={classes.post}>
            <div className={classes.description}>
                <div className={classes.NamePost}>
                    <h3>{props.id + " " +  props.post.title}</h3>

                </div>
                <div>{props.post.body}</div>
                <Link
                    className = {classes.LinkComment}
                    key={props.post.id}
                    to={{
                        pathname: `/post/${props.post.id}`,
                        state: { background: location }
                    }}
                >Open Comment</Link>
            </div>
            <div className={ classes.ButtonContainer}>
                <MyButton onClick={ () => props.RemovePost(props.post) }>Delete</MyButton>
            </div>
        </div>

    )

};

export default Post