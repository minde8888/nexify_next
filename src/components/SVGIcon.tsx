import React from 'react';

interface SVGIconProps {
    className?: string; 
    style?: React.CSSProperties;
    svgProps?: React.SVGProps<SVGSVGElement>; 
    children: React.ReactNode;
}

const SVGIcon: React.FC<SVGIconProps> = ({
    className = '',
    style = {},
    svgProps = {},
    children,
}) => {
    return (
        <svg
            className={`w-4 h-4 ${className}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            style={style}
            {...svgProps}
        >
            {children}
        </svg>
    );
};

export default SVGIcon;
