import express from "express";

const app = express();


let port = 3000;

//Rotas

app.get(`/`,(req,res) =>{
    res.send(`Hello world`);
});

//-----------------------------------
//liga o servidor

app.listen(port, () =>{
    console.log(`Servidor ativo na porta: ` + port)
});