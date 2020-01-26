import React from 'react'
import CryptoItem from './CryptoItem'

const CryptoList = props => {

    const cryptoCollection = props.cryptoList.map((crypto)=>{
        return (
            <li key={crypto.currency} >
                <CryptoItem
                    color={crypto.colorClass}
                    last={crypto.last}
                    currency={crypto.currency}
                    symbol={crypto.symbol}
                />
            </li>
        )
    });

    return (
        <ul className='crypto-list'>
            {cryptoCollection}
        </ul>
    )
}

export default CryptoList;