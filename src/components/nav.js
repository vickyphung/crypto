import { Link } from "react-router-dom";

export default function Nav (props) {
    return(
        <div className="nav">
            <Link to="/">
                <div>Crypto Prices
                </div>
            </Link>
            <Link to="/currencies">
                <div>
                    CURRENCIES
                </div>
            </Link>
        </div>
    )
}

// Link Component
// Let's say that within our NavBar, we actually want to create some links so we can move around our application more easily instead of having to change the URL manually in the browser.
// We can do so with another special component from React Router DOM called the Link component. It accepts the to prop, which specifies where we want the link to navigate our user to