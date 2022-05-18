import React from "react";
//sass
import './Header.scss'

export default function Header(props) {
  return(
    <header className="header d-flex justify-content-between align-items-center">
      <div className="conatiner">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logobox">
            <h1 className="header__logo">ReactMeals</h1>
          </div>
          <button className="header__btn d-flex justify-content-between align-items-center" type="submit" onClick={props.mopen}><i className='bx bx-cart header__icon'></i> Your Cart <span className="header__span">{props.counts}</span></button>
        </div>
      </div>
    </header>
  )
}