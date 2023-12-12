import { useEffect, useState } from "react"

function useFetchBlogById(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://dev.to/api/articles/${id}`
                const response = await fetch(url);
                const data = await response.json();
                setData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData();
    }, [id])

    return { blog: data, loading, error }
}

export default useFetchBlogById
