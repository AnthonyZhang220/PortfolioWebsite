import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";


const supabaseUrl = "https://rwiqzdgvyuezupoxelra.supabase.co"
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

function useSupabaseClient() {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const [data, setData] = useState({ like: 0, fav: 0 })
    const [error, setError] = useState(null)
    const [liked, setLiked] = useState(false);
    const [faved, setFaved] = useState(false);


    useEffect(() => {
        const getCount = async () => {
            const { count: likeCount, error: likeError } = await supabase.from("like").select("*", { count: "exact", head: true })
            setData((prevData) => ({ ...prevData, like: likeCount }))
            if (likeError) {
                setError({ message: likeError.message + " like count. Please contact me at anthonyzhang1997@gmail.com." })
            }

            const { count: favCount, error: favError } = await supabase.from("fav").select("*", { count: "exact", head: true })

            setData((prevData) => ({ ...prevData, fav: favCount }))
            if (favError) {
                setError({ message: favError.message + " favorite count. Please contact me at anthonyzhang1997@gmail.com." })

            }
        };

        getCount()
    }, [])

    const incrementUpdate = async (type) => {
        const like = Cookies.get("like");
        const fav = Cookies.get("fav");

        if (like && type === "like") {
            setLiked(true);
            setError({ message: "You can only leave a like once!" })
            return;
        }

        if (fav && type === "fav") {
            setFaved(true);
            setError({ message: "You can only leave a heart once!" })
            return;
        }
        const { error } = await supabase.from(type).insert({})

        if (!error) {
            Cookies.set(type, true, { expires: 365 })
            setData((prevData) => (
                { ...prevData, [type]: prevData[type] + 1 }
            ))
        } else {
            setError({ message: "Like and Fav count" + error.message }
            )
        }
    }

    return { data, error, incrementUpdate, liked, faved }
}

export default useSupabaseClient