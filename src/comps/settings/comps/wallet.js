import { useState,useEffect } from 'react';
// import 'reactjs-popup/dist/index.css';
import { APIIP } from '../config';
const Wallet = () => {

    const [transaction,setTransaction] = useState({});
    // const [balanceUpdate,setBalanceUpdate] = useState(true);
    const style = {
        fontSize:'1rem'
    }
    useEffect(() => {        

        fetch(APIIP.ip+"/getuser/"+localStorage.getItem("sessionkey"))
        .then((response)=> response.json())
        .then((response => {            
            setWalletBalance(response.wallet.balance);
            setTransaction(response.wallet.transaction.reverse());
        }));
    },[])

    // const [amountToAdd,setAmountToAdd] = useState(0);
    // const [amountAddStatus,setAmountAddStatus] = useState(false);

    const [walletBalance,setWalletBalance] = useState(localStorage.getItem("balance"));

    function alertGatway(){
        alert("Payment Gateway is under maintanence");
    }
    

    return (     
        <>
        
            <div className="title">Wallet</div>
            
            <div className="wallet-container">
                <div className="balance-container">
                    <span className="balance-amount">
                        <span> ₹ {walletBalance} </span>
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
                                <th>Reason</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody className="transaction-table">                            
                            {Object.entries(transaction).map((item,idx) => (                                        
                                <tr key={idx}>
                                    <td>{item[1].transactionId}</td>
                                    <td>{item[1].reason}</td>
                                    <td className={ (item[1].direction==="in" && "green-text") || (item[1].direction==="out" && "red-text")} >
                                        {item[1].direction==="in" ? "+"+item[1].amount : "-"+item[1].amount}
                                    </td>
                                    <td><i className={(item[1].status && "fa fa-check fa-green") || (!item[1].status && "fa fa-times fa-red")} aria-hidden="true"></i>
                                        
                                        {item[1].status && "Done"}
                                        {!item[1].status && "Failed"}
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
