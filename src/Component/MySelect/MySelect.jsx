import React from "react";
import css from "./MySlect.module.css"


const MySelect = ({nameSelect, option, value, onChange}) => {
    return (
        <div className={css.containerSelect}>
            <select className={css.Select}
                value={value}
                onChange={onChange}>
                <option disabled value={''}>{nameSelect.name}</option>
                {option.map(option =>
                    (<option key={option.value} value={option.value}>
                        {option.name}
                    </option>))}
            </select>
        </div>

    )
}

export default MySelect
