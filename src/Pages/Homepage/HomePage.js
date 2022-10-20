import React from 'react';
import "./Homepage.css"
import {Link} from "react-router-dom"

const HomePage = () => {
  return (
    <>
        <div className="container-home">
            <div className="navbar-home">
                <h1>INVESTO</h1>
                <div className='navbar-home-btn'>
                <Link to="/createcampaign">
                <button>Creat Campaign</button>
                </Link>
                <button>Our Community</button>
                <button>Connect Wallet</button>
                </div>
            </div>
            <div className="home-body">
                <h1>Crowd funding <br/> with the help <br/> of Blockchain</h1>
                {/* <img className="home-body-img" src="https://coffeemug.ai/blog/wp-content/uploads/2022/02/crypto-crowdfunding.jpg" alt='not available' /> */}
                <Link to="/campaignpage">
                <button className="live-campaign-btn">Live Campaigns</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default HomePage