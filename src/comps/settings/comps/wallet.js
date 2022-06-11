import { useState,useEffect } from 'react';

import { APIIP } from '../config';
const Wallet = () => {

    const [transaction,setTransaction] = useState({});
    const [balance,setBalance] = useState(0);
    // const [balanceUpdate,setBalanceUpdate] = useState(true);
    const style = {
        fontSize:'1rem'
    }
    useEffect(() => {        
        var url = APIIP.ip+"/users/"+localStorage.getItem("userId")+"/wallet?sessionKey="+localStorage.getItem("sessionKey");
        console.log(url);
        fetch(url)
        .then((response)=> response.json())
        .then((response => {            
            setTransaction(response.transaction);
            console.log(response.transaction);
            setBalance(response.balance);            
        }));
    },[])
    
    

    function alertGatway(){
        alert("Payment Gateway is under maintanence");
    }
    

    return (     
        <>
        
            <div className="title">Wallet</div>
            
            <div className="wallet-container">
                <div className="balance-container">
                    <span className="balance-amount">
                        <span> ₹ {balance}</span>+
                        <span style={style}> Current Balance </span> 
                    </span>     
                    <span>
                        <button onClick={ (e) =>{ alertGatway() }}> + Add Money to Wallet</button>
                        <button style={{margin:"0px 10px"}} onClick={ (e) =>{ alertGatway() }}> Withdraw</button>
                            
                            {/* <form>
                                <label>Amount</label>
                                <input type="text" placeholder="Amount" value={amountToAdd} onChange={ (e) =>{setAmountToAdd(e.target.value)} }/>

                                <label>status</label>
                                <input type="checkbox" value={amountAddStatus} onClick={ (e) =>{setAmountAddStatus(e.target.checked)}} />
                                    <br />
                                <button onClick={ (e) => {
                                    e.preventDefault();      
                                                               

                                    let data = {
                                        sessionId:localStorage.getItem("sessionkey"),
                                        userId:localStorage.getItem("userId"),
                                        amount:amountToAdd,
                                        status:amountAddStatus
                                    }

                                    fetch(APIIP.ip+'/addmoney',{
                                        method: "POST",
                                        body: JSON.stringify(data),
                                        headers: {"Content-type": "application/json; charset=UTF-8"}
                                    }).then(response => setBalanceUpdate(!balanceUpdate));


                                 }}>submit</button>
                            </form> */}
                        {/* </Popup>                         */}
                    </span>            
                </div>
                <span className="title">All Transactions</span>
                {

                transaction.length > 0 ?

                <div className="transaction-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="transaction-table">                            
                            {Object.entries(transaction).reverse().map((item,idx) => (                                        
                                <tr key={idx}>
                                    <td>{item[1].transactionId}</td>
                                    <td>{item[1].transactionDescription}</td>
                                    <td className={ (item[1].transactionAmount>0 && "green-text") || (item[1].transactionAmount<0 && "red-text")} >
                                        {item[1].transactionAmount}
                                    </td>
                                    <td><i className={(item[1].transactionStatus==="Success" && "fa fa-check fa-green") || (!item[1].status && "fa fa-times fa-red")} aria-hidden="true"></i>
                                        
                                        {item[1].transactionStatus==="Success" && "Accepted"}
                                        {!item[1].transactionStatus==="Failure" && "Failed"}
                                    </td>
                                </tr>
                            ))}
                            

                        </tbody>
                    </table>
                </div>

                :
                <h5 className="center">
                    No Transactions Yet
                </h5>
                }

            </div>
        </>
     );
}
 
export default Wallet;
