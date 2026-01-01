import {getAllUsers} from "@/services/api.service";


export const UsersComponents = async () => {
    const users = await getAllUsers()

    return (
        <div>
            <div>
                {users.map((u: {
                    id: number
                    name: string
                    username: string
                    email: string
                }) => (
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



