import React, { useRef, useState } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';

import { ModuleUsers, UserAvatar } from '../../../users/components';
import { DashboardProps,  } from '../../../users/types';


export const Dashboard = (props: DashboardProps) => {
    const { authenticatedUser } = props;
    const [optionMenu, setOptionMenu] = useState(<ModuleUsers />)




    return (
        <div>
            <nav className="navbar navbar-dark d-flex justify-content-between shadow-sm p-2  bg-white rounded">
                <h4 className="pl-3 text-success">Gestor de usuarios</h4>
                <Button icon="pi pi-sign-out" className='p-button-text p-button-success p-button-outlined' />
            </nav>
            <div className='d-flex bg-light p-4 vh-100' style={{ width: '100%' }}>
                <div className='card p-4 vh-100 'style={{ width: '20%' }}>
                    <UserAvatar url={authenticatedUser.url} firstName={authenticatedUser.firstName} lastName={authenticatedUser.lastName} />
                    <hr className='w-100'/>
                    <Button icon="pi pi-users" className='p-button-secondary text-dark p-button-text  font-bold p-button-outlined' label='Usuaraios' />
                </div>
                {optionMenu}
            </div>
          
        </div>
    );

}