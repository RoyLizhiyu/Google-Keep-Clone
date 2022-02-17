import React, { useState } from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
function SideBar(props) {

  const handleClick = (event) =>{

    event.preventDefault();
    props.operations(event);
    for (let i= 0; i <document.getElementsByClassName('sideBtn').length; i++){
      document.getElementsByClassName('sideBtn')[i].style.backgroundColor= 'transparent';
    }
    document.getElementsByName(event.target.name)[0].style.backgroundColor = '#feefc3'

  }



//'#feefc3'
  return (
    <div className='sideBar'>
        <button name='all' className='sideBtn' onClick={handleClick} ><LightbulbOutlinedIcon />&nbsp;&nbsp;&nbsp;&nbsp;All</button>
        <button name='complete' className='sideBtn'  onClick={handleClick} ><AssignmentTurnedInOutlinedIcon/>&nbsp;&nbsp;&nbsp;&nbsp;Complete</button>
        <button name='archived' className='sideBtn' onClick={handleClick} ><ArchiveIcon/>&nbsp;&nbsp;&nbsp;&nbsp;Archive</button>
        <button name='deleted' className='sideBtn' onClick={handleClick} ><DeleteForeverOutlinedIcon/>&nbsp;&nbsp;&nbsp;&nbsp;Deleted</button>
    </div>
  )
}

export default SideBar