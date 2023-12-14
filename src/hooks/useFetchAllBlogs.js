import { useEffect, useState } from "react"

function useFetchAllBlogs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allTags, setAllTags] = useState([]);

  const getAllTags = (articles) => {
    const newSet = new Set();
    articles.forEach((article) => {
      article.tag_list.forEach((tag) => {
        newSet.add(tag)
      })
    })
    return Array.from(newSet)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dev.to/api/articles?username=anthonyzhang220";
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
        setAllTags(getAllTags(data))
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

  return { blogList: data, allTags, loading, error }
}

export default useFetchAllBlogs