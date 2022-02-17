import React, {useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./InputArea";
import Notes from "./Notes";
import SideBar from "./SideBar";
function App() {
  // fill the notes state with JSON data stored in local storage, need to parse the data to make them objects. Object.values returns every value in local storage in an un-parsed form. 
  const [notes, setNotes] = useState(sortByDate(parseStorage(Object.values(window.localStorage))));
  const [path, setPath] = useState('all');
  function addNote(title, content) {
    const newNote = {
      title: title,
      content: content,
      _id: new Date().getTime().toString(),
      isComplete: false,
      isArchive: false,
      isDelete: false,
      isPin:false,
      bgColor: 'white',
    }
    try {
      // add new note to local storage.
      window.localStorage.setItem(newNote._id,JSON.stringify(newNote)); 
      setNotes(prev =>{return [newNote, ...prev ]});
    } catch (error) {
      console.log(error + ' add note failed!');
      return;
    }
    // if try failed, no new notes would be added to the Notes state.
    
  };

  function updateNote(edited, id){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.title = edited.title;
      parsed.content = edited.content;
      window.localStorage.setItem(id,JSON.stringify(parsed));
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));
    } catch (error) {
      console.log(error + 'update note failed')
    }

  }

  function deleteNote(id){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.isDelete = true;
      parsed.isPin = false;
      parsed.isArchive = false;
      parsed.isComplete = false;
      window.localStorage.setItem(id, JSON.stringify(parsed));
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));

    } catch (error) {
      console.log(error + ' delete note failed');
    }


  }

  function completeNote(id){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.isComplete = !(parsed.isComplete);
      window.localStorage.setItem(id, JSON.stringify(parsed));
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));

    } catch (error) {
      console.log(error + ' complete note failed');
    }
    
  }

  function pinNote(id){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.isPin = !(parsed.isPin);
      window.localStorage.setItem(id, JSON.stringify(parsed));
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));

      // const newNotes = notes.filter((element)=>{
      //   return element._id !== id;
      // })
      // newNotes.unshift(parsed)
      // setNotes(newNotes);
    } catch (error) {
      console.log(error + ' pin note failed');
    }
    
  }

  function ArchiveNote(id){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.isArchive = !(parsed.isArchive);
      window.localStorage.setItem(id, JSON.stringify(parsed));
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));

    } catch (error) {
      console.log(error + ' Archive note failed');
    }
    
  }
//this method deletes only one note.
  function sideBarClicks(event){
    setPath(event.target.name);
  }

  function onPDelete(id){
    try {
      window.localStorage.removeItem(id);
      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))));
    } catch (error) {
      console.log(error + ' delete note failed');
    }

  }


//this method deletes all notes
  function permanentDelete(){
    try {
      notes.map(note=>{
        if (note.isDelete){
          window.localStorage.removeItem(note._id);
        }
      })

      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))))

    } catch (error) {
      console.log(error + ' permanent delete note failed');
    }

  }

  function setBgColor(id, color){
    try {
      const parsed = JSON.parse(window.localStorage.getItem(id));
      parsed.bgColor = color;
      window.localStorage.setItem(id, JSON.stringify(parsed));


      setNotes(sortByDate(parseStorage(Object.values(window.localStorage))))


    } catch (error) {
      console.log(error + ' set color of a  note failed');
    }

  }


  return (
    <div>
      <Header/>
      <SideBar  operations={sideBarClicks} />
      <InputArea path={path} onClick = {addNote} onPD = {permanentDelete}/>
      <Notes notes={notes}
       onClick={deleteNote}
        onArchive={ArchiveNote} 
        onComplete={completeNote} 
        onPin={pinNote} 
        path={path}
        onPDelete = {onPDelete}
        onBgColor = {setBgColor}
        onUpdate = {updateNote}
        />
      <Footer />
    </div>
  ); 
}

const parseStorage = (list)=>{
  let result = [];
  for (let i =0; i < list.length; i++){
    result.push(JSON.parse(list[i]));
  }
  return result;
}

export default App;

function sortByDate(list){
  return list.sort((a,b)=>{
    // Date().getTime().toString() is something like this: 1645075330616, the bigger the number the latest. so, b._id - a._id  will make notes (newest to oldest) (biggest to smallest). 
    return b._id - a._id 
  })
}