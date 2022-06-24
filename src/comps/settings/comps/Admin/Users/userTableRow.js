import UserModel from "./userModel";

const UserTableRow = ({name,userId,email}) => {
    return ( 
        <tr>
            <th scope="row">{userId}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <UserModel userId={userId} model_text={"Manage user"}/>
            </td>
        </tr>
     );
}
 
export default UserTableRow;