import { Route } from "react-router-dom";
import AdminPanelNavigation from "./AdminNavabar";
import ContactListing from "./Contact/AdminContactPage";
import Fundraises from "./Fundraises/FundraisesTable";
import UserTable from "./Users/userTable";

const AdminPanel = () => {
    return ( 
        <>
            <AdminPanelNavigation/>            

            <Route path="/settings/admin/users">
                <UserTable/>    
            </Route>
            <Route path="/settings/admin/fundraisers">
                <Fundraises/>
            </Route>
            <Route path="/settings/admin/contact">
                <ContactListing/>
            </Route>
        </>
     );
}
 
export default AdminPanel;