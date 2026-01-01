import {getAllPosts} from "@/services/api.service";


export const PostsComponents = async () => {
    const posts = await getAllPosts()

    return (
        <div>
            <div>
                {posts.map((u: {
                    id: number
                    userId: number
                    title: string
                    body: string
                }) => (
                    <div key={u.id}>
                        <div>{u.id}</div>
                        <div>{u.userId}</div>
                        <div>{u.title}</div>
                        <div>{u.body}</div>
                    </div>
                ))}

            </div>

        </div>
    );
};



