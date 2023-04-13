import React, { useEffect, useState } from 'react';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Table } from '../../../transversal/components/data-table/table';
import { useFetch } from '../../../transversal/hooks/useFetch';
import { UserAvatar } from '../user-avatar/UserAvatar';
import { UserModal } from '../user-modal/UserModal';

import { fetcher } from '../../../../helpers/fetch';
import { FormUser } from '../form-user/FormUser';
import { ModalConfirmation } from '../../../transversal/components';



const UserModalHandler = {
    user: false,
    update: false,
    delete: false,
}


export const TableUsers = (props: any) => {

    const { data, handlerCrud, userSelected } = props
    const [modalHandler, setModalHandler] = useState(UserModalHandler);
    const [selectedUsers, setSelectedUsers] = useState(null);



    const toggleModal = (option: string) => {
        setModalHandler({ ...modalHandler, [option]: false });
    };

    const handlerModal = async (option: string, row: any) => {
        await handlerCrud('get', row);
        if (userSelected) {
            setModalHandler({ ...modalHandler, [option]: true });
        }
    };

    const userBodyTemplate = (rowData: any) => {
        return <UserAvatar url={rowData.picture} />
    };

    const actionsBodyTemplate = (rowData: any) => {
        return <div>
            <Button icon="pi pi-trash" className='p-button-text p-button-success p-button-outlined' onClick={() => { handlerModal('delete', rowData) }} />
            <Button icon="pi pi-user-edit" className='p-button-text p-button-success p-button-outlined' onClick={() => { handlerModal('update', rowData) }} />
            <Button icon="pi pi-eye" className='p-button-text p-button-success p-button-outlined' onClick={() => { handlerModal('user', rowData) }} />
        </div>
    }

    const columns = [
        <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>,
        <Column field="id" header='Id' />,
        <Column field="firstName" header="Nombre" />,
        <Column field="lastName" header="Apellido" />,
        <Column header='Perfil' body={userBodyTemplate} />,
        <Column header='Acciones' body={actionsBodyTemplate} />,
    ];

    return (
        <>
            <Table rows={10} rowsPageOptions={[5, 10, 25]} data={data} dataKey="id" columns={columns} selection={selectedUsers} onSelection={(e: any) => setSelectedUsers(e.value)} />
            <UserModal showModal={modalHandler.user} toggleModal={() => { toggleModal('user') }} user={userSelected} />
            <FormUser showModal={modalHandler.update} toggleModal={() => { toggleModal('update') }} user={userSelected} title='Actualizar' handlerCrud={handlerCrud} />
            <ModalConfirmation showModal={modalHandler.delete} toggleModal={() => { toggleModal('delete') }} user={userSelected} title='Eliminar usuario' text='Estas seguro que de eliminar el usuario' confirmation={()=>{handlerCrud('delete', userSelected)}}/>
        </>
    );
}