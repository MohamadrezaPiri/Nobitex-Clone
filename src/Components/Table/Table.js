import React, { useState } from 'react';
import TableUsdt from '../TableUsdt/TableUsdt';
import TableIR from '../TbaleIr/TableIR';
import './Table.css';


const Table = () => {

    const [isIrShow, setIsIrShow] = useState(true)
    const [isUsdtShow, setIsUsdtShow] = useState(false)

    const irClickHandler = () => {
        setIsIrShow(true)
        setIsUsdtShow(false)
    }

    const usdtClickHandler = () => {
        setIsIrShow(false)
        setIsUsdtShow(true)
    }

    return (
        <div className="table-container">
            <div className='select'>
                <p className='select-text'>انتخاب بازار بر اساس</p>
                <div>
                    <button onClick={irClickHandler} className={isIrShow ? "ir" : "inactive"}>تومان IRT</button>
                    <button onClick={usdtClickHandler} className={isUsdtShow ? "active" : "usdt"}>تتر USDT</button>
                </div>
            </div>

            <div className='table-div'>
                {isIrShow ? <TableIR /> : <TableUsdt />}
            </div>
        </div>
    )
}

export default Table