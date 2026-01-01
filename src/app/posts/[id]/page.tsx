import { getPostById } from "@/services/api.service"; // или getAllPosts + find

export default async function PostPage(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const postId = Number(id);

    const post = await getPostById(postId);

    return (
        <div>
            <hr/>
            <div>{post.id}</div>
            <div>{post.userId}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <hr/>
        </div>
    );
}
