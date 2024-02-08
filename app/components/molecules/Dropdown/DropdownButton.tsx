"use client"
import React, {ReactNode} from 'react'

export type dropdownButtonProps = {
    className?: any;
    children?: ReactNode;
    title?: ReactNode | string;
  };

function DropdownButton({ className, children, title, }: dropdownButtonProps) {

    const baseStyle = "rounded-full text-left border-2 border-blue-900";
    const hoverStyle = "hover:bg-gray-300";

    const listPositionStyle = "btn-group absolute right-0 items-center";
    const listColorStyle = "bg-gray-200 border-4 border-blue-900";
    const listShapeStyle = "mt-3 p-2 rounded-bl-3xl";
    const listArrowStyle = "absolute -top-2 right-1 z-0 transform rotate-45 p-2 bg-gray-200 text-white";
    const appearListStyle = "transition-all duration-300 animate-pulse";

    const dropdownStyles = [
    baseStyle,
    hoverStyle,
    ].join(" ");

    const listStyles = [
    listPositionStyle,
    listColorStyle,
    listShapeStyle,
    // listVisible ? appearListStyle : "",
    ].join(" ");

    return (
        <button
        className={`${dropdownStyles} ${className}`}
        >
            {title}
            
            <div className={`${listStyles}`}>
            <div className={`${listArrowStyle}`}/>
            {children}
            </div>

        </button>
    );
}

export default DropdownButton