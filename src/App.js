
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CarsDetail from "./Components/CarsDetail";
import Cars from "./Components/Cars";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
        <h1>Super Carlist</h1>
        {<Link to="/Cars">Home</Link>}
        <Routes>
          <Route path="/Cars" element={<Cars />} />
          <Route path="/Cars/:id" element={<CarsDetail />}/>
        </Routes>
      </div>
		</BrowserRouter>
	);
}

export default App;
