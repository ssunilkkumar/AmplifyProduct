import React, {useState, useContext} from 'react'
import styles from "./Size.module.css"
import { AppContext } from '../Context/AppContextProvider'
import styled from "styled-components"

export const Size = ({item}) => {
    const [query, setQuery] = useState(item[0])
    const {handleSize, mySize} = useContext(AppContext)
    
    const Div = styled.div`
        color: ${query === mySize ? "red" : "black"};
        font-weight: ${query === mySize ? "900" : "400"};
    `

    return (
        <Div onClick={() => handleSize(query)} className={styles.box}>
            <main>{item[0]}</main>
            <div>{item[1]}</div>
        </Div>
    )
}
