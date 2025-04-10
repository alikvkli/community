import React from "react";

const Icon = ({
    children,
    size = 'w-6 h-6',
    color = '',
    className = ''
}: {
    children: React.ReactNode,
    size: string,
    color?: string,
    className?: string
}) => {
    return (
        <svg className={`${size} ${color} fill-current ${className}`}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {children}
        </svg>
    )
}

export default Icon;