import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { InputText } from 'primereact/inputtext';


export function Input(props: any) {
	const { error, name, label, style, icon, control, rules, value, onChange,  placeholder } = props;

	return (
		<div className="field mt-4">
			<label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}</label>
			<span className={style.span}>
				{icon && <i className={icon} />}
				{control ?
					<Controller
						name={name} 
						control={control}
						rules={rules}
						defaultValue={value ? value: ''}
						render={({ field, fieldState }) => (
							<InputText id={field.name} value={ field.value} onChange={(e:any) => field.onChange(e.target.value)} className={classNames({ 'p-invalid': fieldState.invalid })} style={{ width: '100%' }} placeholder={placeholder}/>
						)} /> :

					<InputText id={name} name={name} value={value}  style={{ width: '100%' }} />
				}
			</span>
			{error[name] && <small className="p-error">{error[name].message}</small>}
		</div>
	);
}
