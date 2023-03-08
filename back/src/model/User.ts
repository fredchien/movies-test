/**
 * @author [Frederic Chien]
 * @email [fred.chien@domatech.com.br]
 * @create date 08-03-2023 18:20:55
 * @modify date 08-03-2023 18:20:55
 * @desc [description]
 */
import { v4 as uuidV4 } from 'uuid';

class User{
    id?: string;
    name: string;
    email: string;
    password: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { User }