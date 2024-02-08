import './lottery.css'
import React from 'react';
import Footer from '../../components/footer/Footer'
import TableHome from '../../components/tableHome/TableHome';
import TableLottery from '../../components/tableLottery/TableLottery';

function Lottery() {
    
    return (
        <div >
            <h1>Header</h1>
            <TableHome showDeleteButton={false} />
            <TableLottery />
            <Footer />
        </div>

    );
}

export default Lottery;
