import { Link } from "react-router-dom"

export default function Currencies (props) {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
      ];

    return (
        <div className="currencies">
            {currencies.map((coin) => {
                const {name, symbol} = coin;
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            }
            )}
        </div>
    )
}



// Creating an array of the currencies our app can find prices for
// Looping over that array to generate a link for each one to the price route
// The currency symbol should be placed in the :symbol part of the URL

// Notice when we click any of the links it takes us to the price component, use the React devTools to look for the router props and you should be able to find the value of the symbol param in there.