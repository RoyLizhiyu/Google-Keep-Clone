import React, { useEffect, useState } from "react";
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckIcon from '@mui/icons-material/Check';
import { Menu, MenuItem, Zoom } from "@mui/material";
import { Fade } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';
import Popover from '@mui/material/Popover';
import EditIcon from '@mui/icons-material/Edit';
import BgColorBtn from "./BgColorBtns";
import TextareaAutosize from '@mui/material/TextareaAutosize';
function Note(Props) {
  const [isMO,setIsMO] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBgDialog, setshowBgDialog] = useState(null);
  const [bgColor, setBgColor] = useState(Props.bgColor);
  const [isEdit, setIsEdit] = useState(false);
  const [edited, setEdited] = useState({title:Props.title, content:Props.content});
  const textDecor = Props.isComplete ? 'line-through': 'none'
  const saveEditBtn = (isEdit?(<button title='save' className="options tooltip" type="submit" form="changeNote"><CheckIcon></CheckIcon></button>):(<button title="Edit" className="options tooltip" onClick={handleNoteClick}><EditIcon fontSize='small'/></button>))
  function handleClick(){
    Props.onClick(Props.id);
  }

  function handleMouseOver(){
    setIsMO(true);
  }

  function handleMouseLeave(){
    setIsMO(false);
  }

  function handleArchive(){
    Props.onArchive(Props.id)
  }

  function handleComplete(){
    Props.onComplete(Props.id)
  }

  function handlePin(){
    Props.onPin(Props.id)
  }

  function handlePDelete(){
    Props.onPDelete(Props.id);
  }

  function handleNoteClick(event){
    event.preventDefault();
    setIsEdit(true);

  }

  function handleContent(event){
    const newContent = event.target.value;
    setEdited(prev=>{return {...prev, content:newContent}})
  }
  function handleTitle(event){
    const newTitle = event.target.value;
    setEdited(prev=>{return {...prev, title:newTitle}})
  }

  function handleUpdate(event){
    event.preventDefault();
    Props.onUpdate(edited,Props.id)
    setIsEdit(false);

  }
  function handleBackground(event){
    
    switch (event.target.name) {
      case 'default':
        Props.onBgColor(Props.id, 'white')
        setBgColor('white');
        break;

      case 'red':
        Props.onBgColor(Props.id, '#f28b82')
        setBgColor('#f28b82');
        break;

      case 'orange':
        Props.onBgColor(Props.id, '#fbbc04')
        setBgColor('#fbbc04');
        break;      


      case 'yellow':
        Props.onBgColor(Props.id, '#fff475')
        setBgColor('#fff475');
        break;
        
      case 'green':
        Props.onBgColor(Props.id, '#ccff90')
        setBgColor('#ccff90');
        break;
      case 'cyan':
        Props.onBgColor(Props.id, '#a7ffeb')
        setBgColor('#a7ffeb');
        break;
      
      case 'blue':
        Props.onBgColor(Props.id, '#cbf0f8')
        setBgColor('#cbf0f8');
        break;

      case 'dark-blue':
        Props.onBgColor(Props.id, '#aecbfa')
        setBgColor('#aecbfa');
        break;
    
      case 'purple':
        Props.onBgColor(Props.id, '#d7aefb')
        setBgColor('#d7aefb');
        break;
        
      case 'pink':
        Props.onBgColor(Props.id, '#fdcfe8')
        setBgColor('#fdcfe8');
        break;


      default:
        break;
    }

  }
  // this magical function makes so that when a textarea with pre-filled text got auto focused, 
  //the focus is on the end of the text. 
  //Basically, the function clears event.target.value before auto focus event. And then after auto focus fired,
  // event.target.value will be filled again with its previous value. Pure magic.
  function focusEnd(event){ 
    let temp_value = event.target.value;
    event.target.value = '';
    event.target.value = temp_value;
  }

  const finishButton =<Fade in={true} ><button title={Props.isComplete?'incomplete this note':'complete this note'} onClick={handleComplete} className='finishButton'><CheckIcon fontSize="small" /></button></Fade>
  const optionPalatte = <Fade in={true} ><div className="optionPalatte">
    <button title="notify me" className="options tooltip"  ><AddAlertIcon fontSize='small'/> </button>
    <button title="Co-worker" className="options tooltip"><AccountBoxIcon fontSize='small'/></button>
    <button title="background" onClick={(event)=>setshowBgDialog(event.target)} className="options tooltip"><ColorLensIcon fontSize='small'/></button>
    <Popover
    open= {Boolean(showBgDialog)}
    anchorEl= {showBgDialog}
    onClose={()=>setshowBgDialog(null)}
    anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
    
    transformOrigin={{
    vertical: 'top',
    horizontal: 'center',
  }}
    >
    <BgColorBtn onClick={handleBackground}></BgColorBtn>

    </Popover>
    <button title={Props.isArchive?"un-archive":"Archive"} onClick={handleArchive} className="options tooltip"><ArchiveIcon fontSize='small'/></button>
    {saveEditBtn}
    <button title="More" className="options tooltip" onClick={(event)=>{setAnchorEl(event.target)}} ><MoreVertIcon fontSize='small'/></button>
    <Menu
    anchorEl={anchorEl}
    onClose={()=>{setAnchorEl(null)}}
    open={Boolean(anchorEl)}
    >{Props.isDelete?(<MenuItem onClick={handlePDelete} >Permanently delete</MenuItem>):(<MenuItem onClick={handleClick} >Delete</MenuItem>)}
    </Menu>
  </div>
  </Fade>

  const pinButton =<Fade in={true} ><button onClick={ handlePin} title={Props.isPin?'un-pin this note':'pin to top'} className="pinButton"><PushPinIcon style={Props.isPin? {color: '#FF6363',}:{}} /></button></Fade> 
  const contentStyle = {
    textDecoration: textDecor,
  }

  const displayArea = <><h1 style={contentStyle}>{Props.title}</h1><p style={contentStyle}>{Props.content}</p></>
  const inputArea = <form 
  onSubmit={handleUpdate}
  className='changeNote'
  id = 'changeNote'
  >
  
    <input 
    value={edited.title}
    placeholder="title"
    onChange = {handleTitle}
    >
    
    </input>
    <TextareaAutosize 
    autoFocus
    value = {edited.content}
    onFocus= {focusEnd}
    placeholder="content"
    onChange = {handleContent}
    >
    
    </TextareaAutosize>
  </form>

  return (
    <Zoom in={true} >
      <div className="note"  onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} style={{background: bgColor}} >
        {isMO&&finishButton}
        {(isMO||Props.isPin)&&pinButton}
        {isEdit?inputArea:displayArea}
        {isMO&&optionPalatte}

      </div>
    </Zoom>
  );
}


export default Note;
