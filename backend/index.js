//import express
import express from "express";

//import cors
import cors from "cors";

//import routes
import Router from "./routes/routes.js"

const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors());

//use router
app.use(Router);

//port
app.listen(8000, () => {
    console.log("Server running successfully")
})

