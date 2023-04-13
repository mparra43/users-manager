import React from 'react'
import { HeaderTable } from '../header-table/HeaderTable'
import { ModuleProps } from '../../../../types'



export const Module = (props: ModuleProps) => {

    return (
        <div className='card p-4 ml-4' style={{ width: '75%' }}>
            <h5 className="pl-3 text-success">{props.title}</h5>
            <HeaderTable value={props.value} handleFilterChange={props.handleFilterChange} lableButton={props.lableButton} onClickButton={props.onClickButton}/>
            {props.children}
        </div>
    )

}
