import * as React from "react";

const stylesBtn = {
    background: "#FFBE2E",
    borderRadius: "5px",
    padding: "5px",
    paddingLeft: "14px",
    paddingRight: "14px",
    fontStyle: "lescend deca",
    fontSize: "14px",
};
const DisplayBtn = () => (
    <button type={"button"} style={stylesBtn}>
        {"What are you looking for ?"}
    </button>
);

export default DisplayBtn;
