
import { Modal } from '../../../../shared/components';
import moment from 'moment/moment';

export const UserModal = (props: any) => {

    const { user, toggleModal, showModal } = props;

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
                    <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                        <img src={user?.picture} alt="..." style={{ borderRadius: '50%', width: '12rem', height: '12rem' }}></img>
                    </div>
                    <h3 className="text-center">{`${user?.title} ${user?.firstName} ${user?.lastName}`}</h3>
                    <div className="d-flex justify-content-center">
                        <small className='mr-2'>{`Fecha de nacimiento  ${moment(user?.dateOfBirth).format("YYYY-MM-DD")}`}</small>
                    </div>

                    <div className="d-flex justify-content-center">
                        <span className="font-weight-bold pr-2">Genero: </span>
                        <span>{user?.gender}</span>
                    </div>


                    <div className=' mt-3 p-3 mx-auto border border-secondary' style={{ background: '#FFFFFF', borderRadius: '1rem', width: '90%' }}>
                        <h6 className="font-weight-bold">Información general</h6>
                        <div className=" mt-1 w-100" >
                            <div>
                                <i className="pi pi-envelope p-text-secondary  mr-2"></i><small>{user?.email}</small>
                            </div>

                        </div>
                        <div className="d-flex justify-content-between mt-1 w-100" >
                            <div>
                                <i className="pi pi-whatsapp p-text-secondary  mr-2"></i><small>{`${user?.phone}`}</small>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Modal>
    );
}