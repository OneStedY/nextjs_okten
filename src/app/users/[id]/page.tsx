import {FC} from 'react'
type Props = {
    params:{id:string}
}

const UserPage:FC<Props> = async ({params}) => {

    let {id} = await params;
    return (

        <div>
            <hr/>

            <hr/>
        </div>
    );
};

export default UserPage
