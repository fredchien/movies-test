/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 08-03-2023 18:33:00
 * @modify date 08-03-2023 18:33:00
 * @desc [description]
 */

import { User } from '../model/User';
const bcrypt = require('bcrypt');
let jwt = require("jsonwebtoken");

interface IUserDTO {
    name: string;
    email: string;
    password: string;
}
class UserRepositories {
    private users: User[];

    constructor(){
        this.users = [{
            name: "Fred",
            email: "fred_chien@yahoo.com.br",
            password: "$2b$10$pGkB60eboajUPYW5JnTk0.t.T2VWK6D7AjWyCMFeTncCk6rlv0h2i"
        }];
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

    get(): User[]{
        return this.users;
    }

    findByEmail(email: string): User{
        const user = this.users.find((user) => user.email === email);
        return user;
    }

    async comparePass(password: string, email: string){
        const user = this.users.find((user) => user.email === email);

        const compare = await bcrypt.compare(password, user.password).then(function(res){
            return res;
        });

        return compare;
    }

    login(email: string, password: string) {
        const token = jwt.sign({ email: email }, 'df3e0c81d9ae15aedc95d22cb1aa937d');

        return token;
    }
}

export { UserRepositories };