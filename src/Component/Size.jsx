import React, { useContext} from 'react'
import styles from "./Size.module.css"
import { AppContext } from '../Context/AppContextProvider'
import styled from "styled-components"

const Div = styled.div`
        color: ${(props) => (props.query === props.mySize ? "red" : "black")};
        font-weight: ${(props) => (props.query === props.mySize ? "900" : "400")};
    `

export const Size = ({item}) => {
    const query = item[0]
    const {handleSize, mySize} = useContext(AppContext)
    
    return (
        <Div query={query} mySize={mySize} onClick={() => handleSize(query)} className={styles.box}>
            <main>{item[0]}</main>
            <div>{item[1]}</div>
        </Div>
    )
}
