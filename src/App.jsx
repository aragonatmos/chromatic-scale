import { useState } from 'react'
import './App.css'
import FileUpload from './components/FileUpload';
import PianoDisplay from './components/PianoDisplay';

function App() {
  const [notes, setNotes] = useState([]);
  const [active, setActive] = useState([]);

  const handleNotesReceived = (newNotes) => {
    setNotes(newNotes);
  };

  const playAll = async () => {
    for(const noteObj of notes) {
      setActive([noteObj.midi]);
      await new Promise(r => setTimeout(r, noteObj.time * 1000));
    }
    setActive([]);
  };

  return (
    <>
      <div>
        <h1>Chromatic Scale</h1>
        <FileUpload onNotesReceived={handleNotesReceived} />
        <button onClick={playAll}>Play</button>
        <PianoDisplay notesToHighlight={active} />
      </div>
    </>
  )
}

export default App;
