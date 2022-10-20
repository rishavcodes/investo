import "./App.css";
import HomePage from "../src/Pages/Homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateCampaign from "./Pages/Createcampaign/CreateCampaign";
import CampaignPage from "./Pages/Campaignpage/CampaignPage";
import BlockChainCourse from "./Pages/Blockchain/BlockChainCourse";
import Request from "./Pages/Request/Request";
import RequestList from "./Pages/RequestList/RequestList";
import RequestApproved from "./Pages/A/RequestApproved";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createcampaign" element={<CreateCampaign />} />
          <Route path="/campaignpage" element={<CampaignPage />} />
          <Route path="/blockchaincourse" element={<BlockChainCourse />} />
          <Route path="/request" element={<Request />} />
          <Route path="/requestlist" element={<RequestList />} />
          <Route path="/requestapproved" element={<RequestApproved />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
