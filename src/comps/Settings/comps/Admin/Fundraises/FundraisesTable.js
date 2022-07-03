import { Button,Card } from '@mui/material';
import  {useState,useEffect } from 'react';
import {APIIP} from '../../../config'
import FundraisesTableRow from './FundraisesTableRow';

const FundraisesTable = () => {

    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [moreDataAvailable,setMoreDataAvailable] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {     
        console.log(APIIP.ip+"/requests?page="+currentPage+"&size=10&featured=false");
        fetch(APIIP.ip+"/requests?page="+currentPage+"&size=10&featured=false",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setAllFundraiser(response);
                if(response.length<9){
                    setMoreDataAvailable(false);                    
                }
                console.log(response);
            })
        })

    },[currentPage]);


    return ( 
        <>
        <div className="d-flex flex-row-reverse mt-1 mb-0">
            <Card className="d-flex justify-content-between" style={{width:"300px"}}>                
                <Button  onClick={(()=>setCurrentPage(currentPage-1))}>Previous Page</Button>
                <div className="d-flex justify-content-center align-items-center">{currentPage}</div>
                <Button onClick={(()=>setCurrentPage(currentPage+1))}>Next Page</Button>
            </Card>
        </div>
            <table className="table">
        <thead>
            <tr>
            <th scope="col">Req ID</th>
            <th scope="col">Title</th>
            <th scope="col"></th>
            <th scope="col">
            </th>
            </tr>
        </thead>
        <tbody>
            {
                allFundraisers
                &&
                allFundraisers.map((obj,idx) => {                    
                   return <FundraisesTableRow reqId={obj.requestId} title={obj.eventTitle} raisedBy={obj.userId}/>;
                })
            }
            
        </tbody>
        </table>
        </>
     );
}
 
export default FundraisesTable;