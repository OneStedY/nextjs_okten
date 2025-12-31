import {FC} from 'react'
type Props = {
    params:{id:string}
}

const UserPage:FC<Props> = async ({params}) => {

    let {id} = await params;
    return (

        <div>
            <hr/>
           user page id {id}
            <hr/>
        </div>
    );
};

export default UserPage
