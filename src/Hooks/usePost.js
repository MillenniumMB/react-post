import {useMemo} from "react";


export const useSortedPost = (post, selectedSort) => {
    const SortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...post].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        } else return post
    }, [selectedSort, post])

    return SortedPosts
}

export const usePosts = (post, sort, search) => {
    const SortedPost = useSortedPost(post, sort)

    const SortedAndSearch = useMemo(() => {
        return [...SortedPost].filter(postValue => postValue.title.toLowerCase().includes(search)
            || postValue.body.toLowerCase().includes(search))
    }, [search, SortedPost]);

    return SortedAndSearch
}