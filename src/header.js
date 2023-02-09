import { Link } from "react-router-dom";

const Header = () => {
    return (  
        <div className="Header">
            <h1> Ecommerce Site </h1>
            
            <Link to="/"><button className="cartbtn2">Home</button></Link>
            <Link to="/cart"><button className="cartbtn">Cart</button></Link>
        </div>
    );
}
 
export default Header;