import { useState,useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Wallet = () => {

    const [transaction,setTransaction] = useState({});
    const style = {
        fontSize:'1rem'
    }
    useEffect(() => {
        fetch("http://localhost:8080/getuser/"+localStorage.getItem("sessionkey"))
        .then((response)=> response.json())
        .then((response => setTransaction(response.wallet.transaction)));
    },[])

    const [amountToAdd,setAmountToAdd] = useState(0);
    const [amountAddStatus,setAmountAddStatus] = useState(false);

    return (     
        <>
        
            <div className="title">Wallet</div>
            
            <div className="wallet-container">
                <div className="balance-container">
                    <span className="balance-amount">
                        <span> ₹ {localStorage.getItem("balance")} </span>
                        <span style={style}> Current Balance </span> 
                    </span>     
                    <span>
                        <Popup trigger={<button> + Add Money to Wallet</button>} position="center">
                            <form>
                                <label>Amount</label>
                                <input type="text" placeholder="Amount" value={amountToAdd} onChange={ (e) =>{setAmountToAdd(e.target.value)} }/>

                                <label>status</label>
                                <input type="checkbox" onChange={ (e) =>{setAmountAddStatus(e.target.checked)}} />
                                    <br />
                                <button onClick={ (e) => {
                                    e.preventDefault();      
                                    console.log(amountToAdd+" "+amountAddStatus)                              
                                 }}>submit</button>
                            </form>
                        </Popup>                        
                    </span>            
                </div>
                <span className="title">All Transactions</span>
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
                                    <td className={ item[1].status && "green-text" || !item[1].status && "red-text"} >
                                        {item[1].amount}
                                    </td>
                                    <td><i className={item[1].status && "fa fa-check fa-green"} aria-hidden="true"></i>
                                        <i className={!item[1].status && "fa fa-times fa-red"} aria-hidden="true"></i>
                                        {item[1].status && "Done"}
                                        {!item[1].status && "Failed"}
                                    </td>
                                </tr>
                            ))}
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Wallet;
