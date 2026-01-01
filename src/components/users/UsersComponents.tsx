import {getAllUsers} from "@/services/api.service";
import {IUser} from "@/model/IUser";


export const UsersComponents = async () => {
    const users: IUser[] = await getAllUsers()

    return (
        <div>
            <div>
                {users.map((u: IUser) => (
                    <div key={u.id}>
                        <div>{u.id}</div>
                        <div>{u.name}</div>
                        <div>{u.email}</div>
                        <div>{u.username}</div>
                    </div>
                ))}


            </div>

        </div>
    );
};



