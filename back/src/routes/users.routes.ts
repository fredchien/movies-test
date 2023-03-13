/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 08-03-2023 18:28:43
 * @modify date 08-03-2023 18:28:43
 * @desc [description]
 */
 import { Router, Request, Response } from 'express';
import { UserRepositories } from '../repositories/UsersRepositories';

 const usersRoutes = Router();
 const userRepositories = new UserRepositories;

 usersRoutes.post("/", (req: Request, res: Response) => {

    const {name, email, password} = req.body;

    const userAlreadyExists = userRepositories.findByEmail(email);

    if(userAlreadyExists){
      return res.status(400).json({message: "User already exists"})
    }

    userRepositories.create({name, email, password});

    return res.status(201).send();

 });

 usersRoutes.get("/", (req: Request, res: Response) => {
    const users = userRepositories.get();

    return res.send(users);
 });


 export {usersRoutes};