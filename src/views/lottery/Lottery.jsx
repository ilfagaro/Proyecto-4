import './lottery.css'
import React from 'react';
import Footer from '../../components/footer/Footer'
import TableHome from '../../components/table/TableHome';

function Lottery() {
    
    return (
        <div className='contentHome'>
            <h1>Header</h1>
            <TableHome showDeleteButton={false} />
            <Footer />

        </div>

    );
}

export default Lottery;
