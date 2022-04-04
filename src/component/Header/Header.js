import React from "react";

import CustomLink from "../CustomeLink/CustomeLink";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="allCustomeLink">
        <CustomLink className="customelink" to={"/"}>
          Home<hr></hr>
        </CustomLink>
        <CustomLink className="customelink" to={"/review"}>
          Reviews<hr></hr>
        </CustomLink>
        <CustomLink className="customelink" to={"/dashboard"}>
          Dashboard<hr></hr>
        </CustomLink>
        <CustomLink className="customelink" to={"/blog"}>
          Blog<hr></hr>
        </CustomLink>
        <CustomLink className="customelink" to={"/about"}>
          About<hr></hr>
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
