import {getAllComments} from "@/services/api.service";
import Link from "next/link"


export const CommentsComponents = async () => {
    const comments =  await getAllComments()



    return (
        <div>
            {
                comments.map((comment) => <div key={comment.id}>
                    <Link href={'/comments/' + comment.id.toString()}> {comment.id} {comment.title} {comment.body} </Link>
                </div>)
            }
        </div>
    );
};