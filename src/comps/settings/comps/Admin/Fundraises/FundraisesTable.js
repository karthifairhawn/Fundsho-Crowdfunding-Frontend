import  {useState,useEffect } from 'react';
import {APIIP} from '../../../config'
import FundraisesTableRow from './FundraisesTableRow';

const FundraisesTable = () => {

    const [allFundraisers,setAllFundraiser] = useState([]);    
    const [moreDataAvailable,setMoreDataAvailable] = useState(true);
    const [currentPage,setCurrentPage] = useState(1);

    useEffect(() => {     

        fetch(APIIP.ip+"/requests?page="+currentPage+"&size=10&featured=false",{
            method:"GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            response.json().then(response => {                
                setAllFundraiser(allFundraisers.concat(response));
                if(response.length<9){
                    setMoreDataAvailable(false);
                }
                console.log(response);
            })
        })

    },[currentPage]);


    return ( 
        <>
            <table className="table">
        <thead>
            <tr>
            <th scope="col">Req ID</th>
            <th scope="col">Title</th>
            <th scope="col"></th>
            <th scope="col"></th>
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