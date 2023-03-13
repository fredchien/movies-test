/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 10:20:18
 * @modify date 13-03-2023 10:20:18
 * @desc [description]
 */
 import { Router, Request, Response } from 'express';
 import { UserRepositories } from '../repositories/UsersRepositories';
 
  const authRoutes = Router();
  const userRepositories = new UserRepositories;

  authRoutes.post("/", async (req: Request, res: Response) => {

    const {email, password} = req.body;

    const userAlreadyExists = userRepositories.findByEmail(email);

    if(!userAlreadyExists){
        return res.status(400).json({message: "User not exists"})
    }

    const comparePass = await userRepositories.comparePass(password, email);

    if(!comparePass){
        return res.status(400).json({message: "Password incorrect"})
    }

    const login = userRepositories.login(email, password);

    

    return res.status(201).json(login);

 });


 export {authRoutes};