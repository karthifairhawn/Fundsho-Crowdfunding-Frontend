import { useState,useEffect } from "react";
import {APIIP} from '../settings/config';
import SinglePageRequest from './SinglePageRequest.js';
const ViewRequest = ({id}) => {
    const [data,setData] = useState(["","","","","","","","","","T","","","","","","","","","","",""]);
    


    useEffect(() => {
        fetch(APIIP.ip+"/requestsbyrid/"+id)
        .then((response) => response.json())
        .then((response) => {
            setData(response);
        })
    },[id])
    
    return ( 
        <>
            <SinglePageRequest 
                user={data[0]} 
                title={data[1]} 
                desc={data[2]} 
                bonafide={data[3]} 
                additional={data[4]}                         
                vote={data[5]}
                amountAlready={data[6]}
                amountRequired={data[7]}
                amountTotal={data[8]} 
                date={data[9]}    
                reqId={data[10]}                                             
            />
        </>
     );
}
 
export default ViewRequest;