


export default function Historylog() {
    const historydata = [
       {date: '5/10/2024', transectionid: '45334346454', amount: '$20'},
       {date: '6/10/2024', transectionid: '45334367454', amount: '$30'},
       {date: '8/10/2024', transectionid: '45334346454', amount: '$35'},
       {date: '10/10/2024', transectionid: '4545644443', amount: '$10'},
       {date: '15/10/2024', transectionid: '45334346454', amount: '$150'},
       {date: '22/10/2024', transectionid: '45334346454', amount: '$200'},
       {date: '23/10/2024', transectionid: '45334346454', amount: '$80'},
       {date: '24/10/2024', transectionid: '45334346454', amount: '$60'},
       {date: '26/10/2024', transectionid: '45334346454', amount: '$15'},
       {date: '28/10/2024', transectionid: '45334346454', amount: '$180'}
   ]

    return <>
        <h2 style={{ color: 'white', marginBlock: '1rem' }}>Transection History</h2>
        {historydata.map((data) => {
            return (
              <div className="history-container">
                <h3>date: {data.date}</h3>
                <h3>Transection ID: {data.transectionid}</h3>
                <h3>Amount: {data.amount}</h3>
              </div>
            );
        })}
    
    
    </>



}