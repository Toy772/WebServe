import { Request, Response } from "express";

type User = {
    id:number;
    nome:string;
    email:string;
};
let id = 0;
let usuarios: User[] =[];

export class UsersController {
    static getAll(req: Request, res:Response) {
        res.send(usuarios);
    }

    static getById(req: Request, res: Response){
        let userId = Number(req.params.id);
        let i =  usuarios.findIndex(i =>i.id === userId);
        res.send(usuarios[i]);
    }
    
    static save(req: Request, res: Response){
        let user = req.body;
        user.id = id++;
        usuarios.push(user);
    
        res.send({
            message: `usuario criado com sucesso!`
        });
    }

    static remove(req: Request, res: Response){
        let userId = Number(req.params.id);
        let i = usuarios.findIndex(i =>i.id === userId)
            
        if(i !== -1){
            usuarios.splice(i,1);//remove usuario do array
            res.send({mensage:`Item deletado`})
        }
        else{
            res.send({mensage:`Item nao encontrado`})
        }
    }
    static update(req: Request, res: Response){
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
    }
}