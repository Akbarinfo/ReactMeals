import React from "react";
//scss
import './Main.scss'

export default function Product(props) {
  let prodcut = props.product
  return(
    prodcut.map((item, key) => (
      <li key={key+1} className="card__item d-flex justify-content-between">
        <div className="card__box">
          <h3 className="card__subtitle">{item.title}</h3>
          <p className="card__desc">
            {item.desc}
          </p>
          <p className="card__price">${item.price}</p>
        </div>
        <div className="card__box">
          <form onSubmit={props.addProd} id={item.id}  className="card__form" action="">
            <label className="card__label" htmlFor={"input"+key}>
              <span className="card__span">Amount</span>
              <input className="card__input" id={"input"+key} type="number" defaultValue={"1"} min={'1'} max={'5'} />
            </label>
            <button onClick={props.btn} className="card__btn">+ Add</button>
          </form>
        </div>
      </li>
    ))
  )
}