import React, { Component } from 'react'
import axios from 'axios';
import CryptoList from './components/CryptoList'


//AXIOS Library

//https://blockchain.info/pl/ticker?fbclid=IwAR0Gutl6Oe8kSCG1JeRSuzhjo5iWi6h-MMHAOTSmYtVWSXDwIl6g-Xk1_tI

class Crypto extends Component {

    constructor() {
        super();
        this.state = {
            crypto: [],
            filteredCrypto: []
        }
    }

    componentDidMount(){
        this.getData();
        this.timer = setInterval(this.getData, 1000);
    }

    getData = () => {
        axios.get('https://blockchain.info/pl/ticker?fbclid=IwAR0Gutl6Oe8kSCG1JeRSuzhjo5iWi6h-MMHAOTSmYtVWSXDwIl6g-Xk1_tI')
        .then(res => {
            let cryptoData = res.data;
            let cryptoArray = [];
            let i = 0;

            for(let key in cryptoData){
                let prevCrypto = this.state.crypto[i];
                let classValue = 'blue';

                if(prevCrypto!==undefined) {
                    if(prevCrypto.last>cryptoData[key].last) classValue = 'red';
                    else if(prevCrypto.last<cryptoData[key].last) classValue = 'green';
                    else if(prevCrypto.last===cryptoData[key].last) classValue = 'blue';
                }

                let cryptoObj = {
                    last: cryptoData[key].last,
                    symbol: cryptoData[key].symbol,
                    currency: key,
                    colorClass: classValue
                }
                cryptoArray.push(cryptoObj);
                i++;
            }
            this.setState({
                crypto: cryptoArray,
                filteredCrypto: cryptoArray
            });
            this.filterData();
        })
    }

    filterData = () => {
        let filteredCryptoData = this.state.crypto.filter(crypto => {
            return crypto.currency.toLowerCase().includes(this.filterInput.value.toLowerCase());
        })
        this.setState({filteredCrypto: filteredCryptoData});
    }

    render(){
        return(
            <div className="crypto">
                <input type="text" placeholder="Filter" autoFocus onChange={this.filterData} ref={input=> this.filterInput = input}></input>
                <CryptoList cryptoList={this.state.filteredCrypto}/>
            </div>
        );
    }
}

export default Crypto;