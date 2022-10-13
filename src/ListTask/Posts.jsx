import React, {useEffect, useState} from "react";
import FormPost from "./FormPost/FormPost";
import PostList from "./Post/PostsList";
import FilterPost from "./FilterPost/FilterPost";
import {usePosts} from "../Hooks/usePost";
import PostService from "../API/PostService";
import Load from "../Component/Load/Load";
import {useLoad} from "../Hooks/useLoad";
import {CountPage} from "../Utils/Page";
import {usePage} from "../Hooks/usePage";
import Pagination from "../Component/Pagination/Pagination";
import {useLocation} from "react-router-dom";
import css from "./Posts.module.css"


const PostsWindow = () => {
    let location = useLocation();
    const [post, setPost] = useState('')
    const [filter, setFilter] = useState({search: '', selectedSort: ''})
    const [modalActive, setModalActive] = useState(false)
    const [pageTotalCount, setPageTotalCount] = useState('')
    const [limitElementPage, setElementPage] = useState(10)
    const [activePage, setActivePage] = useState(1)
    const searchPost = usePosts(post, filter.selectedSort, filter.search)
    const arrayPages = usePage(pageTotalCount)


    const [getPosts, loadStatus, loadError] = useLoad(async () => {
        const post = await PostService.getAll(limitElementPage, activePage)
        setPost(post.data)
        setPageTotalCount(() => CountPage(post.headers['x-total-count'], limitElementPage))

    })

    const changePage = (number) => {
        console.log(number)
        setActivePage(number)
    }


    useEffect(() => {
        getPosts()
    }, [activePage])


    let AddPost = (newPost) => {
        setPost([...post, {...newPost, id: Date.now()}])
    }

    let RemovePost = (postRemove) =>
        setPost(post.filter(e => e.id !== postRemove.id))


    return (
        <div className={css.bodyPostPage}>
            <FormPost
                modalActive={modalActive}
                setModalActive={setModalActive}
                AddPost={AddPost}
            />
            <FilterPost
                filter={filter}
                setFilter={setFilter}/>

            {loadError &&
            <h1>Ошибка загрузки постов</h1>}
            {loadStatus ?
                <Load/>
                : <div>
                    <PostList searchPost={searchPost} RemovePost={RemovePost} postCount = {(activePage-1)*limitElementPage}/>
                    <Pagination arrayPages={arrayPages} activePage={activePage} changePage={changePage}/>
                </div>
            }

        </div>

    )

};

export default PostsWindow