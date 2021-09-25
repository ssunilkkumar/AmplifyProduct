import React, {useEffect, useState} from 'react'
import { ImgItem } from './ImgItem'
import Grid from '@mui/material/Grid';
import styles from "./Image.module.css"


export const Image = ({image}) => {
    const [pic, setPic] = useState([])

    function entry(image) {
        let array = Object.entries(image).filter(ele => (ele[0] !== "id" && ele[0] !== "createdAt" && ele[0] !== "updatedAt"))
        setPic(array)
    }

    useEffect(() => {
       entry(image)
    }, [image])

    return (
        <div>
            <Grid container spacing={2} style={{height: "600px"}}>
            {
                pic?.map(ele => (
                    <Grid item key={ele[0]} lg={6} sm={12} className={styles.box}>
                    <ImgItem  data={ele[1]} />
                    </Grid>
                ))
            }
            </Grid>
        </div>
    )
}
