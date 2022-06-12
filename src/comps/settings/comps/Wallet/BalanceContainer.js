const BalanceContainer = ({balance}) => {
    return (         
    <div className="balance-container mb-5 flex-wrap">
        <span className="balance-amount">
            <span> ₹ {balance}</span>
            <span className="fs-5"> Current Balance </span> 
        </span>     
        <span>
            <button onClick={ (e) =>{ alert('Payment gateway is under maintenance') }}> + Add Money to Wallet</button>
            <button style={{margin:"0px 10px"}} onClick={ (e) =>{  alert('Payment gateway is under maintenance') }}> Withdraw</button>                                                     
        </span>            
    </div>
     );
}
 
export default BalanceContainer;