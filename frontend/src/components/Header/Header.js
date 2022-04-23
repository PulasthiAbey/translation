import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to={`/`}>
        <div className="header-left">CRITR.</div>
      </Link>
      <div className="header-right">
        <div className="convert-text">Convert From Text</div>
        <div className="menu-icon">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
