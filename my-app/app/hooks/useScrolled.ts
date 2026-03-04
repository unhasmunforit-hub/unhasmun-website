"use client";
import { useState, useEffect } from "react";

/**
 * Custom hook that returns true when the page has been scrolled past a threshold.
 */
export function useScrolled(threshold = 20): boolean {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > threshold);
        };
        handleScroll(); // check initial state
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return isScrolled;
}
