import { useEffect, useState } from "react";

//Creates a "scroll to top" button whenever user is beneath a certain y-axis on the page
function ScrollToTop() {

    const [scrollToTop, setScrollToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100
                ? setScrollToTop(true)
                : setScrollToTop(false)
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {
                scrollToTop && (
                    <img src="/upIcon.svg" width={30} onClick={scrollUp} style={{
                        position: "fixed",
                        bottom: "50px",
                        right: "50px",
                        cursor: "pointer"
                    }} />
                )
            }
        </div>
    );
}

export default ScrollToTop;