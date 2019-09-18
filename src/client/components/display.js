import * as React from "react";
import logo from "./assets/logo.png";
import loupe from "./assets/magnifier.png";

const styleBox = {
    display: "flex",
    flexDirection: "column",
    borderRight: "solid 4px #FFBE2E",
    width: "30%",
    height: "560px",
    fontStyle: "Montserrat",
    textAlign: "Justify",
    padding: "2%",
};
const styleLogo = {
    width: "140px",
    marginLeft: "10%",
    marginTop: "20%",
};
const styleTexte = {
    margin: "10%",
    fontStyle: "lescend deca",
};

const stylesBtn = {
    background: "#FFBE2E",
    width: "40%",
    borderRadius: "8px",
    marginLeft: "40px",
    padding: "5px",
    paddingLeft: "14px",
    fontSize: "14px",
};
const styleLoupe = {
    width: "16px",
    paddingRight: "20px",
};

const Display = () => (
    <div className={"box"} style={styleBox}>
        <img src={logo} style={styleLogo} />
        <p style={styleTexte}>
            {" "}
            {
                "Hac ita persuasione reducti intra moenia bellatores obseratis undique portarum aditibus, propugnaculis insistebant et pinnis, congesta undique saxa telaque habentes in promptu, ut si quis se proripuisset interius, multitudine missilium sterneretur et lapidum."
            }{" "}
        </p>
        <button type={"button"} style={stylesBtn}>
            <img src={loupe} style={styleLoupe} /> {"Find banks?"}
        </button>{" "}
    </div>
);

export default Display;
