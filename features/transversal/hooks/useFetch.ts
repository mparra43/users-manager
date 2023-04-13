import { useEffect, useState } from "react";
import { fetcher } from "../../../helpers/fetch";
import { ParametersRequest, HandlerRequest } from "../../../types";


export const useFetch = (parameters: ParametersRequest) => {


    const [state, setState] = useState<HandlerRequest>({
        data: null,
        isLoading: false,
        hasError: null,
    })


    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        try {
            const resp = await fetcher(parameters);
            const data = await resp.json();
            setState({
                data,
                isLoading: false,
                hasError: null,
            });

        } catch (error) {
            setState({
                data:null,
                isLoading: false,
                hasError: error,
            });

        }

    }


    useEffect(() => {
        getFetch();
    }, [])



    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        getFetch
    };
}