import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { HeaderProps } from '../../../../types';


export const HeaderTable = (props: HeaderProps ) => {
 
    return (
        <div className="flex justify-content-end mb-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={props.value} onChange={props.handleFilterChange} placeholder="Keyword Search" />
                <Button className=" p-button-success p-button-outlined ml-2" label={`Agregar ${props.lableButton}`} icon="pi pi-plus"  onClick={props.onClickButton}  />
            </span>
        </div>
    );

}