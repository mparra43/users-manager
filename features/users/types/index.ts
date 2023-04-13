import { ReactElement } from 'react';
import { Dashboard } from '../../transversal/components/dashboard/Dashboard';


export interface ModalHandlerUsers {
    data: any,
    isLoading: boolean,
    hasError: any,
}

export interface FormUserProps {
    user?: User,
    showModal: boolean,
    toggleModal: ()=>void, 
    handlerCrud: (option:string ,data:User)=>void, 
    title:string,
}

export interface User {
    id: string,
    title: string,
    firstName: string,
    lastName: string,
    picture: string,
    gender: string,
    email: string,
    dateOfBirth:string,
    phone:string,
}

export interface AvatarUser {
    url:string;
    firstName?:string;
    lastName?:string;
}

export interface DashboardProps {
    authenticatedUser:AvatarUser
}

export interface MenuProps {
    label?:string
    icon?:string
    container:ReactElement
    command: ()=>void
}

export interface  ModalConfirmationProps  extends FormUserProps {
 text:string
 confirmation:any
}