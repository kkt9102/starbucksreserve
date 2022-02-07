import { BrowserRouter, Link } from "react-router-dom";
import '../resources/css/style.css';

// img
import miniLogo from '../resources/img/coffee_list_logo.svg';
import panama from '../resources/img/Panama Boquete.jpg';

const CoffeeList = () => {

    return (
        <>
            <li className="coffee_item">
                <Link to="/Panama">
                    <div className="img_box">
                        <img src={panama} alt=""></img>
                        <div className="coffee_target">
                            <div className="logo">
                                <img src={miniLogo} alt="리저브 로고"></img>
                            </div>
                            <div className="coffee_name">
                                {/* {coffee_k_nmae} */}
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CoffeeList;