import React, {Component} from "react";
import Facebook from "./Facebook";
import Github from "./Github";
import Twitter from "./Twitter";

class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <div className={"links"}>
                    <a
                        href={"https://github.com"}
                        target={"_blank"}
                        alt={"Join us on GitHub"}>
                        <Github height={"20px"} />
                    </a>
                    <a
                        href={"https://twitter.com"}
                        target={"_blank"}
                        alt={"Join us on Twitter"}>
                        <Twitter height={"20px"} />
                    </a>
                    <a
                        href={"https://www.facebook.com"}
                        target={"_blank"}
                        alt={"Join us on Facebook"}>
                        <Facebook height={"20px"} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
