import { useState } from "react";

const useMobileView = (query = '(max-width: 640px)') => {
    const [isMobile, setIsMobile] = useState(false);
    const matchQuery = () => {
        const queryList = window.matchMedia(query);
        setIsMobile(queryList.matches);
        const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsMobile(e.matches);
        queryList.addEventListener('change', handleChange);
        return () => queryList.removeEventListener('change', handleChange);
    };

    useState(() => {
        matchQuery();
        return () => matchQuery(); 
    });

    return isMobile;
};

export default useMobileView;