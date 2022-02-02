import { Link } from "react-scroll";
import '../resources/css/style.css';

const CoffeeList = () => {

    return (
        <>
            <li className="coffee_item">
                <Link to="">
                    <div className="img_box">
                        <img></img>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CoffeeList;