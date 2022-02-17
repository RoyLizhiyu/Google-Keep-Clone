
import React from 'react'
import Note from './Note'
function Notes({notes, onClick,onArchive,onComplete,onPin, onPDelete,path, onBgColor,onUpdate}) {

  const pinSorted = notes.sort((a,b)=>{
    return Number(b.isPin) - Number(a.isPin);
  })

  const allNotes = pinSorted.map((note,index)=>{
    if (!note.isDelete&&!note.isArchive){
    return <Note
    title = {note.title}
    content = {note.content}
    isDelete = {note.isDelete}
    isComplete = {note.isComplete}
    isArchive = {note.isArchive}
    isPin = {note.isPin}
    id = {note._id}
    key = {note._id}
    isPin = {note.isPin}
    onClick = {onClick}
    onArchive = {onArchive}
    onComplete = {onComplete}
    onPin = {onPin}
    onPDelete = {onPDelete}
    bgColor = {note.bgColor}
    onBgColor = {onBgColor}
    onUpdate = {onUpdate}
    >
    </Note>
    }
  })

  const deletedNotes = notes.map((note,index)=>{
    if (note.isDelete){
      return <Note
      title = {note.title}
      content = {note.content}
      isDelete = {note.isDelete}
      isComplete = {note.isComplete}
      isArchive = {note.isArchive}
      id = {note._id}
      key = {note._id}
      onClick = {onClick}
      onArchive = {onArchive}
      onComplete = {onComplete}
      onPin = {onPin}
      onPDelete = {onPDelete}
      bgColor = {note.bgColor}
      onBgColor = {onBgColor}
      onUpdate = {onUpdate}
      >
      </Note>
    }
  })

  const archivedNotes = pinSorted.map((note,index)=>{
    if (note.isArchive){
      return <Note
      title = {note.title}
      content = {note.content}
      isDelete = {note.isDelete}
      isComplete = {note.isComplete}
      isArchive = {note.isArchive}
      isPin = {note.isPin}
      id = {note._id}
      key = {note._id}
      onClick = {onClick}
      onArchive = {onArchive}
      onComplete = {onComplete}
      onPin = {onPin}
      onPDelete = {onPDelete}
      bgColor = {note.bgColor}
      onBgColor = {onBgColor}
      onUpdate = {onUpdate}
      >
      </Note>
    }
  })

  const completedNotes = pinSorted.map((note,index)=>{
    if (note.isComplete){
      return <Note
      title = {note.title}
      content = {note.content}
      isDelete = {note.isDelete}
      isComplete = {note.isComplete}
      isArchive = {note.isArchive}
      isPin = {note.isPin}
      id = {note._id}
      key = {note._id}
      onClick = {onClick}
      onArchive = {onArchive}
      onComplete = {onComplete}
      onPin = {onPin}
      onPDelete = {onPDelete}
      bgColor = {note.bgColor}
      onBgColor = {onBgColor}
      onUpdate = {onUpdate}
      >
      </Note>
    }
  })

  const displaytype = ()=>{
    switch (path) {
      case 'all':
        return allNotes

      case 'deleted':
        return deletedNotes

      case 'archived':
        return archivedNotes

      case 'complete':
        return completedNotes;
    
      default:
        allNotes
    }
  }

  return (

    <div className='notes'>
    {displaytype()}

    </div>
  )
}

export default Notes