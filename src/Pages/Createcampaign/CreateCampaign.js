import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./Createcampaign.css";

const CreateCampaign = () => {
  return (
    <>
      <div className="login-body">
        <div className="content-box-login">
          <div className="form-box-login">
            <div className="form-nav">
              <div className="arrow-icon-title">
                <Link style={{textDecoration: "none", color: "grey"}} to="/">
                  <ArrowBackIcon className="arrow" /><span style={{fontSize: "20px"}}>  Back to home</span>
                </Link>
                <h2>Create a New Campaign</h2>
              </div>
            </div>

            <form action="">
              <div className="input-form-login">
                <input
                  type="text"
                  placeholder="Minimum Contribution Amount"
                  autoComplete="off"
                />
              </div>
              <div className="input-form-login">
                <input
                  type="text"
                  placeholder="Campaign Name"
                  autoComplete="off"
                />
              </div>
              <div className="input-form-login">
                <input
                  type="img"
                  placeholder="Image URL"
                  autoComplete="off"
                />
              </div>
              <div className="input-form-login">
                <input className="input-description"
                  type="textarea"
                  placeholder="Campaign Description(in min 100 words)"
                  autoComplete="off"
                />
              </div>
              <Link to="/campaignpage">
                <button className="submit-btn-login" type="submit">
                  Creat Campaign
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
