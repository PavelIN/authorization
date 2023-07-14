
import React, { useEffect, useState } from "react";
import './snackBar.css';
const SnackBar = ({error,isActive,setActive}) => {




 
        const addClass = document.getElementsByClassName("snack");

        const onClick =()=>{
            setActive(false)
        }
    

    return (
        <div className={isActive ? "snack" : 'snack-hidden'}>
            <span className='snak__span'>{error}</span>
            <button onClick={onClick} >Закрыть</button>
        </div>
    );
};

export default SnackBar;