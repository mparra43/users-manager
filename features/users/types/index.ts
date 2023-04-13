import { ReactElement } from 'react';
import { Dashboard } from '../../transversal/components/dashboard/Dashboard';


export interface ModalHandlerUsers {
    data: any,
    isLoading: boolean,
    hasError: any,
}

export interface ModalProps {
    user?: User,
    showModal: boolean,
    toggleModal: ()=>void, 
    
    title:string,
}
export interface FormUserProps extends ModalProps{
    handlerCrud: (option:string ,data:User)=>void, 
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

export interface  ModalConfirmationProps extends ModalProps   {
 text:string
 confirmation:any
}