import { Button,Card } from '@mui/material';
import  {useState,useEffect } from 'react';
import {APIIP} from '../../../config'
import FundraiserStatusBased from './FundraiserStatusBased';
import FundraisesTableRow from './FundraisesTableRow';

const FundraisesTable = () => {

    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [pendingFundraiser,setPendingFundraiser] = useState([]);    
    const [nextDisabled,setNextDisabled] = useState("");
    const [fetchStatus,setFetchStatus] = useState(1);
    const [currentPage,setCurrentPage] = useState(1);
    const [prevDisabled,setPrevDisabled] = useState("");

    useEffect(() => {     
        if(currentPage==1){
            setPrevDisabled("disabled");
        }else{
            setPrevDisabled("");
        }
        fetch(APIIP.ip+"/admin/requests?page="+currentPage+"&size=10&status="+fetchStatus+"&sessionKey="+localStorage.getItem("sessionKey"),{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setAllFundraiser(response);
                if(response.length<9){
                    setNextDisabled("disabled");                    
                }else{
                    setNextDisabled("");
                }       
            })
        })

    },[currentPage,fetchStatus]);

  

    

    return ( 
        <>
        <div className="d-flex flex-row-reverse mt-1 mb-0">
            <Card className="d-flex justify-content-between" style={{width:"500px"}}>      
                <FundraiserStatusBased fetchStatus={fetchStatus} setFetchStatus={setFetchStatus}/>          
                <Button disabled={prevDisabled} onClick={(()=>setCurrentPage(currentPage-1))}>Previous Page</Button>
                <div className="d-flex justify-content-center align-items-center">{currentPage}</div>
                <Button disabled={nextDisabled} onClick={(()=>setCurrentPage(currentPage+1))}>Next Page</Button>
            </Card>
        </div>
            <table className="table">
        <thead>
            <tr>
            <th scope="col">Req ID</th>
            <th scope="col">Title</th>
            <th scope="col">Fund</th>
            <th scope="col">Status</th>
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
                   return <FundraisesTableRow reqId={obj.requestId} fund={obj.amountRecieved+"/"+obj.amountRequired} status={obj.reqStatus} title={obj.eventTitle} raisedBy={obj.userId}/>;
                })
            }
            
        </tbody>
        </table>
        </>
     );
}
 
export default FundraisesTable;