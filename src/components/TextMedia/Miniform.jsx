import React from "react";
import "./Miniform.css";
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import Popup from "reactjs-popup";

const Miniform = () => {
  
  return (
    <div className="miniform" id="blur">
      <h2 className="head">Create Text & Media</h2>
      <div className="sec-1">
        <div className="left-1">
          <label>Heading 01</label>
          <input
            type="text"
            placeholder="  Add a heading that would make user interested"
          />

          <label>Heading 02</label>
          <input
            type="text"
            placeholder="  Add a heading that would make user interested"
          />
        </div>
        <div className="right-1">
          <label id="des-1">Description 01</label>
          <input
            id="des"
            type="text"
            placeholder="  Add primary text to help users understand more about your products, services or offers"
          />
        </div>
      </div>
      <div className="sec-2">
        <div className="tag-1">
          <label>Landscape Marketing Image(1.9:1)</label>
          <input
            type="text"
            placeholder="  Add the URL of the image you want to use for the ad"
          />
        </div>
        <div className="tag-2">
          <label>Portrait Marketing Image(4:5)</label>
          <input
            type="text"
            placeholder="  Add the URL of the image you want to use for the ad"
          />
        </div>
        <div className="tag-3">
          <label>Square Marketing Image(1:1)</label>
          <input
            type="text"
            placeholder="  Add the URL of the image you want to use for the ad"
          />
        </div>
      </div>

      <div className="sec-3">
        <label>Video URl</label>
        <input
          id="last-tag"
          type="text"
          placeholder="  Add the URL of the video you want to use for the add"
        />
      </div>

      <div className="sec-4">
        <div className="sec-left">
          <label>Business Name</label>
          <input type="text" placeholder="  Add your business name" />
        </div>

        <div className="sec-right">
          <label>Button Label</label>
          <input
            type="text"
            placeholder="  select label that that best suits your add"
          />
          <i className="angle fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="sec-5">
        <label>Website URl</label>
        <input
          id="last-tag"
          type="text"
          placeholder="  Add the URL of the landing page you want redirect users to"
        />
      </div>

      <Link to="/textmedia">
        <button className="back-btn">Back</button>
      </Link>

      <Link>
      <Popup trigger=
        {<button className="sub-btn">Submit</button>}
        modal nested
        
        />{
          close =>(
            <div className="mod">
              <div className="con">
                Submitted
              </div>
              <div>
                <button onClick={()=>close()}>close</button>
              </div>
            </div>
          )
        }
      </Link>
        
        
      

      

      
    </div>
    
  );
};

export default Miniform;
