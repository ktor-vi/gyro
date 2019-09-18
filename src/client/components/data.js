import * as React from "react";
import logo from "./assets/logo.png";
import backBtn from "./assets/back-button.png";
import Display from "./display";

const styleBox = {
    display: "flex",
    flexDirection: "column",
    borderRight: "solid 4px #FFBE2E",
    width: "30%",
    height: "560px",
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
    textAlign: "justify",
};

const stylesBtn = {
    background: "#FFBE2E",
    width: "28%",
    borderRadius: "8px",
    marginLeft: "40px",
    padding: "5px",
    paddingLeft: "14px",
    paddingRight: "10px",
    fontSize: "14px",
};
const styleBack = {
    width: "16px",
    paddingRight: "16px",
};

const Data = () => {
    const [show, setShow] = React.useState(true);

    if (show === false) {
        return <Display />;
    }
    return (
        <div className={"box"} style={styleBox}>
            <img src={logo} style={styleLogo} />
            <p style={styleTexte}>
                {
                    "Nous sommes persuadés de réduire les coûts de production, ce qui signifie que le comportement est correct, que les conséquences sont inexistantes et que le comportement est correct, que ce soit, que ce soit, que ce soit, que ce soit, mais que tout le monde le sait."
                }
            </p>
            <button
                type={"button"}
                style={stylesBtn}
                onClick={() => setShow(false)}>
                <img src={backBtn} style={styleBack} /> {"Go back"}
            </button>{" "}
        </div>
    );
};

export default Data;
