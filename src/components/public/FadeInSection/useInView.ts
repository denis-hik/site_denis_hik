import {RefObject, useEffect, useRef, useState} from 'react';

type useInViewProps = {
    ref: RefObject<HTMLDivElement>,
    isVisible: boolean,
}

export default function useInView(options): useInViewProps  {
    const ref = useRef<HTMLDivElement>();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return {ref: ref as useInViewProps["ref"], isVisible};
}