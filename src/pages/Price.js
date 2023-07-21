import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price(props) {

    //apikey
    const apiKey = "D52E3049-6389-4DC1-BF84-A531B40BF3F0"

    //grab currency symbol from URL Params
    const params = useParams()
    const symbol = params.symbol

    //url to fetch data from
    const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?invert=false`;

    //state to hold coin data
    const [coin, setCoin] = useState("null")

    //function to get coin data
    const getCoin = async () => {
        try {
            const response = await fetch(url, {
                headers: { 'X-CoinAPI-Key': `${apiKey}` }
            });
            const data = await response.json();
            //sets data as state
            setCoin(data)
            console.log(data)
        } catch (e) {
            console.error(e)
        }
    }

    // useEffect to run getCoin when component mounts
    useEffect(() => {
        getCoin();
    }, []);

    //loaded function for when data is fetched
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>
                    {coin.rate}
                </h2>
            </div>
        )
    }

    //function for when data does not exist
    const loading = () => {
        return (
            <h1>
                Loading...
            </h1>
        )
    }

    return coin && coin.rate ? loaded() : loading();
}



// store the apikey and currency symbol in different variables
// use the useEffect hook to make an api call
// interpolate the apikey and symbol in the fetch URL
// save the resulting data in state and render it
// loaded and loading function for rendering the data if exists

//Headers
// The Headers interface of the Fetch API allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing headers from the list of the request's headers.