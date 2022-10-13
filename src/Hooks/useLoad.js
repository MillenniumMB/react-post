import {useState} from "react";

export const useLoad = (callback) => {
    const [inLoader, setLoader] = useState(false)
    const [error, setError] = useState('')

    const load = async (...args) => {
        try {
            setLoader(true)
            await callback(...args)
        } catch (e) {
            setError(e)
        } finally {
            setLoader(false)
        }
    }

    return [load, inLoader, error]
}