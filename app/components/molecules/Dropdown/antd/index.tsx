import React from 'react';
import { Dropdown as AntdDropdown } from 'antd'

function Dropdown(props:any) {
    return (
        <AntdDropdown {...props}>
            <>
                {props.children}
            </>
        </AntdDropdown>
    )
}

export default Dropdown