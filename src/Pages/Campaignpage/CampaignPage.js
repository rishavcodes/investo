import React from "react";
import "./Campaign.css";
import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <>
      <div className="campaign-page-container">
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
        <div className="campaign-page-list">

        <h2>Live Campaigns</h2>

          <div class="pledges1 p25 pepe">
            <div class="width85">
              <div class="innerText">
                <h1 class="head">Blockchain Course<span style={{fontSize: "18px"}}>      (0x5C9eb5D6a6C2c1B3EFc52255C0b356f116f6f66D)</span></h1>
                <p class="pledgePrice">Invest ₹10,000 or more</p>
              </div>
              <p class="littleText">
              In our campaign, you will get lifetime free access to our course.
                Learn everything you need to know about all-things blockchain. 
                Harness the power of the most disruptive technology since the 
                internet through real life examples! Master Blockchain Now
              </p>
              <div class="productLeft productLeft-25">
                <p class="biggerText">
                  <span class="left-25 rest"></span>
                  <p class="leftWritten"></p>
                </p>
                <Link to="/blockchaincourse">

                <button class="btn reward_btn" id="btn25" type="button">
                  Contribute
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div class="pledges3 p25 pepe">
            <div class="width85">
              <div class="innerText">
                <h1 class="head">Nescoffee<span style={{fontSize: "18px"}}>                        (0xD9eC9E840Bb5Df076DBbb488d01485058f421e58)</span></h1>
                <p class="pledgePrice">Invest ₹3000 or more</p>
              </div>
              <p class="littleText">
                In our campaign, you will get lifetime free access to our course.
                Learn everything you need to know about all-things blockchain. 
                Harness the power of the most disruptive technology since the internet through real life examples! Master Blockchain Now
              </p>
              <div class="productLeft productLeft-25">
                <p class="biggerText">
                  <span class="left-25 rest"></span>
                  <p class="leftWritten"></p>
                </p>
                <button class="btn reward_btn" id="btn25" type="button">
                  Contribute
                </button>
              </div>
            </div>
          </div>

          <div class="pledges2 p25 pepe">
            <div class="width85">
              <div class="innerText">
                <h1 class="head">Cloud Kitchen<span style={{fontSize: "18px"}}>      (0x93Ff8fe9BF40051E8763C864B15A0E87f2f96468)</span></h1>
                <p class="pledgePrice">Invest ₹1000 or more</p>
              </div>
              <p class="littleText">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <div class="productLeft productLeft-25">
                <p class="biggerText">
                  <span class="left-25 rest"></span>
                  <p class="leftWritten"></p>
                </p>
                <button class="btn reward_btn" id="btn25" type="button">
                  Contribute
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CampaignPage;
