import {getAllPosts} from "@/services/api.service";
import Link from "next/link"


export const PostsComponents = async () => {
    const posts =  await getAllPosts()



    return (
        <div>
            {
                posts.map((post) => <div key={post.id}>
                    <Link href={'/posts/' + post.id.toString()}> {post.id} {post.title} {post.body} </Link>
                </div>)
            }
        </div>
    );
};