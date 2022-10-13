import React from "react";
import css from './Pagination.module.css'


const Pagination = ({arrayPages, activePage, changePage}) => {
    return(
        <div className={css.Pagination}>
            <span
                  onClick={ () => changePage(activePage === 1? activePage : activePage - 1)}>
                        back
            </span>
            {arrayPages.map( number =>
                <span key = {number}
                      onClick={ () => changePage(number)}
                      className={ activePage === number? `${css.paginationBottom} ${css.paginationBottomActive}` : css.paginationBottom}
                >
                        {number}
                    </span>)}
            <span
                  onClick={ () => changePage(activePage === arrayPages.length? activePage : activePage + 1)}>
                        next
            </span>
        </div>
    )
}

export default Pagination