import React from "react";

const HeaderPosts = () => {
  return (
    <header>
      <div className="header">
        <div className="header_container">
          <div>
            <img
              src="./images/instalogo.png"
              alt="Insta Logo"
              className="instaLogo"
            />
          </div>
          <div>
            <img
              src="./images/instainbox.png"
              alt="Insta message"
              className="instaMessage"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPosts;
