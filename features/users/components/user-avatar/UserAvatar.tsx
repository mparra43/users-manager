import { Avatar } from "primereact/avatar"
import { AvatarUser } from "../../types"

export const UserAvatar = (props: AvatarUser) => {

    return (
        <div className='w-full p-link flex align-items-center'>
            <Avatar image={props.url} className="mr-2" shape="circle"  size="large"/>
            {props.firstName &&
                <div className="flex flex-column align">
                    <span className="font-bold">{`${props.firstName} ${props.lastName}`}</span>
                    <span className="text-sm">Administrador</span>
                </div>
            }
        </div>
    )
}