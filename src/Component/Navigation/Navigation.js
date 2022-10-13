import {NavLink} from "react-router-dom";
import css from "./Navigation.module.css"

const Navigation = () => {
    return(
        <nav className={css.navMenu}>
            <NavLink to = '' className={isActive => isActive? '' : ''}>Home</NavLink>
            <NavLink to = 'post' className={isActive => isActive? '' : ''}>Post</NavLink>
            <div className={css.dot}></div>
        </nav>
    )
}




export default Navigation