import { useEffect, useState } from "react"

function useFetchAllBlogs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dev.to/api/articles?username=anthonyzhang220";
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
  }, [])

  return { blogList: data, loading, error }
}

export default useFetchAllBlogs