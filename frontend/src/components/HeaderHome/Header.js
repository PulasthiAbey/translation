import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-left">CRITR.</div>
      <div className="header-right">
        <div className="convert-text">Home</div>
        <Link to={`/convert`}>
          <div className="convert-text">Converter</div>
        </Link>
        <div className="convert-text">About</div>
        <div className="menu-icon">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
