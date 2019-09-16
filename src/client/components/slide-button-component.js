import * as React from "react";

const stylesBtn = {
    display: "block",
    padding: "10px",
    background: "#FFBE2E",
    borderRadius: "5px",
    fontStyle: "lescend deca",
    fontSize: "14px",
};

const SlideBtn = () => (
    <div>
        <button type={"button"} style={stylesBtn}>
            {"Sports center"}
        </button>
        <button type={"button"} style={stylesBtn}>
            {"Bus station"}
        </button>
        <button type={"button"} style={stylesBtn}>
            {"Find"}
        </button>
    </div>
);

export default SlideBtn;
