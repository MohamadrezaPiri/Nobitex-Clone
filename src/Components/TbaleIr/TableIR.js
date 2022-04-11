import React from 'react';
import './TbaleIR.css';
import bitcoin from '../Table/download.svg';
import btcChart from '../Table/btc.png';
import eth from '../Table/download (1).svg'
import ethChart from '../Table/eth.png';
import shib from '../Table/shib.177269a.svg';
import shibChart from '../Table/shib.png';
import ada from '../Table/ada.a429378.svg';
import adaChart from '../Table/ada.png'
import trx from '../Table/trx.90f9654.svg';
import trxChart from '../Table/trx.png';
import doge from '../Table/download (2).svg';
import dogeChart from '../Table/doge.png';

const TableIR = () => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th className='name'>نام</th>
                    <th>آخرین قیمت</th>
                    <th>تغییر 24h</th>
                    <th className='weekly-chart-title'>نمودار هفتگی</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={bitcoin} alt="بیت کویتن" />
                        <div className="name-symbol">
                            <p className='symbol'>BTC</p>
                            <p className='token-name'>بیت کوین</p>
                        </div>
                    </td>
                    <td className='token-price'>1,254,940,000</td>
                    <td className='margin-left' ><p className='token-price-changes'>1.14%-</p></td>
                    <td ><img className='weekly-chart' src={btcChart} alt="نمودار بیت کوین" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>                    <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={eth} alt="اتریوم" />
                        <div className="name-symbol">
                            <p className='symbol'>ETH</p>
                            <p className='token-name'>اتریوم </p>
                        </div>
                    </td>
                    <td className='token-price'>94,620,670</td>
                    <td className='margin-left'><p className='token-price-changes'>0.71%-</p></td>
                    <td ><img className='weekly-chart' src={ethChart} alt="نمودار اتریوم" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>
                <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={shib} alt="شیبا" />
                        <div className="name-symbol">
                            <p className='symbol'>SHIB</p>
                            <p className='token-name'>شیبا </p>
                        </div>
                    </td>
                    <td className='token-price'>714</td>
                    <td className='margin-left'><p className='token-price-changes'>2.86%-</p></td>
                    <td ><img className='weekly-chart' src={shibChart} alt="نمودار شیبا" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>
                <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={ada} alt="کاردانو" />
                        <div className="name-symbol">
                            <p className='symbol'>ADA</p>
                            <p className='token-name'> کاردانو</p>
                        </div>
                    </td>
                    <td className='token-price'>31,720</td>
                    <td className='margin-left' ><p className='token-price-changes'>1.87%-</p></td>
                    <td><img className='weekly-chart' src={adaChart} alt="نمودار کاردانو" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>
                <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={trx} alt="ترون" />
                        <div className="name-symbol">
                            <p className='symbol'>TRX</p>
                            <p className='token-name'>ترون </p>
                        </div>
                    </td>
                    <td className='token-price'>1,979</td>
                    <td className='margin-left' ><p className='token-price-changes'>2.8%-</p></td>
                    <td ><img className='weekly-chart' src={trxChart} alt="نمودار ترون" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>
                <tr>
                    <td className='first-column'>
                        <img className='token-logo' src={doge} alt="دوج کویتن" />
                        <div className="name-symbol">
                            <p className='symbol'>DOGE</p>
                            <p className='token-name'>دوج کوین</p>
                        </div>
                    </td>
                    <td className='token-price'>3,818</td>
                    <td className='margin-left' ><p className='token-price-changes'>1.41%-</p></td>
                    <td><img className='weekly-chart' src={dogeChart} alt="نمودار دوج کوین" /></td>
                    <td><button className='buy-sell'>خرید و فروش</button></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td className='show-all-td' colSpan={5} >
                        <p className='show-all'>نمایش همه بازارها</p>
                        <i className='fa fa-angle-left'></i>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default TableIR