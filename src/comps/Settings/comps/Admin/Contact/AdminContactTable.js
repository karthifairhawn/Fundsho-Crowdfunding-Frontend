import { useEffect } from "react";
import UserTableRow from "../Users/userTableRow";
import {APIIP} from "../../../config.js";
import {useState} from "react";
import AdminContactTableRow from "./AdminContactTableRow";



const AdminContactTable = () => {

    const [contactData,setContactData] = useState([]);

    useEffect(()=> {
        fetch(APIIP.ip+"/contactinfo?sessionKey="+localStorage.getItem("sessionKey"),{
            method: "GET",
            headers: {"Content-type": "application/json; charset=UTF-8"}             
        }).then(response => response.json())
        .then(response => { setContactData(response); } );
    },[])

    

    return ( 
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>                    
                        <th>Time</th>                    
                        <th>Name</th>
                        <th>Email</th>
                        <th>Data</th>                                                         
                    </tr>
                </thead>

                <tbody>
                    {
                        contactData
                        &&
                        contactData.map((obj,idx) => {                            
                            return <AdminContactTableRow  key={idx} date={obj.timestamp} time={obj.timestamp} name={obj.name} email={obj.email} data={obj.data}/>
                        })
                    }
                    
                </tbody>
            </table>
        </>
     );
}
 
export default AdminContactTable;