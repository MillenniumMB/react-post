import React from "react";
import classes from "./MyInput.modul.css"


const MyInput = (( props) =>{
    return(
        <div className={classes.MyInput}>
            <input  {...props}/>
        </div>

    )

})

export default MyInput