import { useState, useCallback } from 'react';

const useToggle = () => {
    const [bool, setBool] = useState<boolean>(false);

    const setTrue = useCallback(() => {
        setBool(true);
    }, []);

    const setFalse = useCallback(() => {
        setBool(false);
    }, []);

    const toggle = useCallback(() => {
        setBool((v) => !v);
    }, []);

    return { bool, setTrue, setFalse, toggle };
};

export default useToggle;