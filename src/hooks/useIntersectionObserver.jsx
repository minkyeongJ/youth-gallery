import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = ({ limitItem, setLimitItem }) => {
    const [observationTarget, setObservationTarget] = useState(null);
    const observer = useRef(
        new IntersectionObserver(
            ([entry]) => {
                //교차 상태가 아니라면
                if (!entry.isIntersecting) return;
                //교차 상태라면
                setLimitItem(limitItem + 5);
            },
            { threshold: 0 }
        )
    );

    useEffect(() => {
        const currentTarget = observationTarget;
        const currentObserver = observer.current;
        if (currentTarget) {
            currentObserver.observe(currentTarget);
        }
        return () => {
            if (currentTarget) {
                currentObserver.unobserve(currentTarget);
            }
        };
    }, [observationTarget]);

    return { setObservationTarget };
};

export default useIntersectionObserver;
