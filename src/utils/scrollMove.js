import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    const scrolling = () => {
        setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        document.addEventListener("scroll",scrolling);
        return () => {
            document.removeEventListener("scroll",scrolling);
        }
    })
    return {scrollY};
}