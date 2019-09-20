import React, {Component} from "react";
import Logo from "./logo";
import Find from "./Find";

class Data extends Component {
    render() {
        return (
            <div className={"data"}>
                <Logo />
                <p className={"lorem"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className={"lorem"}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <Find
                    map={this.props.map}
                    handleSwitch={this.props.handleSwitch}
                />
            </div>
        );
    }
}

export default Data;
