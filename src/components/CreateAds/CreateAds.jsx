import React from "react";
import "./CreateAds.css";
import { Link } from "react-router-dom";

const CreateAds = () => {
  return (
    <div className="createads">
      <h2 className="head">Create Ads</h2>
      <div className="cards">
        <div className="ad-1">
          <div className="square"></div>
          <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="rectangle-1"></div>
          <div className="rectangle-2">
          <i className="icon fa-solid fa-grip-lines"></i>
          <div className="sub-rectangle"></div>
          <i className="icon fa-solid fa-magnifying-glass"></i>
          </div>

          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <div className="rectangle-6"></div>

          <div className="text-box">
            <p>Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk</p>
            <hr />
            <p>Հայերեն Shqip ‫العربية Български Català 中文简体 Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi </p>
          </div>

          <div className="rectangle-7"></div>
          <div className="rectangle-8"></div>
          <div className="rectangle-9"></div>
          <div className="rectangle-10"></div>

          <div className="bottom-text">
            <p>Create</p>
            <h6>Text Ad</h6>
          </div>
        </div>
        <div className="ad-2">
          <div className="square"></div>
          <div className="rectangle"></div>
          <div className="circle"></div>
          <div className="rectangle-1"></div>
          <div className="rectangle-2">
          <i class="icon fa-solid fa-grip-lines"></i>
          <div className="sub-rectangle"></div>
          <i class="icon fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <div className="rectangle-6"></div>

          <div className="media-box">
            <img src="https://www.gardenpatch.co.uk/wp-content/uploads/2021/04/@theplantrescuer-e1617977841968.jpg" alt=""/>
          </div>

          <div className="media-2-box">
          <img className="img1" src="https://www.gardenpatch.co.uk/wp-content/uploads/2021/04/@theplantrescuer-e1617977841968.jpg" alt=""/>
          <img className="img2" src="https://www.gardenpatch.co.uk/wp-content/uploads/2021/04/@theplantrescuer-e1617977841968.jpg" alt=""/>
          </div>
          <div className="bottom-text">
            <p>Create</p>
            <h6>Media Ad</h6>
          </div>
        </div>


      </div>
      <Link to="/textmedia">
      <button className="nxt-btn">Next</button>
      </Link>
      
    </div>
  );
};

export default CreateAds;
