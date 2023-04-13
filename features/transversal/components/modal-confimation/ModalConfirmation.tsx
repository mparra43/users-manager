
import { Button } from 'primereact/button';
import { Modal } from '../../../../shared/components';

import { ModalConfirmationProps } from '../../../users/types/index';


export const ModalConfirmation = (props: ModalConfirmationProps) => {

    const { user, toggleModal, showModal } = props;

    const onConfirmation =()=>{
        props.confirmation(user)
        toggleModal()
    }

    return (
        <Modal
            header='Usuario'
            visible={showModal}
            onHide={toggleModal}
            modal
            closer
            maximizable
            style={{ width: '50vw' }}
        >
            {user &&
                <div className='card p-4'>
                    <div className="d-flex justify-content-center">
                        {props.title}
                    </div>

                    <div className="d-flex justify-content-center">
                        <p>
                            {props.text}
                        </p>

                    </div>
                    <div className="d-flex justify-content-center">
                        <Button type="submit" label="Eliminar" className="p-button-success p-button-outlined ml-2 mt-4" onClick={onConfirmation}/>
                    </div>
                </div>
            }
        </Modal>
    );
}