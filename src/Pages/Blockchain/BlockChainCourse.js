import React from "react";
import { Link } from "react-router-dom";
import "./Blockchaincourse.css";

const BlockChainCourse = () => {
  return (
    <>
      <div className="block-chain-description-page">
        <div class="pledges15">
          <div class="width855">
            <div class="innerText">
              <img
                src="https://phantom-marca.unidadeditorial.es/d6811174d250534bc39d0fd0920eec14/crop/0x0/887x499/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/10/16469298673188.png"
                alt="not available"
              />
              <div className="top-description">
                <h1 class="head">
                  Blockchain Course
                  <span style={{ fontSize: "18px" }}>
                    {" "}
                    (0x5C9eb5D6a6C2c1B3EFc52255C0b356f116f6f66D)
                  </span>
                </h1>
                <p class="pledgePrice">Invest ₹1500 or more</p>
              </div>
            </div>

            <div className="blockchain-product-description">
              <p class="littleText">
                In our campaign, you will get lifetime free access to our
                course. Learn everything you need to know about all-things
                blockchain. Harness the power of the most disruptive technology
                since the internet through real life examples! Master Blockchain
                Now 
              </p>
              <div className="inputandbutton">
                <input placeholder="Enter the amount" />
                <Link to="/request">
                  <button class="btn reward_btn" id="btn25" type="button">
                    Contribute
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockChainCourse;
