import { v4 as uuidV4 } from 'uuid';

class Movie {
    id?: string;
    name: string;
    description: string; 
    category: string; 
    duration: number; 
    image?: string;
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Movie };