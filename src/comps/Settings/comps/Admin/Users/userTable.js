import { useEffect } from "react";
import UserTableRow from "./userTableRow";
import {APIIP} from "../../../config.js";
import {useState} from "react";



const UserTable = () => {

    const [users,setUsers] = useState([]);

    useEffect(()=> {
        fetch(APIIP.ip+"/admin/users?sessionKey="+localStorage.getItem("sessionKey"),{
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}             
        }).then(response => response.json())
        .then(response => { setUsers(response); } );
    },[])

    

    return ( 
        <>
            <table className="table">
        <thead>
            <tr>
            <th scope="col">User ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {
                users
                &&
                users.map((obj,idx) => {
                    
                   return <UserTableRow name={obj.fname+ obj.lname} key={idx} userId={obj.userId} email={obj.email}/>
                })
            }
            
        </tbody>
        </table>
        </>
     );
}
 
export default UserTable;