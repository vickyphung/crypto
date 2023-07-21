import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/nav";
import './style.css'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price" element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;



// Creating Our Routes
// Now we will will import the Route & Routes component into App, this will allow us define which of our components should render depending on the URL, we'll also import our pages for our routes.
// We will use the Route component to specify each route

// Params
// We are going to soon build out our currencies component which will allow us to select which currencies price we'd like to see. We will do this by injecting a variable in our Price routes path. (":symbol")
//The :symbol part is a URL Param, a variable in the url. Whatever is in that spot in the path will be accessible by using the useParams hook.
