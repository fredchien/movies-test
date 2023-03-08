/**
 * @author [Frederic Chien]
 * @email [fred.chien@domatech.com.br]
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

    userRepositories.create({name, email, password});

    return res.status(201).send();

 });

 usersRoutes.get("/", (req: Request, res: Response) => {
    const users = userRepositories.get();

    return res.send(users);
 });


 export {usersRoutes};