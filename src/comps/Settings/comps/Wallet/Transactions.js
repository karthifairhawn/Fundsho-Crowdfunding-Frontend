const TransactionTable = ({transaction}) => {
    if(transaction.length === 0) return (<><span className="title">All Transactions</span><h5 className="center">No Transactions Yet</h5></>);
    return (
        <><span className="title mt-3 mb-3">All Transactions</span>
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
                </> 
     );
}
 
export default TransactionTable;