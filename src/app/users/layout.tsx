import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title:'users'
};

type Props = {children: React.ReactNode}
const UsersLayout = ({children}:Props) =>{
    return(
        <>
            {children}
        </>
    )
}
export default UsersLayout
