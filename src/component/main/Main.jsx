import React from "react";
//scss
import './Main.scss'
import Product from "./product";

export default function Main(props) {

  return(
    <main>
      <section className="main-header">
          <h2 className="main-header__title">Delicious Food, Delivered To You</h2>
          <p className="main-header__text">
            Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p className="main-header__text">
            All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
          </p>
      </section>

      <section className="card">
        <div className="card__main">
          <ul className="card__list">
            <Product
              product={props.product}
              addProd={props.addProd}
              btn={props.btn}
            />

          </ul>
        </div>
      </section>

    </main>
  )
}