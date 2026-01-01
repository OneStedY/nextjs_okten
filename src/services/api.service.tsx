import {IUser} from "@/model/IUser";
import {IPosts} from "@/model/IPosts";
import {IComments} from "@/model/IComments";


export const getAllUsers = async ():Promise<IUser[]> => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then(value => value.json());
    return users
}

export const getAllPosts = async (): Promise<IPosts[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = (await res.json()) as IPosts[];

    return posts;
};

export const getAllComments = async ():Promise<IComments[]> => {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments")
        .then(value => value.json());
    return comments
}


export const getPostById = async (id: number): Promise<IPosts> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return (await res.json()) as IPosts;
};

export const getUserById = async (id: number): Promise<IUser> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return (await res.json()) as IUser;
};


export const getCommentById = async (id: number): Promise<IComments> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    return (await res.json()) as IComments;
};