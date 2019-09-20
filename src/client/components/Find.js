import React, {Component} from "react";

class Find extends Component {
    render() {
        let btnText = "find bank";
        if (!this.props.map) {
            btnText = "back";
        }
        return (
            <nav className={"btn-link"}>
                <ul>
                    <li>
                        <a href={"#"} onClick={this.props.handleSwitch}>
                            {btnText}
                            <span />
                            <span />
                            <span />
                            <span />
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Find;
