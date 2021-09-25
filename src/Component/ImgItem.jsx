import React from 'react'
import styles from "./ImgItem.module.css"

export const ImgItem = ({data}) => {
    return (
        <div className={styles.itemZoom}>
            <img src={data} alt="img"/>
        </div>
    )
}
