import React from "react";
import "./Requestlist.css";
import { Link } from "react-router-dom";

const RequestList = () => {
  return (
    <>
    <div classname="request-list-container">
      <div className="reqList">
        <h1 className="reqListTitle">Request </h1>
        <button style={{marginLeft:"600px", marginTop:"50px"}}>Create Request</button>
        <div className="request-table" >
        <table className="reqTable">
          <thead>
            <th className="listItem">ID</th>
            <th className="listItem">Description</th>
            <th className="listItem">Amount</th>
            <th className="listItem">Recipient</th>
            <th className="listItem">Votes</th>
            <th className="listItem">Approved</th>
            <th className="listItem">Finalized</th>
          </thead>
          <tbody>
            <tr>
              <td className="listItem">0</td>
              <td className="listItem">Buy Camera</td>
              <td className="listItem">₹ 5000</td>
              <td className="listItem">0x5C9eb5D6a6C2c1B3EFc52255C0b356f116f6f66D</td>
              <td className="listItem">100/155</td>
              <Link to="/requestapproved">
              <td className="listItem"><button>Approve</button></td>
              </Link>
              <td className="listItem"><button>Finalize</button></td>
            </tr>
            <tr>
              <td className="listItem">1</td>
              <td className="listItem">Buy Software</td>
              <td className="listItem">₹ 8000</td>
              <td className="listItem">0x93Ff8fe9BF40051E8763C864B15A0E87f2f96468</td>
              <td className="listItem">20/155</td>
              <td className="listItem"><button>Approve</button></td>
              <td className="listItem"><button>Finalize</button></td>
            </tr>
            <tr>
              <td className="listItem">2</td>
              <td className="listItem">Buy Laptop</td>
              <td className="listItem">₹ 55000</td>
              <td className="listItem">0xD9eC9E840Bb5Df076DBbb488d01485058f421e58</td>
              <td className="listItem">120/155</td>
              <td className="listItem"><button>Approve</button></td>
              <td className="listItem"><button>Finalize</button></td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      </div>
    </>
  );
};

export default RequestList;
