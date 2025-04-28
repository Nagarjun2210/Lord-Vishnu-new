import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout.js";
import Divyadesangal from "./pages/Divyadesangal.js";
import Ahzvargal from "./pages/Ahzvargal.js";
import Bhagavatgita from "./pages/Bhagavatgita.js";
import Dasavatharam from "./pages/Dasavatharam.js";
import Home from "./pages/Home.js";
import AdminChatDashboard from "./pages/AdminPanel.js";
import Songs from './pages/Songs.js';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-2GSW5W7CJJ";
ReactGA.initialize(TRACKING_ID);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="Ahzvargal" element={<Ahzvargal />} />
          <Route path="Divyadesangal" element={<Divyadesangal />} />
          <Route path="Bhagavatgita" element={<Bhagavatgita />} />
          <Route path="Dasavatharam" element={<Dasavatharam />} />
          <Route path="Songs" element={<Songs />} />
          <Route path="AdminPanel" element={<AdminChatDashboard />} />
        </Route>
      </Routes>  
    </HashRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);