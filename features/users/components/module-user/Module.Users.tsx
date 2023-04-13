import React, {  useRef, useState } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';
import { Toast } from 'primereact/toast';
import { TableUsers } from '../table-users/Table.User'
import { Module } from '../../../transversal/components'
import { fetcher } from '../../../../helpers/fetch'
import { useSearch } from '../../../transversal/hooks/useSearch'
import { User } from '../../types/index';
import { useFetch } from '../../../transversal/hooks/useFetch'
import { ParametersRequest } from '../../../../types/index';
import { FormUser } from '../form-user/FormUser'



export const ModuleUsers = (props: any) => {
    const toast = useRef<Toast>(null);
    const [showModal, setShowModal] = useState(false);
    const [userSelected, setUserSelected] = useState<User | null>(null);
    const { value, handleFilterChange } = useSearch();
    const { data, isLoading, hasError, getFetch } = useFetch({ endpoint: 'user', method: 'GET' })

    const requestUser = async (request: ParametersRequest) => {
        const resp = await fetcher(request);
        const data = await resp.json();
        setUserSelected(data);
        if (!data.error && request.method !== 'GET') {
            toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Se ha realizado el proceso con éxito ', life: 3000 });
            getFetch()
        }

        if (hasError && data.error) {
            toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error inténtalo de nuevot', life: 3000 });
        }

    }


    const handlerCrud = async (option: string, user?: User) => {
        let request = null
        switch (option) {
            case 'get':
                request = { endpoint: `user/${user?.id}`, method: 'GET' };
                await requestUser(request);
                break;
            case 'create':
                setShowModal(true);
                request = { endpoint: 'user/create', method: 'POST', data: user };
                await requestUser(request);
                break;
            case 'update':
                request = { endpoint: `user/${user?.id}`, method: 'PUT', data: user };
                await requestUser(request);
                break;
            case 'delete':
                request = { endpoint: `user/${user?.id}`, method: 'DELETE', data: user };
                await requestUser(request);
                break;
            default:
                break;
        }

    }

    return (
        <>
            {
                isLoading ? <ProgressSpinner /> :
                    <>
                        <Toast ref={toast} />
                        <Module title="Usuarios del sistema" value={value} handleFilterChange={handleFilterChange} lableButton='Usuario' onClickButton={() => { handlerCrud('create') }} >
                            <TableUsers userSelected={userSelected} data={data?.data} handlerCrud={handlerCrud} />
                            <FormUser showModal={showModal} toggleModal={() => { setShowModal(false) }} title='Crear' handlerCrud={handlerCrud} />
                        </Module>
                    </>
            }
        </>
    )

}
