import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Controller } from 'react-hook-form';


export const Select = (props: any) => {

    const { optionLabel, items,  placeholder, control, name, value } = props

    return (
        <div className="field mt-4">
            <Controller name={name} control={control} defaultValue={value ? value: ''}render={({ field }) => (
                 <Dropdown id={field.name} value={value ? value: field.value} onChange={(e) => field.onChange(e.value)} options={items} optionLabel='name' placeholder={placeholder} />
            )} />
        </div>
    )
}
