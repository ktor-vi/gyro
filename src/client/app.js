// dependencies
import React, {Component} from "react";
import ReactDOM from "react-dom";

// components
import Data from "./components/Data";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Road from "./components/Road";

// style
import "./style/main.css";
import "./style/button.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMap: true,
            showRoad: false,
        };
        this.switch = this.switchCompo.bind(this);
    }

    switchCompo() {
        if (this.state.showMap) {
            this.setState(() => ({
                showMap: false,
                showRoad: true,
            }));
        } else {
            this.setState(() => ({
                showMap: true,
                showRoad: false,
            }));
        }
    }

    render() {
        return (
            <div>
                <div id={"container"}>
                    <Data map={this.state.showMap} handleSwitch={this.switch} />
                    <Map show={this.state.showMap} />
                    <Road show={this.state.showRoad} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
