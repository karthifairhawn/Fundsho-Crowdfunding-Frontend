import { Link } from "react-router-dom";
import UserModel from "../Users/userModel";
import { Button } from "@mui/material";

const FundraisesTableRow = ({reqId,title,raisedBy}) => {



    return ( 
    <tr>
        <th scope="row">{reqId}</th>
        <td>{title}</td>        
        <td>
            <Link to={`/fundraiser/${reqId}`}>
                <Button>{"Open"}</Button>
            </Link>
        </td>
        <td>
            <UserModel userId={raisedBy} model_text={"View Fundraiser"}/>
        </td>
    </tr>
     );
}
 
export default FundraisesTableRow;