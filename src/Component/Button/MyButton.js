import React from "react";
import css from "./MyButton.module.css"


const MyButton = ({children, ...props}) =>{
    return(
        <div >
            <button {...props} className={css.Button}>
                {children}
            </button>
        </div>
    )

}

export default MyButton