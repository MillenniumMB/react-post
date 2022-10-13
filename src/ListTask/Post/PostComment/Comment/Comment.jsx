import css from './Comment.module.css'

const Comment = ({comment}) => {
    return (

        <div key={comment.id} className={css.comment}>
            <div className={css.userNik}>
                <div className={css.userIcon}>{comment.email[0]} </div>
                <h4>{comment.email}</h4>
            </div>

            {console.log(comment, "comment")}
            {comment.name}
            {comment.body}
        </div>
    )
}

export default Comment
