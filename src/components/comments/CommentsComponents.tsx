import {getAllComments} from "@/services/api.service";


export const CommentsComponents = async () => {
    const comments = await getAllComments()

    return (
        <div>
            <div>
                {comments.map((u: {
                    id: number
                    postId: number
                    title: string
                    email:string
                    body: string
                }) => (
                    <div key={u.id}>
                        <div>{u.id}</div>
                        <div>{u.postId}</div>
                        <div>{u.title}</div>
                        <div>{u.email}</div>
                        <div>{u.body}</div>
                    </div>
                ))}

            </div>

        </div>
    );
};



