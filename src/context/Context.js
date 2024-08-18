import { createContext, useContext, useReducer } from 'react';


import { cartReducer, productReducer } from './Reducers';

const Cart = createContext();


const Context = ({children}) => {

    // const products = [...Array(20)].map(() => ({
    //   id: faker.string.uuid(),
    //   name: faker.commerce.productName(),
    //   price: faker.commerce.price(),
    //   image: faker.image.url(),
    //   inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    //   fastDelivery: faker.datatype.boolean(),
    //   ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    // }));

    const products = [
      {
        "id": "1",
        "name": "Noise Icon 4",
        "price": "2199",
        "image": "1.jpg",
        "inStock": "1",
        "fastDelivery": true,
        "ratings": "4",
      },
      {
        "id": "2",
        "name": "Fastrack Revoltt",
        "price": "1199",
        "image": "2.jpg",
        "inStock": "3",
        "fastDelivery": false,
        "ratings": "3",
      },
      {
        "id": "3",
        "name": "beatXP Marv Neo",
        "price": "999",
        "image": "3.jpg",
        "inStock": "5",
        "fastDelivery": true,
        "ratings": "4",
      }, 
      {
        "id": "4",
        "name": "boAt Wave Fury",
        "price": "1399",
        "image": "4.jpg",
        "inStock": "0",
        "fastDelivery": true,
        "ratings": "2",
      },
      {
        "id": "5",
        "name": "Boult Drift BT",
        "price": "1399",
        "image": "5.jpg",
        "inStock": "0",
        "fastDelivery": false,
        "ratings": "5",
      },
      {
        "id": "6",
        "name": "boAt Storm Call ",
        "price": "1599",
        "image": "6.jpg",
        "inStock": "6",
        "fastDelivery": true,
        "ratings": "4",
      },
      {
        "id": "7",
        "name": "Noise Vision 3",
        "price": "2999",
        "image": "7.jpg",
        "inStock": "4",
        "fastDelivery": true,
        "ratings": "5",
      },
      {
        "id": "8",
        "name": "Gamesir T800 BT",
        "price": "698",
        "image": "8.jpg",
        "inStock": "0",
        "fastDelivery": false,
        "ratings": "5",
      },
      {
        "id": "9",
        "name": "Fire-Boltt Rise BT",
        "price": "1299",
        "image": "9.jpg",
        "inStock": "5",
        "fastDelivery": true,
        "ratings": "1",
      },
      {
        "id": "10",
        "name": "beatXP Marv Super",
        "price": "1199",
        "image": "10.jpg",
        "inStock": "0",
        "fastDelivery": false,
        "ratings": "4",
      },

    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
      });

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
        {children}
    </Cart.Provider>
  )
}
export const CartState = () => {
    return useContext(Cart);
}

export default Context

