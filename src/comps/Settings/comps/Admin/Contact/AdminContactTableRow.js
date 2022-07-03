import AdminContactMessageModel from "./AdminContactMessageModel";

const AdminContactTableRow = ({date,time,name,email,data}) => {
    return (  
        <tr>  
            <td>{date.split("T")[0]}</td>          
            <td>{date.split("T")[1].split("+")[0]}</td>          
            <td>{name}</td>
            <td>{email}</td>
            {
                data
                &&
                
                <AdminContactMessageModel data={data}/>
            }
            
        </tr>
    );
}
 
export default AdminContactTableRow;