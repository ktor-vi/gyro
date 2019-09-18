import React, {Component} from "react";
import Data from "./data";
import Map from "./map";
import Footer from "./footer";

class Layout extends Component {
    render() {
        return (
            <div>
                <Data />
                <Map />
                <Footer />
            </div>
        );
    }
}

export default Layout;
