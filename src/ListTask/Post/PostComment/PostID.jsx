import {useNavigate, useParams, Outlet} from "react-router-dom";
import {useLoad} from "../../../Hooks/useLoad";
import PostService from "../../../API/PostService";
import {useEffect, useState} from "react";
import Load from "../../../Component/Load/Load";
import MyModal from "../../../Component/MyModal/MyModal";
import MyButton from "../../../Component/Button/MyButton";
import Comment from "./Comment/Comment";
import css from './PostId.module.css'


const PostID = () => {
    const navigate = useNavigate()
    const PostPathID = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [modalActive, setModal] = useState(true)

    const [postLoad, load, error] = useLoad(async (id) => {
            console.log(PostPathID.id, 'post')
            const Post = await PostService.getPostID(id)
            setPost(Post.data)
        }
    )
    const [commentLoad, loadStatusComment, errorComment] = useLoad(async (id) => {
            const Comment = await PostService.getCommentID(id)
            if (!loadStatusComment) setComment(Comment.data)
            console.log(Comment, id)
        }
    )

    console.log(comment, 'comment')
    console.log(loadStatusComment)

    useEffect(() => {
        postLoad(PostPathID.id)
        commentLoad(PostPathID.id)
    }, [])

    return (
        <MyModal
            modalActive={modalActive}
            setModalActive={setModal}>
            <div>
                <div className={css.containerButton}>
                    <MyButton onClick={() => navigate(-1)}>Close</MyButton>
                </div>
                {load ?
                    <Load/> :
                    <h1>{post.title}</h1>
                }

                {loadStatusComment
                    ? <Load/>
                    : comment.length ? comment.map(comment => (
                            <Comment comment={comment} key={comment.id}/>))
                        : <h5>Комментариев нет</h5>

                }
                <Outlet/>
            </div>
        </MyModal>

    )
}

export default PostID