import { useState, useEffect, useCallback } from "react"

function useBlogScrollProgress() {
    const [progress, setProgress] = useState(null)

    const getScrollPercent = () => {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    }

    const handleScroll = useCallback(() => {
        setProgress(getScrollPercent);
    }, []);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [handleScroll])

    return { progress }
}

export default useBlogScrollProgress