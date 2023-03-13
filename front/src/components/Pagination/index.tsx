/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 16:10:35
 * @modify date 13-03-2023 16:10:35
 * @desc [description]
 */
 import Pagination from 'react-bootstrap/Pagination';
 
 interface IPaginate {
    total: number,
    active: number,
    paginate: (page:number)=>any,
 }
 
 function Paginations(props:IPaginate){
    let items:any = [];
    for (let number = 1; number <= Math.ceil(props.total / 3); number++) {
        items.push(
          <Pagination.Item key={number} active={number === props.active} onClick={() => props.paginate(number)}>
            {number}
          </Pagination.Item>
        );
      }
    return(
        <Pagination>{items}</Pagination>
    )
 }

 export default Paginations;