import React, { Component } from 'react';
import './styles/cryptocurrencies.css';

class Cryptocurrency extends Component {
    constructor(){
        super()
            this.state = { 
                cryptos : [],
             }

    }


    componentDidMount(){
         fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false")
         .then(response => response.json())
         .then(data =>{this.setState({cryptos: data})})
    }

    getColor = () => {
        
    }

    render() { 
        return ( 
            <React.Fragment>
                <h4>Cryptocurrency live tracker</h4>
                <div className="container">
                        <table>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Name</th>
                                <th>Current price</th>
                                <th>Market Cap</th>
                                <th>High 24h</th>
                                <th>Low 24h</th>
                                <th>Price change % 24h</th>
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
                                    </tr>
                                )}
                        </table>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Cryptocurrency;