'use client'
import { toggleTheme } from "@/lib/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/useRedux";
import { RootState } from "@/lib/store";
import React from "react";

const ThemeToggle = () => {
    const currentTheme = useAppSelector((state : RootState) => state.theme.currentTheme);
    const dispatch = useAppDispatch();
    return (
        <div>
            <p>Current theme: {currentTheme}</p>
            <button onClick={() => dispatch(toggleTheme())}>
                Update theme color
            </button>
        </div>
    );
};

export default ThemeToggle;