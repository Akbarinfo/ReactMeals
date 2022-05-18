import { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Main from './component/main/Main';
import Modal from './component/main/modal/Modal';

let arr = []
let allPrice = 0

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      product: [
        {
          id: 1,
          title: 'Sushi',
          desc: 'Finest fish and veggies',
          price: '22.99',
          count: 0
        },
        {
          id: 2,
          title: 'Schnitzel',
          desc: 'A german specialty!',
          price: '16.50',
          count: 0
        },
        {
          id: 3,
          title: 'Barbecue Burger',
          desc: 'American, raw, meaty',
          price: '12.99',
          count: 0
        },
        {
          id: 4,
          title: 'Green Bowl',
          desc: 'Healthy...and green...',
          price: '18.99',
          count: 0
        },
      ],

      newProuct: [],
      modal: false,
      btn: false
    }
  }
  render() {
    //Modal open
    let modalOpen = () => {
      this.setState({modal: true})
    }
    //Modal off
    let modalOff = () => {
      this.setState({modal: false})
    }

    ///btn
    let btns = () => {
      this.setState({btn: true})
      setTimeout(() => {
        this.setState({btn: false})
      }, 300)
    }

    //Added Product
    let addProduct = (e) => {
      e.preventDefault()
      let idd = e.target.id
      let value = e.target[0].value
      let newArr = []

      this.state.product.map(item => {
        newArr.push(item)
      })

      let existFood = arr.find(food => food.id === +idd)
      if(!existFood) {
        let foodFromNewArr = newArr.find(food => food.id === +idd)
        foodFromNewArr.count += +value
        arr.push(foodFromNewArr)
      } else {
        existFood.count += +value
      }

      this.setState({newProuct: [...arr]})
      this.setState({product: [...newArr]})
    }

    //All Count
    let allCount = 0
    this.state.product.map(item => {
      allCount += +item.count
    })

    ///totalPrice
    let totalPrice = 0
    this.state.newProuct.map(pri => {
      let price = 0
      let coun = 0

      price += +pri.price
      coun += +pri.count
      allPrice = coun * price

      totalPrice += allPrice

    })

    let minusBtn = (e) => {
      let idd = e.nativeEvent.path[1].id
      arr.map(item => {
        if(item.id === +idd) {
          item.count -= 1
          if(item.count === 0) {
           arr = arr.filter( el => el.id !== +idd);
          }
        }
      })
      this.setState({newProuct: [...arr]})
    }

    let plusBtn = (e) => {
      let idd = e.nativeEvent.path[1].id
      arr.map(item => {
        if(item.id === +idd) {
          item.count += 1
        }
      })
      this.setState({newProuct: [...arr]})
    }

    return(
      <>
        <Header
        mopen={modalOpen}
        counts={allCount}
        btn={this.state.btn}
        />
        <Hero />
        <Main
          product={this.state.product}
          addProd={addProduct}
          btn={btns}
        />
        <Modal
          open={this.state.modal}
          close={modalOff}
          product={this.state.newProuct}
          minus={minusBtn}
          plus={plusBtn}
          total={totalPrice}
        />[]
      </>
    )
  }
}
export default App;
