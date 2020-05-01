import React, { Component } from 'react';

class Prices extends Component{

    state = {
        currency : 'USD'
    }
    render() {
        let list = '';
        if(this.state.currency == 'USD'){
            list = <li>
            Bitcoin rate for {this.props.bpi.USD.description}:
            <span>{this.props.bpi.USD.code}</span> 
            <strong>{this.props.bpi.USD.rate}</strong></li>;

        }else if(this.state.currency == 'GBP') {

            list = <li>
            Bitcoin rate for {this.props.bpi.GBP.description}:
            <span>{this.props.bpi.GBP.code}</span> 
            <strong>{this.props.bpi.GBP.rate}</strong></li>

        }else if(this.state.currency == 'EUR') {

            list = <li>
            Bitcoin rate for {this.props.bpi.EUR.description}:
            <span>{this.props.bpi.EUR.code}</span> 
            <strong>{this.props.bpi.EUR.rate}</strong></li>

        }

        return (
            <div>
                <ul className="bitsPrices-list">
                    {list}
                </ul>
                <br />
                <select className="currency-selector" onChange={e => this.setState({currency : e.target.value})}>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
                <style>{`
                    .bitsPrices-list{
                        list-style:none;
                        padding:0;
                        margin:0;
                    }

                    ul.bitsPrices-list li{
                        margin-bottom: 5px;
                        border-bottom:1px solid #333;
                        padding:15px 0;
                        background: #f4f4f4;
                        border: 1px solid #f4f4f4;
                        border-radius:5px;
                        box-shadow: 1px 3px 3px rgba(0,0,0,0.1);
                        list-style:none;
                        padding:15px 30px;
                        margin:0;
                    }

                    ul.bitsPrices-list li span{
                        background:#F44336;
                        color:#ffffff;
                        padding:0 5px;
                        border-radius:5px;
                        margin: 0 5px;
                    }
                    select.currency-selector{
                        width: 100%;
                        border: 1px solid #ddd;
                        height: 35px;
                        font-size: 12px;
                        border-radius: 5px;
                        color: gray;
                        font-weight: 600;
                    }
                `}</style>
            </div>
        );

    }
}

export default Prices 