import React, {useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import styled from "styled-components"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: 'none',
    outline: 'none',
    borderRadius: "7px"
  };

  const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    span {
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
    }
  `

  const Size = styled.div`
        width: 25px;
        height:25px;
        border-radius: 50%;
        border: 1px solid #dfe4df;
        padding: 10px;
        background: #f8d5f8;
        margin: 0 20px;
        color: ${(props) => (props.size === props.el ? "red" : "black")};
        font-weight: 900;
        &:hover {
        color: #c02121;
        font-weight: 900;
        border: 1px solid red;
    }
  `

    const Quantity = styled.div`
        width: 25px;
        height:25px;
        border-radius: 50%;
        border: 1px solid #cccecc;
        padding: 10px;
        background: #fcd8fc;
        margin: 0 20px;
        color: ${(props) => (props.quantity === props.el ? "red" : "black")};
        font-weight: 900;
        &:hover {
            color: #c02121;
            border: 1px solid red;
        }
    `

  const Container = styled.div`
    padding: 10px;
    border-radius: 7px;
    text-align: center;
    main {
        font-size: 16px;
        font-weight: bold;
        padding: 10px 0;
    };
    button {
        margin-top: 20px;
        padding: 10px;
        width: 50%;
        background-color: rgb(255, 63, 108);
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 7px;
    }

  `
  const sizeArray = ["s", "m", "l", "xl"]
  const quantityArray = [1, 2, 3, 4]

export const CartPop = ({handleClose, open, model, handleSize, handleQuantity, s}) => {
    const [size, setSize] = useState(s);
    const [quantity, setQuantity] = useState(1);


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <Box sx={style}>
                {model && (
                    <Container>
                        <Div>
                            <main>SELECT SIZE</main>
                            <span onClick={handleClose}>X</span>
                        </Div>
                        <hr/>
                        <Div>
                            { sizeArray.map(el => (
                                <Size size={size} el={el} onClick={() =>setSize(el)}>{el}</Size>
                            ))}
                        </Div>
                        <button onClick={() => handleSize(size)}>DONE</button>
                    </Container>
                    
                )}
                {model === false && (
                    <Container>
                        <Div>
                            <main>SELECT QUANTITY</main>
                            <span onClick={handleClose}>X</span>
                        </Div>
                        <hr/>
                        <Div>
                        { quantityArray.map(el => (
                                <Quantity quantity={quantity} el={el} onClick={() =>setQuantity(el)}>{el}</Quantity>
                            ))}
                        </Div>
                        <button onClick={() => handleQuantity(quantity)}>DONE</button>
                    </Container>
                )}
            </Box>
            </Fade>
        </Modal>
    )
}
