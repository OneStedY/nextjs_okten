import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title:'comments'
};

type Props = {children: React.ReactNode}
const CommentsLayout = ({children}:Props) =>{
    return(
        <>
            {children}
        </>
    )
}
export default CommentsLayout