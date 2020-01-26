import React, { Fragment } from "react"

const CryptoItem = props => {
    return (
        <Fragment>
            <span>Last rate:</span>
            <span className={props.color}> {props.last} </span>
            <span>{props.currency}</span>
            <span>[{props.symbol}]</span>
        </Fragment>
    )
}

export default CryptoItem;