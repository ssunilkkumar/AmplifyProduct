import React from 'react'
import styles from "./Size.module.css"

export const Size = ({item}) => {
    return (
        <div className={styles.box}>
            <main>{item[0]}</main>
            <div>{item[1]}</div>
        </div>
    )
}
