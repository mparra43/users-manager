import React, { useState, useEffect, useRef } from 'react';

import { DataTable } from 'primereact/datatable';


type tableProps = {
    columns: React.ReactNode[] | [];
    data: any;
    dataKey:string;
    selection?: any;
    onSelection?: any;
    modal?: React.ReactNode | React.ReactNode[];
    rows: number;
    rowsPageOptions:number[];
    header?:any
    globalFilterFields?:string[];
}

export const Table = (props: tableProps) => {

    const { columns, data,dataKey,  modal, selection, onSelection , rows, rowsPageOptions, header, globalFilterFields} = props
    const [globalFilter, setGlobalFilter] = useState(null);
    const dt = useRef(null);


    return (
        <div>

                <DataTable ref={dt} value={data} selection={selection} onSelectionChange={onSelection} header={header}
                    dataKey={dataKey} paginator rows={rows} rowsPerPageOptions={rowsPageOptions}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter} responsiveLayout="scroll">
                    {

                        columns?.map((e: any, index) => (e))
                    }

                </DataTable>

           
            {Array.isArray(modal) ? modal.map((e: any) => (e)) : modal}
        </div>
    );
}
