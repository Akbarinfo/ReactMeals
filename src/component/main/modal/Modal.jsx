import React from "react";
//scss
import './Modal.scss'

export default function Modal(props) {
  return(
    <section className="modal"
    style={{
      transform: props.open ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.open ? '1' : '0'
    }}
    >
      <div onClick={props.close} className="modal__backdrop"></div>
      <div className="modal__main">
        <ul className="modal__list">
          {props.product.map((item, key) => (
            <li key={key+3} className="modal__item d-flex justify-content-between align-items-center">
              <div>
                <h2 className="modal__title">{item.title}</h2>
                <div className="modal__pricebox d-flex justify-content-between align-items-center">
                  <p className="modal__price">${item.price}</p>
                  <p className="modal__count">x {item.count}</p>
                </div>
              </div>
              <div id={item.id} className="d-flex">
                <button onClick={props.minus} className="modal__btn">-</button>
                <button onClick={props.plus} className="modal__btn">+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="modal__totalbox d-flex justify-content-between align-items-center">
          <p>Total Amount</p>
          <p>$39.49</p>
        </div>
        <div className="d-flex float-end">
          <button onClick={props.close} className="modal__btnclose">Close</button>
          <button className="modal__btnorder">Order</button>
        </div>
      </div>
    </section>
  )
}