import { ReactNode } from "react";

export interface ParametersRequest {
    endpoint: string,
    method: string,
    data?: any,
}

export interface HandlerRequest {
    data: any,
    isLoading: boolean,
    hasError: any,
}



export interface HeaderProps {
    value:string;
    lableButton:string;
    onClickButton: ()=>void;
    handleFilterChange:(event: React.ChangeEvent<HTMLInputElement>)=>void;

}

export interface ModuleProps extends HeaderProps {
    title:string;
    children:ReactNode

}