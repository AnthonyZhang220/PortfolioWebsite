import gsap from "gsap";


function useBackToTop() {
    const backToTop = () => {
        gsap.to(window, { scrollTo: { y: 0 } });
    }

    return { backToTop }
}

export default useBackToTop