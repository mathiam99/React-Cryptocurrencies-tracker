import React, { Component } from 'react';
import Header from './header'
import './styles/cryptocurrencies.css';

class Cryptocurrency extends Component {
    constructor(){
        super()
            this.state = { 
                cryptos : []
             }

    }

    componentDidMount(){
         fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
         .then(response => response.json())
         .then(data =>{this.setState({cryptos: data})})
    }


    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <h2>Cryptocurrency live tracker</h2>
                <div className="crypto-container">
                    <React.Fragment>
                        <table>
                            <tr>
                                <th></th>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Current price</th>
                                <th>Market Cap</th>
                                <th>High 24h</th>
                                <th>Low 24h</th>
                                <th>Price change % 24h</th>
                                <th>Last Updated</th>
                            </tr>
                                {this.state.cryptos.map((crypto) =>
                                    <tr>
                                        <td><img src={crypto.image} alt={crypto.name}/></td>
                                        <td>{crypto.symbol}</td>
                                        <td>{crypto.name}</td>
                                        <td>{crypto.current_price} €</td>
                                        <td>{crypto.total_volume}</td>
                                        <td>{crypto.high_24h}</td>
                                        <td>{crypto.low_24h}</td>
                                        <td>{crypto.price_change_percentage_24h} %</td>
                                        <td>{crypto.last_updated}</td>
                                    </tr>
                                )}
                        </table>   
                    </React.Fragment>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cryptocurrency;