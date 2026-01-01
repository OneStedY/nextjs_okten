import {getAllPosts} from "@/services/api.service";
import {IPosts} from "@/model/IPosts";


export const PostsComponents = async () => {
    const posts: IPosts[] = await getAllPosts()

    return (
        <div>
            <div>
                {posts.map((p: IPosts) => (
                    <div key={p.id}>
                        <div>{p.id}</div>
                        <div>{p.userId}</div>
                        <div>{p.title}</div>
                        <div>{p.body}</div>
                    </div>
                ))}

            </div>

        </div>
    );
};



