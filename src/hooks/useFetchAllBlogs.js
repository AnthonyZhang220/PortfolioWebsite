import { useEffect, useState } from "react"

function useFetchAllBlogs() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allTags, setAllTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(new Set(allTags));

  const getAllTags = (articles) => {
    const newSet = new Set();
    articles.forEach((article) => {
      article.tag_list.forEach((tag) => {
        newSet.add(tag)
      })
    })
    return Array.from(newSet)
  }

  const tagFilter = (tag) => {
    const set = new Set(selectedTags)
    if (set.has(tag)) {
      set.delete(tag)
    } else {
      set.add(tag)
    }

    setSelectedTags(set)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://dev.to/api/articles?username=anthonyzhang220";
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
        setAllTags(getAllTags(data))
        setSelectedTags(new Set(getAllTags(data)))
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

  const filteredData = data ? data.filter((article) => {
    const articleTags = new Set(article.tag_list);
    return Array.from(selectedTags).some((tag) => articleTags.has(tag));
  })
    : [];

  return { blogList: filteredData, allTags, selectedTags, tagFilter, loading, error }
}

export default useFetchAllBlogs