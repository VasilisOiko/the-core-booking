import {ReactNode, useState } from "react";

export type dropdownProps = {
  className?: any;
  children?: ReactNode;
  title?: ReactNode | string;
};


export type itemProps = {
  className?: any;
  children?: ReactNode;
  onClick?: () => void;
}

function Dropdown({ className, children, title, }: dropdownProps) {

  const [listVisible, setListVisible] = useState(false);
  
  const containerPositionStyle = "fixed"

  const baseStyle = "rounded-full text-left border-2 border-blue-900";
  const hoverStyle = "hover:bg-gray-300";

  const listPositionStyle = "btn-group absolute right-0 items-center";
  const listColorStyle = "bg-blue-200 border-4 border-blue-900";
  const listShapeStyle = "mt-3 p-3 rounded-bl-3xl";
  const listArrowStyle = "absolute -top-2 right-1 z-0 transform rotate-45 p-2 bg-blue-200 text-white";
  const appearListStyle = "transition ease-out duration-200 translate-y-0 opacity-100";
  const disappearListStyle = "transition ease-out duration-200 -translate-y-3.5 opacity-0";

  const dropdownStyles = [
    baseStyle,
    hoverStyle,
  ].join(" ");

  const listStyles = [
    listPositionStyle,
    listColorStyle,
    listShapeStyle,
    listVisible ? appearListStyle : disappearListStyle,
  ].join(" ");

  return (
    <div className={`${containerPositionStyle} ${className}`}>
    <button
    className={`${dropdownStyles}`}
    onClick={() => setListVisible(!listVisible)}>
      {title}
     

    </button>

      <div className={`${listStyles}`}>
       <div className={`${listArrowStyle}`}/>
       {children}
      </div>
    
    </div>
  );
}

function Item({ className, children, onClick }: itemProps) {

  const colorStyle = "border-full rounded-none "
  const shapeStyle = "w-full object-center p-1 m-1"
  const hoverStyle = "hover:bg-blue-400 text-blue-900 hover:rounded-2xl ";

  const itemStyles = [
    hoverStyle,
    shapeStyle,
    colorStyle,
  ].join(" ")

  return (
    <button
    className={itemStyles}
    >
        {children}

    </button>
  );
}

Dropdown.Item = Item;

export default Dropdown;
