"use client"
import React, {ReactNode, useEffect, useRef, useState } from "react";

export type dropdownProps = {
  className?: any;
  children?: ReactNode[];
  title?: ReactNode | string;
  onChange: (selectedItem :string) => void;
};


export type itemProps = {
  className?: any;
  children?: string;
  id: string;
  defaultSelect?: boolean | false;
  onClick?: (id: string) => any;
}

function Dropdown({ className, children, title, onChange}: dropdownProps) {

  /* states */
  const [listVisible, setListVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState("")

  /* ref list */
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* styling */
  const containerPositionStyle = "fixed"

  const baseStyle = "rounded-full text-left border-2 border-blue-900";
  const hoverStyle = "hover:bg-gray-300";

  const listPositionStyle = "btn-group absolute right-0 items-center";
  const listColorStyle = "bg-blue-200 border-4 border-blue-900";
  const listShapeStyle = "mt-3 p-3 rounded-bl-3xl";
  const listArrowStyle = "absolute -top-2 right-1 z-0 transform rotate-45 p-2 bg-blue-200 text-white";
  const appearListStyle = "transition ease-out duration-200 translate-y-0 opacity-100";
  const disappearListStyle = "transition ease-out duration-200 -translate-y-3.5 opacity-0 pointer-events-none";

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

  /* functionality */

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if(dropdownRef.current?.contains(event.target)) {
        return
      }
      setListVisible(false)
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    
  }, [])
  
  // copy children and select by default the first one
  const Items = children?.map((child: any,  index) => {
    const {id, defaultSelect} = child.props;

    return React.cloneElement(child, {
      key: index,
      id: id,
      defaultSelect: defaultSelect ? defaultSelect : false,
      onClick: (id: string) => setSelectedItem(id),
    });
  })

  // set default choice, if exists
  useEffect(() => {
    const defaultItem = Items?.find((item) => item.props.defaultSelect === true);
    
    if (defaultItem) {
      setSelectedItem(defaultItem.props.id)
    }

    return () => {
      setSelectedItem("");
    }
  }, [children])

  // pass the change to the parent
  useEffect(() => {
    onChange(selectedItem);
  }, [selectedItem])

  

  return (
    <div ref={dropdownRef} className={`${containerPositionStyle} ${className}`}>
      <button
      className={`${dropdownStyles}`}
      onClick={() => setListVisible(!listVisible)}>
        {title}
      

      </button>

      <div className={`${listStyles}`}>

       <div className={`${listArrowStyle}`}/>
       {Items}

      </div>
    
    </div>
  );
}

function Item({ className, children, id, defaultSelect, onClick }: itemProps) {

  // styling
  const colorStyle = "border-full rounded-none "
  const shapeStyle = "w-full object-center p-1 m-1"
  const hoverStyle = "hover:bg-blue-400 text-blue-900 hover:rounded-2xl ";

  const itemStyles = [
    hoverStyle,
    shapeStyle,
    colorStyle,
  ].join(" ")

  const onItemClick = () => {
    onClick && onClick(id)
  }

  return (
    <button id={id} defaultChecked={defaultSelect} className={itemStyles} onClick={onItemClick}>
        {children}
    </button>
  );
}

Dropdown.Item = Item;

export default Dropdown;
