import * as React from "react";
import gitHub from "./assets/github-logo.png";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook-logo.png";

const style = {
    display: "flex",
    width: "100%",
    backgroundColor: "lightgrey",
    justifyContent: "center",
};
const styleLogo = {
    padding: "10px",
    width: "2%",
};
const Footer = () => (
    <div style={style}>
        <img src={gitHub} style={styleLogo} />
        <img src={twitter} style={styleLogo} />
        <img src={facebook} style={styleLogo} />
    </div>
);

export default Footer;
