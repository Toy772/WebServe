import express from "express";
import {routes} from "./routes/index";
const app = express();

routes(app)

let port = 3000;

//-----------------------------------
//liga o servidor

routes(app);

app.listen(port, () =>{
    console.log(`Servidor ativo na porta: ` + port)
});