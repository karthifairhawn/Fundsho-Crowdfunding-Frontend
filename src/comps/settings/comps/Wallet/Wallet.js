import { useEffect, useState } from 'react';
import SpinLoader from '../../../homepage3/SpinLoader';
import { APIIP } from '../../config';
import BalanceContainer from './BalanceContainer';
import TransactionTable from './Transactions';


const Wallet = () => {
    
    const [transaction,setTransaction] = useState({});
    const [balance,setBalance] = useState(0);

    useEffect(() => {        
        var url = APIIP.ip+"/users/"+localStorage.getItem("userId")+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
        console.log(url);
        fetch(url)
        .then((response)=> response.json())
        .then((response => {            
            setTransaction(response.transaction);            
            setBalance(response.balance);      
            var ele = document.getElementById("spinloader");
            setTimeout(() => { ele.classList.add("invisible"); }, 500);              
        }));
    },[])
    
    

    return (     
        <>
            <SpinLoader/>
            <div className="title">Wallet</div>            
            <div className="container">
                <BalanceContainer balance={balance}/>
                <TransactionTable transaction={transaction}/>                             
            </div>
        </>
     );
}
 
export default Wallet;
