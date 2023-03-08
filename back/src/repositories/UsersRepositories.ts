/**
 * @author [Frederic Chien]
 * @email [fred.chien@domatech.com.br]
 * @create date 08-03-2023 18:33:00
 * @modify date 08-03-2023 18:33:00
 * @desc [description]
 */

import { User } from '../model/User';
const bcrypt = require('bcrypt');

interface IUserDTO {
    name: string;
    email: string;
    password: string;
}
class UserRepositories {
    private users: User[];

    constructor(){
        this.users = [];
    }

    create({name, email, password}: IUserDTO):void{

        const user = new User();
        bcrypt.hash(password, 10).then(function(hash){
            // console.log(hash);
            Object.assign(user, {
                name,
                email,
                password: hash
            })
    
        });

        this.users.push(user)

    }

    get(){
        return this.users;
    }
}

export { UserRepositories };