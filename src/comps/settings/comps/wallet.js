const Wallet = () => {
    const style = {
        fontSize:'1rem'
    }
    return (     
        <>
            <div className="title">Wallet</div>
            
            <div className="wallet-container">
                <div className="balance-container">
                    <span className="balance-amount">
                        <span> ₹ 200 </span>
                        <span style={style}> Current Balance </span> 
                    </span>     
                    <span className="add-money-wallet">
                        + Add Money to Wallet
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
                        <tbody>
                            <tr>
                                <td>236428</td>
                                <td>Donation</td>
                                <td className="red-text">-200</td>
                                <td><i class="fa fa-check fa-green" aria-hidden="true"></i>Done</td>
                            </tr>
                            <tr>
                                <td>657573</td>
                                <td>Added using Bank</td>
                                <td className="green-text">400</td>
                                <td><i class="fa fa-check fa-green" aria-hidden="true"></i>Done</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
     );
}
 
export default Wallet;
