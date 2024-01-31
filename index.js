require("dotenv").config();
const express = require("express")
const cors = require("cors")

const errorHandler = require("./scr/middlewares/error");
const notFoundHandler = require("./scr/middlewares/notFound");
const createError = require("./scr/utils/createError");

const authRoute = require("./scr/routes/auth-route");
const authenticate = require("./scr/middlewares/authenticate");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);

app.use(errorHandler);
app.use("*", notFoundHandler);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server run on port"+ " " +port);
});