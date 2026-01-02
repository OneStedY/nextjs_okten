import { getCommentById } from "@/services/api.service";


export default async function CommentsPage(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const commentId = Number(id);

    const comment = await getCommentById(commentId);

    return (
        <div>
            <hr/>
            <div>{comment.id}</div>
            <div>{comment.postId}</div>
            <div>{comment.title}</div>
            <div>{comment.body}</div>
            <div>{comment.email}</div>
            <hr/>
        </div>
    );
}
