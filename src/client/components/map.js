import React, {Component} from "react";
import Bank from "./Bank";

class Map extends Component {
    render() {
        if (this.props.show) {
            return (
                <div className={"map"}>
                    <Bank height={"85vh"} />
                    <p id={"artist"}>
                        Thanks to{" "}
                        <a
                            href={"https://www.freepik.com/vectorpouch"}
                            target={"_blank"}
                            alt={"Follow his work"}>
                            Vectorpouch
                        </a>
                    </p>
                </div>
            );
        }
        return null;
    }
}

export default Map;
