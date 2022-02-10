import { BrowserRouter, Link } from "react-router-dom";
import '../resources/css/style.css';
import Coffee_names from './coffee-list/name';

// img
import miniLogo from '../resources/img/coffee_list_logo.svg';
import panama from '../resources/img/coffee_list/Panama Boquete.jpg';

const CoffeeList = (props) => {
    // const panama_name = '파나마 보케테';
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
                                {/* {panama_name} */}
                                {/* {this.state.Coffee_names} */}
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CoffeeList;