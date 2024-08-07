import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";


const supabaseUrl = "https://rwiqzdgvyuezupoxelra.supabase.co"
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

function useSupabaseClient() {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [data, setData] = useState({ like: 0, fav: 0 })
    const [error, setError] = useState(null)


    useEffect(() => {
        const getCount = async () => {
            const { count: likeCount, error: likeError } = await supabase.from("like").select("*", { count: "exact", head: true })
            setData((prevData) => ({ ...prevData, like: likeCount }))
            setError(likeError)

            const { count: favCount, error: favError } = await supabase.from("fav").select("*", { count: "exact", head: true })

            setData((prevData) => ({ ...prevData, fav: favCount }))
            setError(favError)
        };

        getCount()
    }, [])

    const incrementUpdate = async (type) => {
        const like = Cookies.get("like");
        const fav = Cookies.get("fav");

        if (like && type === "like") {
            setError("You can only leave a like once!")
            return;
        }

        if (fav && type === "fav") {
            setError("You can only leave a heart once!")
            return;
        }
        const { error } = await supabase.from(type).insert({})

        if (!error) {
            Cookies.set(type, true, { expires: 365 })
            setData((prevData) => (
                { ...prevData, [type]: prevData[type] + 1 }
            ))
        } else {
            setError(error.message)
        }
    }

    useEffect(() => {
        console.log(error)
    }, [error])

    return { data, error, incrementUpdate }
}

export default useSupabaseClient