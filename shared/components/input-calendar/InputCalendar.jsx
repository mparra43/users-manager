import React from 'react';
import { Controller } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import moment from 'moment/moment';

export function InputCalendar(props) {
	const { error, name, label, style, control, rules, value, onChange} = props

	moment.locale('es');


	return (
		<div style={style?.div}>
			<label htmlFor={name} >{label}</label>
			<span className={style.span} style={style?.styleSpan}>
				{!control ?
					<Calendar style={style?.input} id={name} name={name} value={value} onChange={(e) => onChange(e.target)} />
					: <Controller name={name} control={control}
						rules={rules}
						defaultValue={value ? value:''}
						render={({ field, fieldState }) => (
							<Calendar style={style?.input} id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} dateFormat={moment(field.value).format("YYYY-MM-DD")} />
						)} />
				}
			</span>
			{error[name] && <small className="p-error">{error[name].message}</small>}
		</div>
	);
}
