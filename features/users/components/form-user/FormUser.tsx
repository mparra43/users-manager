import React, { useState } from 'react';
import { useForm, } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Input, InputCalendar, Modal, Select, } from '../../../../shared/components';
import { FormUserProps, User } from '../../types';
import { genders } from '../../../transversal/constants';


const defaultValuesProps = {
    id: '',
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
    gender: '',
    email: '',
    dateOfBirth: '',
    phone: '',
}
export const FormUser = (props: FormUserProps) => {

    const { showModal, toggleModal, handlerCrud, user, title } = props;
    const defaultValues = title === 'Actualizar' ? user : {};


    const onSubmit = (data: any) => {
        const { gender, dateOfBirth, ...res } = data;


        if (title === 'Actualizar' && user) {
            handlerCrud('update', { ...res, id: user.id, gender: gender.key, dateOfBirth: new Date(dateOfBirth) });
            reset();
            toggleModal();
        }

        if (title === 'Crear') {
            handlerCrud('create', { ...res, gender: gender.key, dateOfBirth: new Date(dateOfBirth) });
            reset();
            toggleModal();
        }

    };

    const { control, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues });

    return (
        <Modal
            header={`${title} usuario`}
            visible={showModal}
            onHide={toggleModal}
            modal
            closer
            maximizable
            style={{ width: '50vw' }}
        >

            <div className="card p-4">
                <form onSubmit={handleSubmit(onSubmit)} >
                    {title === 'Actualizar' && <Input name='id' label='Id' error={errors} style={{ span: "p-float-label mb-2" }} value={user?.id} />}
                    <Input name='title' label='Titulo' control={control} error={errors} style={{ span: "p-float-label mb-2" }} rules={{ required: 'El titulo es  requiredo' }} value={title === 'Actualizar' && user?.title} />
                    <Input name='firstName' label='Nombres' control={control} error={errors} style={{ span: "p-float-label mb-2" }} rules={{ required: 'Nombres es requiredos' }} value={user?.firstName} />
                    <Input name='lastName' label='Apellidos' control={control} error={errors} style={{ span: "p-float-label mb-2" }} rules={{ required: 'Los apellidos  es requiredos' }} value={user?.lastName} />
                    <Input name='picture' label='Imagen' control={control} error={errors} style={{ span: "p-float-label mb-2" }} rules={{ required: 'La imagen es requireda' }} value={user?.picture} />
                    <Select name='gender' optionLabel='gender' control={control} error={errors} items={genders} placeholder='selecione un genero' value={user?.gender} />
                    <Input control={control} error={errors} name='email' label='Correo electrónico' value={user?.email} style={{ span: "p-float-label mb-2" }} rules={{ required: 'El email is requiredo', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'El correo es invalido. E.g. example@email.com' } }} />
                    <InputCalendar
                        style={{ span: 'p-float-label', input: { width: '100%' }, div: { width: '100%' }, styleSpan: { width: '100%' } }}
                        label='Fecha de nacimiento '
                        name='dateOfBirth'
                        value={user?.dateOfBirth}
                        control={control}
                        error={errors}
                        rules={{ required: 'La fecha de nacimiento es requerida ' }}
                    />
                    <Input control={control} error={errors} name='phone' value={user?.phone} label='Teléfono' style={{ span: "p-float-label" }} rules={{ required: 'El número de teléfono es requerido ' }} />
                    <div className="d-flex justify-content-end">
                        <Button label="Cancelar" className="p-button-secondary p-button-outlined mt-4" />
                        <Button type="submit" label="Guaradar" className="p-button-success p-button-outlined ml-2 mt-4" />
                    </div>
                </form>
            </div>
        </Modal>
    )
}

