import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMarker } from '@fortawesome/free-solid-svg-icons'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
function Header(props) {
  const [inputValue, setInputValue] = useState('');


  const handleClick = (event)=> {
    event.preventDefault();
    setInputValue('');
  }
  const cancelButton = <div style={{marginLeft: '10px',marginRight: '10px'}}><button className="searchButton" onClick={handleClick}><CancelOutlinedIcon/></button></div>



  return (
    <header className="header" >
    <button className='menuB' ><MenuOutlinedIcon sx={{color:'#5f6368',}} fontSize="medium"/></button>
      <h1 ><FontAwesomeIcon icon={faMarker}/> Keep</h1>
      <form className="searchForm">
        <div style={{marginLeft: '10px',marginRight: '30px'}}><button className="searchButton" ><SearchIcon /></button></div>
        <input type='text' placeholder="Search" value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} ></input>
        {inputValue !=='' &&  cancelButton}
      </form>
    </header>
  );
}

export default Header;
