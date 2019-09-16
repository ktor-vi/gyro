/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 06/09/2019
 */

import express from "express";
import path from "path";

//fonctionne avec docker-compose up
const {APP_PORT} = process.env;
let port = APP_PORT;
//devient undefined une fois déployer sur heroku
if (typeof port === "undefined") {
    port = process.env.PORT;
}

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});
app.get("/works", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send(`Shit bro it works`);
});
app.get("/gyro", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send(`Go play now`);
});
app.listen(port, () => console.log(`🚀 Server is listening on port ${port}.`));
