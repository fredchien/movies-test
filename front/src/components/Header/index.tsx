/**
 * @author [Frederic Chien]
 * @email [contato@kyuubi.com.br]
 * @create date 13-03-2023 15:39:41
 * @modify date 13-03-2023 15:39:41
 * @desc [description]
 */

 function Header(){
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <ul>
                        <li><a href="" onClick={() => logout()}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
      );
 }
 
 export default Header;