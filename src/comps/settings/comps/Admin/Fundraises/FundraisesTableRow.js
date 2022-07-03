import { Link } from "react-router-dom";
import UserModel from "../Users/userModel";
import { Button } from "@mui/material";

const FundraisesTableRow = ({reqId,title,raisedBy,status,fund}) => {



    return ( 
    <tr>
        <th scope="row">{reqId}</th>
        <td>{title}</td>       
        <td>{fund}</td>       
        <td>            
            { status===0 && "Pending" }
            { status===1 && "Active" }
            { status===2 && "Successfully Closed" }
            { status===3 && "User Withdraw in between / Rejected" }
            { status===4 && "Fundraising expired" }
            </td> 
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