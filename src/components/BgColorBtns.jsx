import Fab from '@mui/material/Fab';
import React from 'react'

function BgColorBtns(props) {
  return (
    <>
    <Fab onClick={props.onClick}  className='bgColor' name='default' sx={{background:'white','&:hover':{backgroundColor:'white'}}}   ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='red'     sx={{background:'#f28b82','&:hover':{backgroundColor:'#f28b82'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='orange'     sx={{background:'#fbbc04','&:hover':{backgroundColor:'#fbbc04'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='yellow'   sx={{background:'#fff475','&:hover':{backgroundColor:'#fff475'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='green'  sx={{background:'#ccff90','&:hover':{backgroundColor:'#ccff90'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='cyan'  sx={{background:'#a7ffeb','&:hover':{backgroundColor:'#a7ffeb'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='blue'  sx={{background:'#cbf0f8','&:hover':{backgroundColor:'#cbf0f8'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='dark-blue'  sx={{background:'#aecbfa','&:hover':{backgroundColor:'#aecbfa'}}} ></Fab>
    <Fab onClick={props.onClick} className='bgColor' name='purple'  sx={{background:'#d7aefb','&:hover':{backgroundColor:'#d7aefb'}}} ></Fab>
    <Fab onClick={props.onClick}  className='bgColor' name='pink'  sx={{background:'#fdcfe8','&:hover':{backgroundColor:'#fdcfe8'}}} ></Fab>
    </>
  )
}

export default BgColorBtns