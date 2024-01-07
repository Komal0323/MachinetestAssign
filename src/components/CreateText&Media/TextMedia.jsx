import React from "react";
import "./TextMedia.css";
import { Link } from "react-router-dom";

const TextMedia = () => {
  return (
    <div className="textmedia">
      <h2 className="head">Create Text & Media</h2>

      <div className="section-1">
        <div className="input-left">
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

          <label>Business Name</label>
          <input type="text" placeholder="  Add your business name" />
        </div>
        <div className="input-right">
          <label id="des-1">Description 01</label>
          <input
            id="des"
            type="text"
            placeholder="  Add primary text to help users understand more about your products, services or offers"
          />

          <label id="des-2">Button Label</label>
          <input
            id="but"
            type="text"
            placeholder="  select a label that that best suits your add"
            
          />
          <i className="angle1 fa-solid fa-angle-down"></i>
        </div>

      </div>
      <div className="section-2">
      <label>Website URl</label>
          <input
            id="last-tag"
            type="text"
            placeholder="  Add the URL of the landing page you want redirect users to"
          />
      </div>

      <Link to="/createads">
      <button className="back-btn">Back</button>
      </Link>

      <Link to="/miniform">
      <button className="sub-btn">Submit</button>
      </Link>
    </div>
  );
};

export default TextMedia;
