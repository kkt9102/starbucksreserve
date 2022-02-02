import { Link } from "react-scroll";
import reserve from "../resource/css/Reserve.module.css";

const CoffeeList = () => {

    return (
        <>
            <li className={reserve.coffee_item}>
                <Link to="">
                    <div className={reserve.img_box}>
                        <img></img>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CoffeeList;