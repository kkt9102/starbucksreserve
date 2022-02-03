import { Link } from "react-scroll";
import '../resources/css/style.css';

// img
import miniLogo from '../resources/img/coffee_list_logo.svg';
import panama from '../resources/img/Panama Boquete.jpg';

const CoffeeList = () => {

    return (
        <>
            <li className="coffee_item">
                <Link to="">
                    <div className="img_box">
                        <img src={panama} alt=""></img>
                        <div className="logo">
                            <img src={miniLogo} alt="리저브 로고"></img>
                        </div>
                        <div className="coffee_name">
                            <span></span>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CoffeeList;