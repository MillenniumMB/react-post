import React, {useState} from "react";
import MyButton from "../../Component/Button/MyButton";
import MyInput from "../../Component/MyInput/MyInput";
import MyModal from "../../Component/MyModal/MyModal";


const FormPost= (props) => {

    const [newPost, setNewPost] = useState({title: '', body: ''});

    let AddPost = (e) => {
        e.preventDefault() //убирает перезагрузку дефолтную
        props.AddPost(newPost)
        setNewPost({title: '', body: ''})
        props.setModalActive(false)
    }

    let OpenModal = (e) => {
        e.preventDefault()
        props.setModalActive(true)
    }

    return (
            <div>
                <form>
                    <MyModal
                        modalActive = {props.modalActive}
                        setModalActive = {props.setModalActive}>
                        <MyInput value={newPost.title}
                                      onChange={e => setNewPost({...newPost, title: e.target.value})}
                                      placeholder='Название поста'/>
                        <MyInput value={newPost.body}
                                 onChange={e => {
                                     setNewPost({...newPost, body: e.target.value})
                                 }}
                                 placeholder='Пост'/>
                        <MyButton onClick={AddPost} type='submit'> Add</MyButton>
                    </MyModal>
                    <MyButton onClick={OpenModal} type='submit'> New post</MyButton>
                </form>
            </div>


    )

};

export default FormPost