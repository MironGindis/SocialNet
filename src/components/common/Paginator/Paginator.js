import React, {useState} from "react";
import './Paginator.css';

let Paginator = (props) => {
    let [portionNumber, setPortionNumber] = useState(1);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let portionSize = 15;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionsCount = Math.ceil(pagesCount / portionSize);
    let leftPortionBorder = (portionNumber - 1)*portionSize + 1;
    let rightPortionBorder = portionNumber * portionSize;
    let leftarrs = '<';
    let rightarrs = '>';
    return <div className='Paginator'>
        {portionNumber > 1 && <div>
            <div className='Users__Pages Arrs' onClick={() => setPortionNumber(portionNumber - 1)}>{leftarrs}</div>
            <div onClick={() => {
                props.onPageChanged(1)
            }} className={props.currentPage === 1 ? 'Users__Pages CurrentPage' : 'Users__Pages'}> 1 </div>
        </div>}
        {pages.filter(p => p >= leftPortionBorder && p <= rightPortionBorder).map(p =>
            <div onClick={() => {
                props.onPageChanged(p)
            }} className={props.currentPage === p ? 'Users__Pages CurrentPage' : 'Users__Pages'}> {p} </div>
        )}
        {portionNumber < portionsCount && <div>
            <div onClick={() => {
                props.onPageChanged(pagesCount)
            }} className={props.currentPage === pagesCount ? 'Users__Pages CurrentPage' : 'Users__Pages'}> {pagesCount} </div>
            <div className='Users__Pages Arrs' onClick={() => setPortionNumber(portionNumber + 1)}>{rightarrs}</div>
        </div>}
    </div>
}
export default Paginator;