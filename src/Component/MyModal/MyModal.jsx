import React from "react";
import classes from "./MyModal.module.css";


const MyModal = ({children, ...props}) => {
    let classVisible = [classes.myModal]


    if(props.modalActive) {
        classVisible.push(classes.activeModal)
    }


    return(
        <div className={classVisible.join(' ')} onClick={() => props.setModalActive(false)}>
            <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal