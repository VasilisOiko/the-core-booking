"use client"
import React, {ReactNode} from 'react'

export type itemProps = {
    className?: any;
    children?: ReactNode;
    onClick?: () => void;
  }

function DropdownItem({ className, children, onClick }: itemProps) {
    return (
      <button
      className={className}
      >
        {children}
      </button>
    );
  }

export default DropdownItem;