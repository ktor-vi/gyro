import React, {Component} from "react";
import {Map, TileLayer, Marker} from "react-leaflet";

class Road extends Component {
    render() {
        if (this.props.show) {
            return (
                <div className={"road"}>
                    <Map
                        center={[50.633213399999995, 5.5864945]}
                        zoom={15}
                        style={{width: "auto", height: "100vh"}}>
                        <TileLayer
                            attribution={
                                '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            }
                            url={"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}
                        />
                        <Marker position={[50.633213399999995, 5.5864945]} />
                    </Map>
                </div>
            );
        }
        return null;
    }
}

export default Road;
