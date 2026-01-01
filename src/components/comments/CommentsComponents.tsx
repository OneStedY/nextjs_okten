import {getAllComments} from "@/services/api.service";
import {IComments} from "@/model/IComments";


export const CommentsComponents = async () => {
    const comments: IComments[] = await getAllComments()

    return (
        <div>
            <div>
                {comments.map((u: IComments) => (
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



