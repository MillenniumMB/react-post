import {useMemo} from "react";

export const usePage = (page) => {

    const Page = useMemo(() => {
        const arrayPage = []
        for (let i = 0; i < page; i++) {
            arrayPage.push(i + 1)
        }
        return arrayPage
    }, [page])

    return Page

}