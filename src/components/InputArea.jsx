import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function InputArea(Props) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [textRows, setTextRows] = useState(1);
    const [open,setOpen]= useState(false);
    const inputBox = <input type='text' onChange={handleTitle} value={inputTitle} name='title' placeholder='Title' />
    const submitFab = <Zoom in={true}><Fab onClick={handleClick} ><ArrowForwardIosIcon fontSize="small" /></Fab></Zoom>
    const PDeleteBtn = Props.path==='deleted' && (
    <div className="PDbtn" style={{position:'relative', top:'-65px' ,left:'0.8%'}} >
        <Button 
        onClick={()=>setOpen(true)} 
        variant="outlined" 
        className='PDbtn' 
        color='error' 
        sx={{textTransform: 'none'}}
        >Clear recycle bin
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        >
        <DialogTitle id="alert-dialog-title">
          Permanently delete all notes?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will wipe all notes in recycle bin and cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{color:'black'}} onClick={()=>(setOpen(false))}>Cancel</Button>
          <Button onClick={handlePD} autoFocus>
            Clear
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );

    function handleTitle(event){
        const newTitle = event.target.value;
        setInputTitle(newTitle);
    }
    function handleClose(){
        setOpen(false);
    }

    function handlePD(){
        Props.onPD();
        setOpen(false);

    }
    function handleContent(event){
        const newContent = event.target.value;
        setInputContent(newContent);
    }
    function handleClick(event){
        event.preventDefault();
        if (inputTitle === '' && inputContent === '') {
            return;
        } else if (inputTitle === ''){
            Props.onClick('Untitled',inputContent);
            
        } else{
            Props.onClick(inputTitle,inputContent);
        }
        setInputContent('');
        setInputTitle('');
        setTextRows(1);
    }

    function handleTextClick(){
        setTextRows(3);
    }
    
    


    return (
        <div className='inputA'>
        
        <Zoom in={true}>
        <form className='create-note'>
        { textRows ===3 && inputBox}
        <textarea required
         onClick={handleTextClick}  
         type='text'
         onChange={handleContent} 
         value={inputContent} 
         rows = {textRows}
         name='content' 
         placeholder='Take a note...'  
         />
        {textRows===3 && submitFab}
        
            
        </form>
        </Zoom>
        {PDeleteBtn}

        </div>
    )
};





export default InputArea;