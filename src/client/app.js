/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
// import Test from "./display-component";
import HelloWorld from "./components/hello";
// import Footer from "./footer-component";

ReactDOM.render(<HelloWorld />, document.querySelector("#app"));
