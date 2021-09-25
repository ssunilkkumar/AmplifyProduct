import React, { useState, useEffect} from 'react'
import styles from "./Home.module.css";
import Amplify, {API, graphqlOperation} from 'aws-amplify'
import awsconfig from "./../aws-exports"
import {listProducts} from "./../graphql/queries"
import { Image } from '../Component/Image';
import { Detail } from '../Component/Detail';

Amplify.configure(awsconfig)
export const Home = ({handleCart}) => {
    const [data, setData] = useState(null)
    const [cart, setCart] = useState(null)

    const fetchProduct = async () => {
      try{
          const productData = await API.graphql(graphqlOperation(listProducts))
          const productList = productData.data.listProducts.items[0]
          //console.log("product List = ", productList)
          setData(productList)
      } catch(error) {
          console.log(`error on fetching product: `, error)
      }
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    
    return (
        <div className={styles.container}>
           {
               data && (
                   <Image className={styles.image} image={data.image}/>
               )
           }
           {
               data && (
                    <Detail data={data} handleCart={handleCart}/>
               )
           }
        </div>
    )
}
