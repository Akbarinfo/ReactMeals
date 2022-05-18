import React from "react";
//scss
import './Main.scss'
import Product from "./product";

let serverArr = [
  {
    id: 1,
    title: 'Sushi',
    desc: 'Finest fish and veggies',
    price: '22.99'
  },
  {
    id: 2,
    title: 'Schnitzel',
    desc: 'A german specialty!',
    price: '16.50'
  },
  {
    id: 3,
    title: 'Barbecue Burger',
    desc: 'American, raw, meaty',
    price: '12.99'
  },
  {
    id: 4,
    title: 'Green Bowl',
    desc: 'Healthy...and green...',
    price: '18.99'
  },
]



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
            />

          </ul>
        </div>
      </section>

    </main>
  )
}