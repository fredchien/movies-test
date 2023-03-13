/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 14:49:18
 * @modify date 13-03-2023 14:49:18
 * @desc [description]
 */
 import Card from 'react-bootstrap/Card';

 import {Imovie} from '../../Interface/IMovie';

 interface Props {
    movie: Imovie,
 }
  

 function CardMovie({movie}: Props){
    return (
        <Card style={{ width: '18rem' }} className="mb-3">
          <Card.Img variant="top" src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>
              {movie.description}
            </Card.Text>
          </Card.Body>
        </Card>
      );
 }
 
 export default CardMovie;