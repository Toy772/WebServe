import express, {Request, Response} from "express";
const app = express();

app.use(express.json());

let port = 3000;

type User = {
    id:number;
    nome:string;
    email:string;
};


let id = 0;
let usuarios: User[] =[];

//Rotas
app.get(`/`,(req: Request, res:Response) =>{
    res.send(" Hello world ");
});

app.post(`/users`,(req: Request, res:Response) =>{
    let user = req.body;
    user.id = id++;
    usuarios.push(user);
    
    res.send({
        message: `usuario criado com sucesso!`
    });
});

app.get(`/users/:id`,(req: Request , res:Response) =>{
    let userId = Number(req.params.id);
    let i =  usuarios.findIndex(i =>i.id === userId);
    res.send(usuarios[i]);
});

//----------------------------------------------------------------------------------


app.delete(`/users/:id`,(req: Request , res:Response) =>{
    let userId = Number(req.params.id);
    let i = usuarios.findIndex(i =>i.id === userId)
    
    if(i !== -1){
        usuarios.splice(i,1);//remove usuario do array
        res.send({mensage:`Item deletado`})
    }
    else{
        res.send({mensage:`Item nao encontrado`})
    }
        
});


app.put(`/users/:id`,(req: Request, res: Response) =>{
    let userId = Number(req.params.id);
    let i = usuarios.findIndex(i => i.id === userId);
    let user = req.body;
    
    
    if(i >= usuarios.length -1)
    {
        usuarios[i].nome = user.nome;
        usuarios[i].email = user.email;
        res.send({
            message:`Usuario alterado com sucesso`
        })
    }
    else{
        res.send({message:`item nao existe`})
    }

});

//-----------------------------------
//liga o servidor

app.listen(port, () =>{
    console.log(`Servidor ativo na porta: ` + port)
});