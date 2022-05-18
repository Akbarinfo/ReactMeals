import { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import Hero from './component/hero/Hero';
import Main from './component/main/Main';
import Modal from './component/main/modal/Modal';

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

    //Added Product
    let addProduct = (e) => {
      e.preventDefault()
      let idd = e.target.id
      let value = e.target[0].value
      let newArr = []
      let arr = []
      this.state.product.map(item => {
        newArr.push(item)
      })

      newArr.map(item => {
        if(+idd === item.id) {
          item.count += +value
          arr.push(item)
        }
      })

      this.setState({newProuct: [...this.state.newProuct, ...arr]})
      this.setState({product: [...newArr]})
    }

    //All Count
    let allCount = 0
    this.state.product.map(item => {
      allCount += +item.count
    })

    let minusBtn = (e) => {
    //  console.log(e.nativeEvent.path[1].id)

     let idd = e.nativeEvent.path[1].id
     let newArr = []
     let arr = []
     this.state.newProuct.map(item => {
       newArr.push(item)
     })

     newArr.map(item => {
       if(+idd === item.id) {
         item.count -= 1
         arr.push(item)
       }
     })

     this.setState({newProuct: [...this.state.newProuct, ...arr]})
    }

    let plusBtn = (e) => {
      let idd = e.nativeEvent.path[1].id
      let newArr = []
      let arr = []
      this.state.newProuct.map(item => {
        newArr.push(item)
      })

      newArr.map(item => {
        if(+idd === item.id) {
          item.count += 1
          arr.push(item)
        }
      })

      this.setState({newProuct: [...this.state.newProuct, ...arr]})
    }

    return(
      <>
        <Header
        mopen={modalOpen}
        counts={allCount}
        />
        <Hero />
        <Main
          product={this.state.product}
          addProd={addProduct}
        />
        <Modal
          open={this.state.modal}
          close={modalOff}
          product={this.state.newProuct}
          minus={minusBtn}
          plus={plusBtn}
        />
      </>
    )
  }
}

export default App;
